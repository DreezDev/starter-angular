# Pipes

Folder for **custom Angular pipes** shared across the application.

## Purpose

Contains reusable pipes (`@Pipe`) that transform data directly in templates, keeping presentation logic separate from components.

## Usage Examples

- Pipe for formatting dates in a specific format.
- Pipe for text transformation (capitalize, truncate, etc.).
- Pipe for filtering or mapping lists in the template.
- Pipe for formatting currency values.

## Conventions

- Each pipe should live in its own file (e.g., `truncate.pipe.ts`).
- Pipes should be **standalone** and **pure** (`pure: true`) by default.
- File names should follow the pattern: `name.pipe.ts`.
- Use strict typing in the `transform` method.
