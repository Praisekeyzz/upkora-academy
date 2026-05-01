# Upkora Academy - Backend API

The robust, scalable backend for **Upkora Academy**, built with [NestJS](https://nestjs.com/), [Prisma](https://www.prisma.io/), and [PostgreSQL](https://www.postgresql.org/).

## 🚀 Features

- **Authentication**: Secure JWT-based auth with Passport and Argon2.
- **Role-Based Access Control**: Managed permissions for Students, Instructors, and Admins.
- **Database**: Type-safe database interactions with Prisma ORM.
- **Waitlist Management**: Simple module to capture early interest.
- **Mailing**: Integrated mail service for verification and notifications.
- **Trust & Safety**: Global validation pipes, rate limiting, and standard response interceptors.

## 🏗️ Project Structure

```
src/
├── auth/           # Authentication logic & strategies
├── common/         # Global filters, interceptors, and decorators
├── mail/           # Email service integration
├── prisma/         # Prisma client module
├── waitlist/       # Waitlist captures
├── app.module.ts   # Root application module
└── main.ts         # Entry point with global configs
```

## ⚙️ Setup & Installation

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=8000
DATABASE_URL="postgresql://user:password@localhost:5432/upkora_db?schema=public"
JWT_SECRET="your-super-secret-key"
FRONTEND_URL="http://localhost:3000"
```

### 3. Database Migration
```bash
npx prisma migrate dev --name init
```

## 🏃 Running the App

```bash
# development
pnpm run start:dev

# production mode
pnpm run start:prod
```

## 🧪 Testing

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e
```

## 🔐 API Standards

- **Prefix**: All endpoints are prefixed with `/api/v1`
- **Global Pipes**: All inputs are validated using `class-validator`.
- **Standard Responses**: All successful responses follow a consistent format:
  ```json
  {
    "success": true,
    "data": { ... },
    "message": "Operation successful"
  }
  ```

---

© 2026 Upkora Academy. Private and proprietary.
