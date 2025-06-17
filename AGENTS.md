# Contributor Guidelines

## Coding Style
- Use **2 spaces** for indentation. Never use tabs.
- For TypeScript files (`*.ts`), prefer **single quotes** for strings.
- Ensure each file ends with a newline and has no trailing whitespace.

## Testing
- Run `npm test` before committing. It invokes the Angular CLI's Karma tests.
- If the environment lacks required dependencies, note this in the PR testing section.

## Commit Messages
- Use short, present-tense messages such as `Add hero component` or `Fix nav link`.
- Group related changes into a single commit when practical.

## Pull Request Summary
- Summarize the important changes in bullet points.
- Reference modified files using GitHub's file path quoting (e.g., `src/app/app.component.ts`).
- Include a Testing section describing the result of running `npm test`.

