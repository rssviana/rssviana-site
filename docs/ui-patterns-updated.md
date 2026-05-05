# 🎨 UI Patterns Guide (Tailwind)

> Defines UI structure, design patterns, and component conventions using
> Tailwind CSS.

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview\
2.  Core Principles\
3.  Layout Patterns\
4.  Spacing & Sizing\
5.  Typography\
6.  Colors & Theme\
7.  Dark Mode\
8.  Components\
9.  Component Structure\
10. Reusability Rules\
11. Best Practices\
12. Anti-Patterns

------------------------------------------------------------------------

# 🚀 Overview

This project uses **Tailwind CSS** as the primary styling system.

Goals: - Consistent UI - Fast development - Reusable components -
Predictable design patterns

------------------------------------------------------------------------

# 🧠 Core Principles

-   Utility-first styling\
-   Consistency over creativity\
-   Reuse components, not styles\
-   Prefer composition over duplication

------------------------------------------------------------------------

# 🧱 Layout Patterns

## Page Container

``` html
<div class="max-w-7xl mx-auto px-6">
```

------------------------------------------------------------------------

# 📏 Spacing & Sizing

-   Use Tailwind spacing scale\
-   Avoid arbitrary values\
-   Keep consistency

------------------------------------------------------------------------

# 🔤 Typography

-   h1 → `text-4xl font-bold`\
-   h2 → `text-2xl font-semibold`\
-   body → `text-base text-gray-300`

------------------------------------------------------------------------

# 🎨 Colors & Theme

-   Use Tailwind palette\
-   Avoid random hex\
-   Prefer neutral + accent

------------------------------------------------------------------------

# 🌙 Dark Mode

## Strategy

We use **class-based dark mode**:

``` js
darkMode: 'class'
```

------------------------------------------------------------------------

## Root Setup

Apply `dark` class on `<html>`:

``` html
<html class="dark">
```

------------------------------------------------------------------------

## Usage

Use `dark:` variants:

``` html
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
```

------------------------------------------------------------------------

## Theme Toggle (Zustand Example)

``` ts
import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: 'dark',
  toggle: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
}))
```

------------------------------------------------------------------------

## Apply Theme

``` ts
useEffect(() => {
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  )
}, [theme])
```

------------------------------------------------------------------------

## Rules

-   Always support dark mode in new components\
-   Never hardcode colors without dark variant\
-   Test both themes

------------------------------------------------------------------------

# 🧩 Components

Shared components:

    shared/components/

------------------------------------------------------------------------

# ⚡ Best Practices

-   Use flex/grid\
-   Prefer gap over margin\
-   Keep components small\
-   Support dark mode

------------------------------------------------------------------------

# ❌ Anti-Patterns

-   No dark mode support\
-   Hardcoded colors\
-   Inline styles

------------------------------------------------------------------------

# 💡 Final Rule

Every component must work in both light and dark mode.

------------------------------------------------------------------------

This ensures a consistent and modern UI system.
