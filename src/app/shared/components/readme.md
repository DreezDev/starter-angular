# Components

Folder for **shared, reusable UI components** used across the application.

## Purpose

Contains generic UI components that do not belong to a specific module or feature and can be used in multiple parts of the application.

## Usage Examples

- Custom buttons, inputs, modals.
- Layout components (header, footer, sidebar).
- Loading indicators (spinners, skeletons).
- Feedback components (alerts, toasts, confirmations).

## Conventions

- Each component should live in its own subfolder (e.g., `confirm-dialog/confirm-dialog.component.ts`).
- Components should be **standalone** and use `ChangeDetectionStrategy.OnPush`.
- Use `input()` and `output()` functions instead of `@Input` / `@Output` decorators.
- File names should follow the pattern: `name.component.ts`.
- Keep components small and focused on a single responsibility.
