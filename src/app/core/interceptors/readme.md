# Interceptors

Folder for **HTTP interceptors** that process requests and responses globally.

## Purpose

Contains functional HTTP interceptors that intercept outgoing requests or incoming responses, allowing centralized handling of cross-cutting concerns like authentication tokens, error handling, and logging.

## Usage Examples

- Auth interceptor to attach JWT tokens to outgoing requests.
- Error interceptor to catch and handle HTTP errors globally.
- Loading interceptor to show/hide a spinner during requests.
- Retry interceptor to automatically retry failed requests.

## Conventions

- Use **functional interceptors** (`HttpInterceptorFn`) instead of class-based interceptors.
- Each interceptor should live in its own file (e.g., `auth.interceptor.ts`).
- File names should follow the pattern: `name.interceptor.ts`.
- Register interceptors via `provideHttpClient(withInterceptors([...]))` in the app config.
