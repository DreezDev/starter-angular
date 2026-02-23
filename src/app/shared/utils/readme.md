# Utils

Folder for **reusable utility functions** used throughout the application.

## Purpose

Contains pure functions and helpers that encapsulate common logic, preventing code duplication across components and services.

## Usage Examples

- Formatting functions (dates, currencies, strings).
- Custom validators for reactive forms.
- Data transformation functions.
- Helpers for array or object manipulation.

## Conventions

- Each file should export functions related to a single domain (e.g., `date.utils.ts`, `string.utils.ts`).
- Functions should be **pure** (no side effects) whenever possible.
- Use strict typing for parameters and return values.
