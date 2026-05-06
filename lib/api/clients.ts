import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiResponse, ExtendedAxiosRequestConfig } from './types';
import { setupInterceptors } from './interceptors';

// Core Instance
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Initialize Interceptors
setupInterceptors(apiClient);

/**
 * Senior-level API wrapper
 */
export const api = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiClient.get(url, config);
  },

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiClient.post(url, data, config);
  },

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiClient.put(url, data, config);
  },

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiClient.patch(url, data, config);
  },

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiClient.delete(url, config);
  },

  /** 
   * Requests that don't trigger automatic error toasts 
   */
  silently: {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
      return apiClient.get(url, { ...config, _skipErrorToast: true } as ExtendedAxiosRequestConfig);
    },
    post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
      return apiClient.post(url, data, { ...config, _skipErrorToast: true } as ExtendedAxiosRequestConfig);
    },
    patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
      return apiClient.patch(url, data, { ...config, _skipErrorToast: true } as ExtendedAxiosRequestConfig);
    },
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
      return apiClient.delete(url, { ...config, _skipErrorToast: true } as ExtendedAxiosRequestConfig);
    },
  },
};

export * from './types';
export * from './errors';
export default apiClient;
