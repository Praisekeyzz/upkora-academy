import { z } from 'zod';

export const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),

  // Application
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),

  // Auth
  JWT_SECRET: z.string().min(8),

  // Mail (Zeptomail)
  ZEPTOMAIL_API_KEY: z.string().optional(),
  ZEPTOMAIL_SENDER_EMAIL: z.string().email().optional(),
  ZEPTOMAIL_SENDER_NAME: z.string().default('Upkora Academy'),
});

export type Env = z.infer<typeof envSchema>;

export function validate(config: Record<string, unknown>) {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    throw new Error('Invalid environment variables');
  }

  return result.data;
}
