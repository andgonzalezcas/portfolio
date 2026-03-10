---
name: Project Context and Best Practices (Next.js 16)
description: Strict architectural rules, naming conventions, and Next.js guidelines for the Portfolio project.
---

# Project Context: Portfolio

You are an expert Next.js developer. Follow these architectural and coding guidelines for the personal Portfolio project.

## 🛠 Core Stack
- **Environment:** Node.js, npm
- **Framework:** Next.js (v16) - App Router strictly enforced.
- **Language:** TypeScript (Strict Mode)
- **State & Data Fetching:** React Server Components (RSC) by default. Standard React Hooks (`useState`, `useContext`) for necessary client-side state.
- **Global Themes:** Managed via a custom React Context provider (`ThemeProvider`), avoiding external layout/theme libraries when possible.
- **Animations:** framer-motion (`^12.35.2`)
- **UI:** Tailwind CSS (v4), Lucide React (`^0.577.0`) for icons.

## 🏗 Architecture & Naming Conventions

This project follows the Next.js App Router conventions.

### File Naming & Structure (Flat Decoupled Architecture)
- **`app/`**: Routing and pages (`app/**/page.tsx`, `app/**/layout.tsx`).
- **`components/ui/`**: Reusable generic "dumb" components (e.g., `Button.tsx`, Shadcn-like elements).
- **`components/layout/`**: Structural app components (e.g., `Navbar.tsx`, `Footer.tsx`).
- **`features/` or `components/features/`**: Complex logic or larger domain-specific page sections.
- **`lib/`**: External library configurations (e.g., `lib/i18n/`, `lib/prisma/`).
- **`utils/`**: Clean, pure logic functions (e.g., `utils/formatDate.ts`, `utils/cn.ts`).
- **`constants/`**: Hardcoded variables and configuration objects (e.g., `constants/navigation.ts`).
- **`types/`**: TypeScript interfaces and types (`types/*.type.ts`).
- **`hooks/`**: Custom React hooks (`hooks/useScroll.ts`).

### Next.js Specific Rules
- **Server Components by Default:** ALL components in `app/` are Server Components unless explicitly marked with `"use client"` at the very top.
- **Data Fetching:** Prefer native `fetch` within Server Components over client-side fetching whenever possible.
- **Mutations:** Use Next.js Server Actions (`"use server"`) for data mutations if applicable.

## 📝 React & TypeScript Strict Rules

1. **Component Declarations:**
   - ALWAYS use `export default function ComponentName() { ... }` (or `export function` for non-default).
   - NEVER use arrow functions for components.
2. **Strict Component Content Order (Client Components):**
   - 1st: Constants
   - 2nd: `useRef` hooks
   - 3rd: Other Hooks (`useState`, custom hooks, etc.)
   - 4th: Functions / Handlers
   - 5th: `useEffect` hooks (immediately before `return`)
3. **Props Naming:**
   - **Booleans:** MUST start with `is`, `has`, `should`, `was`, or `avoid` (e.g., `isOpen`).
   - **Functions:** MUST start with `on` (e.g., `onSubmit`).
   - **Optional Booleans:** MUST have a default value assigned in the component signature.
4. **TypeScript:**
   - STRICTLY NO `any` types. 
   - Proactively remove unused imports, variables, and types.

## 🛡 Security Mandates
- **XSS:** Never use `dangerouslySetInnerHTML` without proper sanitization.
- **Secrets:** NEVER expose server-side environment variables to the client unless explicitly prefixed with `NEXT_PUBLIC_`.