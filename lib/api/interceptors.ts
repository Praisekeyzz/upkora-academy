import { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { ExtendedAxiosRequestConfig, ApiResponse } from './types';
import { ApiError } from './errors';
import { logger } from './utils/logger';
import { showErrorToast } from './utils/toast';
import { shouldRetry, RETRY_DELAY_MS, delay } from './utils/retry';
import { 
  getIsRefreshing, 
  setIsRefreshing, 
  addToRefreshQueue, 
  processQueue, 
  attemptTokenRefresh 
} from './utils/refresh';

export function setupInterceptors(apiClient: AxiosInstance) {
  // Request Interceptor
  apiClient.interceptors.request.use(
    (config: ExtendedAxiosRequestConfig) => {
      config._requestId = Math.random().toString(36).slice(2, 7);
      config._startTime = Date.now();
      config._retryCount = config._retryCount ?? 0;

      if (typeof window !== 'undefined' && !navigator.onLine) {
        showErrorToast('You are offline. Please check your internet connection.');
        return Promise.reject(new ApiError('No internet connection', 0, 'OFFLINE'));
      }

      logger.request(config);
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor
  apiClient.interceptors.response.use(
    (response: AxiosResponse<ApiResponse>) => {
      const config = response.config as ExtendedAxiosRequestConfig;
      const durationMs = config._startTime ? Date.now() - config._startTime : 0;
      logger.response(response, durationMs);
      return response.data as any;
    },
    async (error: AxiosError<ApiResponse>) => {
      const config = error.config as ExtendedAxiosRequestConfig | undefined;
      const durationMs = config?._startTime ? Date.now() - config._startTime : undefined;
      logger.error(error, durationMs);

      if (!error.response) {
        if (config && shouldRetry(config, error)) {
          config._retryCount = (config._retryCount ?? 0) + 1;
          await delay(RETRY_DELAY_MS * 2 ** (config._retryCount - 1));
          return apiClient(config as AxiosRequestConfig);
        }
        showErrorToast('Network error. Please check your connection.');
        return Promise.reject(new ApiError(error.message, 0, 'NETWORK_ERROR'));
      }

      const { status, data } = error.response;
      const message = data?.message || error.message || 'Something went wrong';

      // 401 Auth Refresh Logic
      if (status === 401 && !config?._skipAuthRedirect) {
        if (getIsRefreshing()) {
          return new Promise((resolve, reject) => {
            addToRefreshQueue({ resolve, reject });
          }).then(() => apiClient(config as AxiosRequestConfig));
        }

        setIsRefreshing(true);
        try {
          await attemptTokenRefresh();
          processQueue(null);
          return apiClient(config as AxiosRequestConfig);
        } catch (err) {
          processQueue(err as Error);
          if (typeof window !== 'undefined') {
            toast.error('Session expired. Redirecting to login...');
            setTimeout(() => { window.location.href = '/auth/login'; }, 1500);
          }
          return Promise.reject(err);
        } finally {
          setIsRefreshing(false);
        }
      }

      // Retry Logic
      if (config && shouldRetry(config, error)) {
        config._retryCount = (config._retryCount ?? 0) + 1;
        await delay(RETRY_DELAY_MS * 2 ** (config._retryCount - 1));
        return apiClient(config as AxiosRequestConfig);
      }

      if (!config?._skipErrorToast) {
        showErrorToast(message);
      }

      return Promise.reject(new ApiError(message, status, data?.error ?? String(status), data));
    }
  );
}
