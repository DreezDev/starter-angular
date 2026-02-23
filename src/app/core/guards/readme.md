# Guards

Folder for **route guards** that control access to application routes.

## Purpose

Contains functional route guards that protect routes by evaluating conditions before navigation occurs, such as authentication status or user permissions.

## Usage Examples

- Authentication guard to prevent access to protected routes.
- Role-based guard to restrict routes by user role.
- Unsaved changes guard to warn users before leaving a form.

## Conventions

- Use **functional guards** (`CanActivateFn`, `CanDeactivateFn`, etc.) instead of class-based guards.
- Each guard should live in its own file (e.g., `auth.guard.ts`).
- File names should follow the pattern: `name.guard.ts`.
- Guards should be pure and delegate complex logic to services.
