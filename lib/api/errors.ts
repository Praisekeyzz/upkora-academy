export class ApiError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly data: unknown;
  public readonly requestId?: string;

  constructor(
    message: string,
    status: number,
    code = 'UNKNOWN_ERROR',
    data?: unknown,
    requestId?: string
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.data = data;
    this.requestId = requestId;

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  isClientError() { return this.status >= 400 && this.status < 500; }
  isServerError() { return this.status >= 500; }
  isUnauthorized() { return this.status === 401; }
  isForbidden() { return this.status === 403; }
  isNotFound() { return this.status === 404; }
  isValidation() { return this.status === 422; }
  isRateLimited() { return this.status === 429; }
}
