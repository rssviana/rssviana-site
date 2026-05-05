# 🧠 Zustand Guide

> Defines how to use Zustand for client-side (UI/global) state in this
> project.

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview
2.  When to Use Zustand
3.  Core Principles
4.  Store Structure
5.  Creating a Store
6.  Using the Store
7.  Slices Pattern
8.  Persisted State
9.  Integration with TanStack Query
10. Best Practices
11. Anti-Patterns
12. Claude Instructions

------------------------------------------------------------------------

# 🚀 Overview

We use **Zustand** for lightweight global/client state.

It complements: - TanStack Query → server state - Zustand → UI/global
state

------------------------------------------------------------------------

# 🧠 When to Use Zustand

Use Zustand for: - UI state (modals, sidebar, theme) - Temporary global
state - Cross-component interaction

Do NOT use for: - Server data (use TanStack Query) - Complex domain
logic

------------------------------------------------------------------------

# 🧩 Core Principles

-   Keep stores small
-   Prefer multiple stores over one giant store
-   Co-locate store with feature when possible
-   Keep logic simple

------------------------------------------------------------------------

# 🧱 Store Structure

    features/<feature>/store.ts

------------------------------------------------------------------------

# ⚙️ Creating a Store

``` ts
import { create } from 'zustand'

type BoardState = {
  selectedBoardId: string | null
  setSelectedBoardId: (id: string) => void
}

export const useBoardStore = create<BoardState>((set) => ({
  selectedBoardId: null,
  setSelectedBoardId: (id) => set({ selectedBoardId: id }),
}))
```

------------------------------------------------------------------------

# 🔗 Using the Store

``` tsx
const boardId = useBoardStore((s) => s.selectedBoardId)
const setBoardId = useBoardStore((s) => s.setSelectedBoardId)
```

------------------------------------------------------------------------

# 🧱 Slices Pattern (for scaling)

Split large stores:

``` ts
const createBoardSlice = (set) => ({
  boardId: null,
  setBoardId: (id) => set({ boardId: id }),
})
```

------------------------------------------------------------------------

# 💾 Persisted State

``` ts
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'app-storage' }
  )
)
```

------------------------------------------------------------------------

# 🔗 Integration with TanStack Query

## Rule

> Zustand does NOT replace React Query

------------------------------------------------------------------------

## Example

-   Query → fetch board
-   Zustand → store UI selection

------------------------------------------------------------------------

# ⚡ Best Practices

-   Keep stores minimal
-   Use selectors
-   Avoid unnecessary re-renders
-   Co-locate with feature

------------------------------------------------------------------------

# ❌ Anti-Patterns

Avoid:

-   Putting API data in Zustand
-   One global giant store
-   Business logic inside store
-   Overusing persistence

------------------------------------------------------------------------

# 🧠 Mental Model

  Concern        Tool
  -------------- -----------------
  Server state   React Query
  UI/global      Zustand
  Routing        TanStack Router

------------------------------------------------------------------------

# 🤖 Claude Instructions

When using Zustand:

1.  Create store inside feature
2.  Keep state minimal
3.  Do not store API data
4.  Use selectors
5.  Prefer simple patterns

------------------------------------------------------------------------

# 💡 Final Rule

Zustand is for UI state, not server state.

------------------------------------------------------------------------

This ensures simple, scalable state management.
