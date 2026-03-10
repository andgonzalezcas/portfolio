---
name: PR Reviewer and Code Quality Analyzer
description: Guidelines and checklist for reviewing Pull Requests, focusing on scalability, clean code, good practices, vulnerability analysis, and improvement opportunities.
---

# PR Reviewer and Code Quality Analyzer

This skill defines the standards and processes for conducting thorough and effective Pull Request (PR) reviews. As an AI agent acting as a PR reviewer, your primary goals are to ensure the codebase remains maintainable, secure, performant, and aligned with project standards.

## 🎯 Review Objectives

When reviewing code, focus on the following core areas:
1. **Scope & Context**: Is the PR reasonably sized, well-documented, and passing CI?
2. **Scalability & Performance**: Can the code handle increased data/traffic? Are re-renders or heavy load optimized?
3. **Clean Code & Readability**: Is the code easy to understand, maintain, and extend?
4. **Good Practices**: Does the code adhere to industry standards and project-specific conventions?
5. **Security & Vulnerabilities**: Are there any potential security risks or vulnerabilities introduced?
6. **Accessibility (a11y)**: Is the frontend accessible to all users?
7. **Improvement Opportunities**: Are there ways to optimize or refactor the code for better performance or maintainability?

## 📏 Scope, Context & Automation

- [ ] **Scope & Complexity**: Is the PR under ~400 lines? If larger, reasonably suggest splitting. Is the overarching logic simple and readable?
- [ ] **Context**: Does the PR description clearly explain the *why*? Does it include visuals (screenshots/videos) for any UI changes?
- [ ] **Automation**: Did linting, TS type-checking, and unit tests pass successfully in CI/locally (`npm run build`, `npm run lint`)?

## 🔍 Code Scalability & Performance Checklist

- [ ] **Algorithm Complexity**: Are there nested loops or inefficient algorithms that could be optimized (e.g., O(n^2) when O(n) is possible)?
- [ ] **Resource Management**: Are resources (connections, memory, subscriptions, event listeners) properly released or cleaned up?
- [ ] **State Management**: Is state managed efficiently? Avoid unnecessary global state or deeply nested prop drilling. Ensure proper use of Server Components and standard React hooks for client state.
- [ ] **Data Fetching**: Are queries optimized and using consistent keys? Is pagination, caching, or lazy loading used where appropriate?
- [ ] **Component Reusability**: Are components designed to be reusable and decoupled from specific contexts?
- [ ] **Performance (Web Vitals)**: Check for expensive re-renders or layout shifts (CLS). Ensure heavy assets/components are lazy-loaded.

## 🧹 Clean Code & Good Practices Checklist

- [ ] **Naming Conventions**: Are variables, functions, and classes named clearly and descriptively? Do they communicate intent? (Check boolean prefixes: `is`, `has`, `should`; function prefixes: `on`; file suffixes: `.util.ts`, `.constant.ts`; UI components: (e.g., `button.ui.tsx`, `ButtonUI`)).
- [ ] **File Structure**: Are there unnecessary nested folders? Keep structure reasonably flat.
- [ ] **React Component Structure**:
  - Components/hooks must use standard `function` declarations, NOT arrow functions.
  - Components must use `export default`.
  - Is the internal content order correct? (Constants -> Refs -> Hooks -> Functions -> Effects).
  - Are all optional boolean props given default values?
- [ ] **Single Responsibility Principle (SRP)**: Do functions and components do one thing and do it well? Are they too long or doing too much?
- [ ] **DRY (Don't Repeat Yourself)**: Is there duplicated logic that could be extracted into a shared hook, utility, or component?
- [ ] **Type Safety (TypeScript)**: Are types strictly defined? STRICTLY NO `any` types. Avoid excessive type assertions.
- [ ] **Unused Code**: Are there any unused functions, variables, types, enums, constants, or interfaces left in the files? If so, remove them.
- [ ] **Comments & Documentation**: Do functions have clear comment documentation? Is complex logic explained?
- [ ] **Error Handling**: Are errors caught and handled gracefully? Avoid silently swallowing errors. Verify user-facing messages don't leak backend data.
- [ ] **Build & Testing**: Does the PR build successfully? Does it include adequate unit/integration tests for new logic? Do tests cover edge cases?

## ♿ Accessibility (a11y)

- [ ] **Interactive Elements**: Do buttons, inputs, and links have accessible names (`aria-label`, visible text, etc.)?
- [ ] **Visual Constraints**: Does the contrast pass basic checks? Are focus rings visible for keyboard users?

## 🛡️ Vulnerability Analysis (Security)

- [ ] **Input Validation & Sanitization**: Is user input properly validated and sanitized before being processed or rendered? (Protection against XSS).
- [ ] **Dependency Risks**: Does the PR introduce new dependencies? Are they reputable, maintained, and free of known vulnerabilities?
- [ ] **Sensitive Data Exposure**: Are secrets, API keys, or PII inadvertently logged or exposed in the frontend code?
- [ ] **Authentication/Authorization**: Are protected routes and actions properly secured, relying on backend validation rather than just frontend hiding?
- [ ] **Injection Flaws**: Is there risk of NoSQL/SQL injection, command injection, or path traversal (if applicable to the layer being reviewed)?

## 💡 Improvement Opportunities

As a reviewer, look beyond simply passing/failing code and suggest improvements:
- **Modern Syntax**: Can older syntax (e.g., nested `.then()`) be replaced with modern alternatives (e.g., `async/await`)?
- **Library Features**: Is the code reinventing the wheel when an existing library feature (like a TanStack Query hook, or a Shadcn UI component) already handles it?
- **Performance Optimizations**: Could a component benefit from `useMemo`, `useCallback`, or React Server Components to prevent unnecessary re-renders?
- **Refactoring**: Suggest minor refactors that improve readability without changing behavior.

## 📝 How to Provide Feedback

1. **Be Constructive & Respectful**: Frame feedback as suggestions rather than demands. Use "we" instead of "you" when discussing the code.
2. **Be Specific**: Point out exactly what needs changing and why. Provide code snippets as examples if helpful.
3. **Categorize Feedback**: Clearly distinguish between:
   - **Blocking** (Must fix before parsing - e.g., bugs, security flaws)
   - **Recommended** (Strongly suggested improvements)
   - **Nitpicks** (Minor issues like styling, formatting, or tiny optimizations)
4. **Acknowledge Good Work**: Highlight well-written code, clever solutions, and thorough testing.

## 🚀 Execution (Review Process)

1. Understand the context and purpose of the PR from its description and linked issues.
2. Review the overarching architectural changes first, then zoom into specific implementations.
3. Go through the checklists above.
4. Summarize your review, categorize your actionable feedback, and provide a clear final status (Approve, Request Changes, Comment).
