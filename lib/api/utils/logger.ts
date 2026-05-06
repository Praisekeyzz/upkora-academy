import { AxiosResponse, AxiosError } from 'axios';
import { ExtendedAxiosRequestConfig } from '../types';

const isDev = process.env.NODE_ENV === 'development';

export const logger = {
  request(config: ExtendedAxiosRequestConfig) {
    if (!isDev) return;
    console.groupCollapsed(
      `%c[API] → ${config.method?.toUpperCase()} ${config.url}`,
      'color: #4ade80; font-weight: bold;'
    );
    console.log('Request ID:', config._requestId);
    console.log('Payload:', config.data ?? config.params ?? '—');
    console.groupEnd();
  },

  response(response: AxiosResponse, durationMs: number) {
    if (!isDev) return;
    const config = response.config as ExtendedAxiosRequestConfig;
    console.groupCollapsed(
      `%c[API] ← ${response.status} ${config.method?.toUpperCase()} ${config.url} (${durationMs}ms)`,
      'color: #60a5fa; font-weight: bold;'
    );
    console.log('Request ID:', config._requestId);
    console.log('Response:', response.data);
    console.groupEnd();
  },

  error(error: AxiosError, durationMs?: number) {
    if (!isDev) return;
    const config = error.config as ExtendedAxiosRequestConfig | undefined;
    console.groupCollapsed(
      `%c[API] ✖ ${error.response?.status ?? 'NET_ERR'} ${config?.method?.toUpperCase()} ${config?.url} ${durationMs != null ? `(${durationMs}ms)` : ''}`,
      'color: #f87171; font-weight: bold;'
    );
    console.log('Request ID:', config?._requestId);
    console.log('Error Data:', error.response?.data ?? error.message);
    console.groupEnd();
  },
};
