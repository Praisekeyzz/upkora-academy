import axios from 'axios';
import { QueueItem } from '../types';
import { ApiError } from '../errors';

let isRefreshing = false;
let refreshQueue: QueueItem[] = [];

export function getIsRefreshing() { return isRefreshing; }
export function setIsRefreshing(val: boolean) { isRefreshing = val; }

export function addToRefreshQueue(item: QueueItem) {
  refreshQueue.push(item);
}

export function processQueue(error: Error | null) {
  refreshQueue.forEach((item) => {
    if (error) {
      item.reject(error);
    } else {
      item.resolve();
    }
  });
  refreshQueue = [];
}

export async function attemptTokenRefresh(): Promise<void> {
  await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'}/auth/refresh`,
    {},
    { withCredentials: true }
  );
}
