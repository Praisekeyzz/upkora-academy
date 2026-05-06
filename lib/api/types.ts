import { InternalAxiosRequestConfig } from 'axios';

/** Standard response envelope from the NestJS backend */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
  error: string | null;
  timestamp: string;
}

/** Custom metadata for Axios requests */
export interface RequestMetadata {
  _requestId?: string;
  _retryCount?: number;
  _startTime?: number;
  _skipErrorToast?: boolean;
  _skipAuthRedirect?: boolean;
}

export type ExtendedAxiosRequestConfig = InternalAxiosRequestConfig & RequestMetadata;

export type QueueItem = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
};
