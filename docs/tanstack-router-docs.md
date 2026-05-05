# 🧭 TanStack Router Guide

> Documentation for developers and AI agents (Claude) to understand and
> create routes consistently.

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview\
2.  Core Principles\
3.  Folder Structure\
4.  Routing Rules\
5.  Creating a New Route\
6.  Loaders\
7.  Features Integration\
8.  Best Practices\
9.  Anti-Patterns\
10. Mental Model

------------------------------------------------------------------------

# 🚀 Overview

This project uses **TanStack Router** with a **feature-driven
architecture**.

The goal is: - Scalable structure - Type safety - Clean separation of
concerns - AI-friendly predictability

------------------------------------------------------------------------

# 🧠 Core Principles

-   URL structure = folder structure\
-   Routes are thin\
-   Business logic lives in `features/`\
-   Reusable code lives in `shared/`\
-   Routes NEVER contain domain logic

------------------------------------------------------------------------

# 📁 Folder Structure

    src/
    ├── app/
    ├── routes/
    ├── features/
    ├── shared/
    ├── styles/

------------------------------------------------------------------------

# 🧭 Routing Rules

## File-based routing

    routes/board/$boardId.tsx → /board/:boardId

## Index routes

    routes/index.tsx → /
    routes/dashboard/index.tsx → /dashboard

## Dynamic params

Use `$` prefix:

    $userId.tsx → /user/:userId

------------------------------------------------------------------------

# 🛠️ Creating a New Route

## Step 1 --- Create file

Example:

    routes/project/$projectId.tsx

------------------------------------------------------------------------

## Step 2 --- Define route

``` tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId')({
  component: ProjectPage,
})
```

------------------------------------------------------------------------

## Step 3 --- Use params

``` tsx
function ProjectPage() {
  const { projectId } = Route.useParams()
  return <div>{projectId}</div>
}
```

------------------------------------------------------------------------

# 🧠 Loaders

Use loaders for data fetching.

``` tsx
export const Route = createFileRoute('/project/$projectId')({
  loader: async ({ params }) => {
    return fetchProject(params.projectId)
  },
})
```

------------------------------------------------------------------------

# 🔗 Features Integration

## Rule

> Routes call features --- NEVER the opposite

------------------------------------------------------------------------

## Example

    routes/project/$projectId.tsx
    ↓
    features/project/

------------------------------------------------------------------------

## Usage

``` tsx
import { ProjectView } from '@/features/project/components/ProjectView'

function ProjectPage() {
  const data = Route.useLoaderData()
  return <ProjectView project={data} />
}
```

------------------------------------------------------------------------

# 🧱 Features Structure

    features/project/
    ├── components/
    ├── hooks/
    ├── api.ts
    ├── types.ts

------------------------------------------------------------------------

# ♻️ Shared Layer

Reusable code:

    shared/
    ├── components/
    ├── hooks/
    ├── utils/
    └── lib/

------------------------------------------------------------------------

# ⚡ Best Practices

-   Keep routes minimal\
-   Use loaders for async data\
-   Organize by domain\
-   Co-locate when necessary

------------------------------------------------------------------------

# ❌ Anti-Patterns

Avoid:

-   Business logic inside routes\
-   Global "utils mess"\
-   Deep nested unrelated folders\
-   Calling APIs directly in route components

------------------------------------------------------------------------

# 🧠 Mental Model

  Concern    Folder
  ---------- -----------
  URL        routes/
  Logic      features/
  Reusable   shared/
  Setup      app/

------------------------------------------------------------------------

# 🤖 Claude Instructions

When creating a new route:

1.  Create file in `routes/`
2.  Follow file naming convention (`$param`)
3.  Use `createFileRoute`
4.  Fetch data using loader
5.  Render UI from `features/`
6.  NEVER add business logic inside route

------------------------------------------------------------------------

# 💡 Final Rule

If it affects URL → routes/\
If it affects behavior → features/\
If reusable → shared/

------------------------------------------------------------------------

This structure ensures long-term scalability and consistency.
