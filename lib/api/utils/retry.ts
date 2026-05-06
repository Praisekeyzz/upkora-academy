import { AxiosError } from 'axios';
import { ExtendedAxiosRequestConfig } from '../types';

export const MAX_RETRIES = 3;
export const RETRY_DELAY_MS = 500;
const RETRYABLE_METHODS = new Set(['get', 'head', 'options']);

export function shouldRetry(config: ExtendedAxiosRequestConfig, error: AxiosError): boolean {
  const retryCount = config._retryCount ?? 0;
  if (retryCount >= MAX_RETRIES) return false;

  const method = config.method?.toLowerCase() ?? '';
  if (!RETRYABLE_METHODS.has(method)) return false;

  const isNetworkError = !error.response;
  const isRetryableStatus =
    error.response?.status !== undefined &&
    error.response.status >= 500 &&
    error.response.status !== 501;

  return isNetworkError || isRetryableStatus;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
