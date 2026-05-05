# 🔐 Auth Guide

> Defines authentication architecture, flows, and patterns.\
> This system is **provider-agnostic** and supports any auth provider
> (GitHub, Google, custom, etc.)

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview\
2.  Core Principles\
3.  Auth Flow\
4.  Folder Structure\
5.  Auth State\
6.  Login / Logout\
7.  Route Protection (Guards)\
8.  Token Handling\
9.  Provider Integration\
10. Best Practices\
11. Anti-Patterns

------------------------------------------------------------------------

# 🚀 Overview

Authentication is handled in a **flexible and extensible way**,
allowing:

-   Multiple providers
-   Token-based or session-based auth
-   Easy integration with APIs
-   Clear separation of concerns

------------------------------------------------------------------------

# 🧠 Core Principles

-   Auth is global state\
-   Routes must be protected at routing level\
-   Auth logic is isolated\
-   Providers are interchangeable\
-   UI should not handle auth logic directly

------------------------------------------------------------------------

# 🔄 Auth Flow

## Standard Flow

1.  User clicks login\
2.  Redirect to provider (or form)\
3.  Receive token/session\
4.  Store auth state\
5.  Fetch user data\
6.  Allow access to protected routes

------------------------------------------------------------------------

# 📁 Folder Structure

    features/auth/
    ├── api.ts
    ├── hooks/
    │   ├── useAuth.ts
    │   └── useSession.ts
    ├── provider.tsx
    ├── types.ts

------------------------------------------------------------------------

# 🧠 Auth State

Auth state must include:

    {
      user: User | null
      token: string | null
      isAuthenticated: boolean
    }

------------------------------------------------------------------------

## Rule

> Auth state must be globally accessible

------------------------------------------------------------------------

# 🔑 Login / Logout

## Login

Handled via provider or API:

``` ts
login(provider)
```

------------------------------------------------------------------------

## Logout

``` ts
logout()
```

Must: - Clear token - Clear cache - Redirect user

------------------------------------------------------------------------

# 🛡️ Route Protection (Guards)

Routes must enforce auth.

------------------------------------------------------------------------

## Example

``` ts
export const Route = createFileRoute('/dashboard')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: '/login' })
    }
  },
})
```

------------------------------------------------------------------------

# 🎟️ Token Handling

## Options

-   LocalStorage (simple)
-   Cookies (secure)
-   Memory (temporary)

------------------------------------------------------------------------

## Rules

-   Never trust client-only auth\
-   Always validate on backend\
-   Refresh tokens when needed

------------------------------------------------------------------------

# 🔌 Provider Integration

Auth system must support:

-   OAuth (GitHub, Google)
-   Email/password
-   Custom backends

------------------------------------------------------------------------

## Pattern

    authProvider.login()
    authProvider.logout()
    authProvider.getSession()

------------------------------------------------------------------------

# ⚡ Best Practices

-   Keep auth logic centralized\
-   Protect routes, not components\
-   Sync auth with query cache\
-   Keep user state minimal

------------------------------------------------------------------------

# ❌ Anti-Patterns

Avoid:

-   Auth logic inside components\
-   Multiple sources of truth\
-   Hardcoding provider logic\
-   Ignoring token expiration

------------------------------------------------------------------------

# 🧠 Mental Model

  Concern      Location
  ------------ ----------------
  Auth logic   features/auth
  State        provider/hooks
  UI           components
  Protection   routes

------------------------------------------------------------------------

# 🤖 Claude Instructions

When working with auth:

1.  Use existing auth provider\
2.  Do NOT create new auth logic\
3.  Protect routes using router\
4.  Store auth in global state\
5.  Keep UI separate from auth logic

------------------------------------------------------------------------

# 💡 Final Rule

Auth is infrastructure, not UI.

------------------------------------------------------------------------

This ensures flexible, secure, and scalable authentication.
