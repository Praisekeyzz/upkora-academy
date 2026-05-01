import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import rateLimit from "express-rate-limit";
// import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');
  const frontendUrl = configService.get<string>('FRONTEND_URL');

  app.setGlobalPrefix('api', {
    exclude: ['/', '/health'],
  });

  // Apply our global standard response interceptor and error filter
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip out properties that are not defined in the DTO
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // app.use(
  //   helmet({
  //     contentSecurityPolicy: env.NODE_ENV === "production" ? undefined : false,
  //     crossOriginEmbedderPolicy: false,
  //   }),
  // );

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 200,
      message: {
        success: false,
        error: "rate_limit_exceeded",
        message:
          "You have made too many requests. Please wait a few minutes before trying again.",
      },
      standardHeaders: true,
      legacyHeaders: false,
      skip: (req) => {
        return req.path.includes("/health");
      },
    })
  );

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }

      const allowedOrigins = (frontendUrl || 'http://localhost:3000')
        .split(',')
        .map((url) => url.trim().replace(/\/$/, '')); // trim and remove trailing slashes

      if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        console.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(port || 5000);
  console.log(`Application is running on: http://localhost:${port || 5000}/api/v1`);
}
bootstrap();
