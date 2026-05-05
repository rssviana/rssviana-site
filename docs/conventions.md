# 📏 Conventions Guide

> Defines naming, structure, and coding conventions for this project.

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview\
2.  Naming Conventions\
3.  File & Folder Naming\
4.  Component Conventions\
5.  Hooks\
6.  API & Data\
7.  Git & Commits\
8.  Code Style\
9.  Imports\
10. General Rules

------------------------------------------------------------------------

# 🚀 Overview

This document ensures consistency across the codebase.

Goals: - Predictable structure - Easy onboarding - AI-friendly
patterns - Clean and readable code

------------------------------------------------------------------------

# 🧠 Naming Conventions

  Type         Convention   Example
  ------------ ------------ -----------------
  Components   PascalCase   `BoardView.tsx`
  Hooks        camelCase    `useBoard.ts`
  Variables    camelCase    `boardId`
  Constants    UPPER_CASE   `MAX_ITEMS`
  Types        PascalCase   `Board`
  Folders      kebab-case   `board-list/`

------------------------------------------------------------------------

# 📁 File & Folder Naming

## Rules

-   Use **kebab-case** for folders\
-   Use **PascalCase** for components\
-   Use **camelCase** for logic files

------------------------------------------------------------------------

## Examples

    features/board/components/BoardView.tsx
    features/board/hooks/useBoard.ts
    shared/utils/formatDate.ts

------------------------------------------------------------------------

# ⚛️ Component Conventions

## Structure

``` tsx
export function ComponentName() {
  return <div />
}
```

------------------------------------------------------------------------

## Rules

-   One component per file\
-   Keep components small\
-   Move logic to hooks

------------------------------------------------------------------------

# 🪝 Hooks

## Rules

-   Always start with `use`
-   Keep hooks inside feature when specific
-   Move to `shared/` if reusable

------------------------------------------------------------------------

## Example

    features/board/hooks/useBoard.ts

------------------------------------------------------------------------

# 🌐 API & Data

## Rules

-   API calls live inside `features/<feature>/api.ts`
-   Do NOT call APIs directly in components
-   Use TanStack Query for fetching

------------------------------------------------------------------------

# 🧾 Git & Commits

We follow a simplified **Conventional Commits** pattern.

------------------------------------------------------------------------

## Format

    type(scope): message

------------------------------------------------------------------------

## Types

-   feat → new feature\
-   fix → bug fix\
-   refactor → code improvement\
-   chore → maintenance\
-   docs → documentation\
-   style → formatting

------------------------------------------------------------------------

## Examples

    feat(board): add drag and drop
    fix(auth): handle token refresh
    docs(routing): update guide

------------------------------------------------------------------------

# 🎨 Code Style

-   Prefer simple and readable code\
-   Avoid unnecessary abstractions\
-   Use early returns\
-   Keep functions small

------------------------------------------------------------------------

# 📦 Imports

## Order

1.  External libs\
2.  Internal aliases (`@/features/...`)\
3.  Relative imports

------------------------------------------------------------------------

## Example

``` ts
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { BoardView } from '@/features/board/components/BoardView'
```

------------------------------------------------------------------------

# 🧠 General Rules

-   Prefer clarity over cleverness\
-   Avoid premature optimization\
-   Keep consistency over personal preference\
-   Follow existing patterns

------------------------------------------------------------------------

# 🤖 Claude Instructions

When generating code:

1.  Follow naming conventions strictly\
2.  Place files in correct layer\
3.  Use existing patterns\
4.  Avoid creating new patterns unless necessary\
5.  Keep code minimal and readable

------------------------------------------------------------------------

# 💡 Final Rule

Consistency \> everything

If unsure, follow the existing codebase.

------------------------------------------------------------------------

This ensures a clean, scalable, and maintainable project.
