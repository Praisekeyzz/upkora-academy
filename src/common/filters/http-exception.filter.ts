import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Determine the status code
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Get the exception message (if it's a DTO validation error, it will be an array)
    const exceptionResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'An unexpected error occurred. Please try again later.' };

    const message =
      typeof exceptionResponse === 'object' && 'message' in exceptionResponse
        ? (exceptionResponse as any).message
        : exceptionResponse;

    // The standard output structure
    response.status(status).json({
      success: false,
      message: Array.isArray(message) ? message[0] : message, // Standardized message
      data: null,
      error: {
        statusCode: status,
        type: exception.name || 'Error',
        details: Array.isArray(message) ? message : message,
        path: request.url,
      },
      timestamp: new Date().toISOString(),
    });
  }
}
