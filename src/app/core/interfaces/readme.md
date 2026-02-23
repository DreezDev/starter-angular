# Interfaces

Folder for **TypeScript interfaces and type definitions** used across the application.

## Purpose

Contains shared type definitions that describe the shape of data models, API responses, and other structures, ensuring type safety and consistency throughout the codebase.

## Usage Examples

- Data models representing API entities (e.g., `User`, `Product`).
- API response and request payload types.
- Configuration or option types for services and components.
- Enums and union types for shared constants.

## Conventions

- Each file should group interfaces related to a single domain (e.g., `user.interface.ts`, `auth.interface.ts`).
- File names should follow the pattern: `name.interface.ts`.
- Use `interface` for object shapes and `type` for unions or utility types.
- Avoid using the `any` type; prefer `unknown` when the type is uncertain.
