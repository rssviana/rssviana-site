# 📡 Data Fetching Guide (TanStack Query)

> Defines how data fetching, caching, and server-state management works
> in this project.

------------------------------------------------------------------------

# 📚 Table of Contents

1.  Overview\
2.  Core Principles\
3.  Query Structure\
4.  Query Keys\
5.  Queries (Fetching)\
6.  Mutations (Writing)\
7.  Caching Strategy\
8.  Error Handling\
9.  Loading States\
10. Integration with Router\
11. Best Practices\
12. Anti-Patterns

------------------------------------------------------------------------

# 🚀 Overview

This project uses **TanStack Query** for all server-state management.

Goals: - Centralized data fetching - Smart caching - Consistent
patterns - Predictable behavior (for humans and AI)

------------------------------------------------------------------------

# 🧠 Core Principles

-   All server data goes through TanStack Query\
-   No direct API calls inside components\
-   Queries live inside `features/`\
-   Query keys must be consistent\
-   Cache is part of the architecture

------------------------------------------------------------------------

# 🧱 Query Structure

Inside each feature:

    features/<feature>/
    ├── queries.ts
    ├── mutations.ts
    ├── api.ts

------------------------------------------------------------------------

# 🔑 Query Keys

Query keys must be:

-   Stable
-   Predictable
-   Centralized

------------------------------------------------------------------------

## Pattern

    ['feature']
    ['feature', id]
    ['feature', { filters }]

------------------------------------------------------------------------

## Example

``` ts
export const boardKeys = {
  all: ['board'],
  detail: (id: string) => ['board', id],
}
```

------------------------------------------------------------------------

# 📥 Queries (Fetching)

## Rule

> Queries fetch data, nothing else

------------------------------------------------------------------------

## Example

``` ts
export function useBoard(boardId: string) {
  return useQuery({
    queryKey: boardKeys.detail(boardId),
    queryFn: () => fetchBoard(boardId),
  })
}
```

------------------------------------------------------------------------

# ✍️ Mutations (Writing)

## Rule

> Mutations modify data and update cache

------------------------------------------------------------------------

## Example

``` ts
export function useUpdateBoard() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateBoard,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: boardKeys.detail(variables.id),
      })
    },
  })
}
```

------------------------------------------------------------------------

# 💾 Caching Strategy

## Default behavior

-   Cache is reused automatically\
-   Stale data is refetched in background

------------------------------------------------------------------------

## Recommended config

``` ts
staleTime: 1000 * 60 * 5 // 5 minutes
```

------------------------------------------------------------------------

## Rules

-   Avoid refetching too often\
-   Prefer cache over network\
-   Invalidate only when necessary

------------------------------------------------------------------------

# ⚠️ Error Handling

## Rule

> Handle errors at the UI level

------------------------------------------------------------------------

## Example

``` tsx
const { data, error, isLoading } = useBoard(id)

if (isLoading) return <Loading />
if (error) return <ErrorState />
```

------------------------------------------------------------------------

# ⏳ Loading States

## Rules

-   Always handle loading\
-   Prefer skeletons over spinners\
-   Keep UI responsive

------------------------------------------------------------------------

# 🔗 Integration with Router

TanStack Router loaders can be used with queries.

------------------------------------------------------------------------

## Example

``` ts
export const Route = createFileRoute('/board/$boardId')({
  loader: async ({ params, context }) => {
    return context.queryClient.ensureQueryData({
      queryKey: boardKeys.detail(params.boardId),
      queryFn: () => fetchBoard(params.boardId),
    })
  },
})
```

------------------------------------------------------------------------

# ⚡ Best Practices

-   Co-locate queries inside features\
-   Use query keys consistently\
-   Keep query functions pure\
-   Use mutations for writes only\
-   Prefer invalidation over manual cache updates

------------------------------------------------------------------------

# ❌ Anti-Patterns

Avoid:

-   Fetching inside components\
-   Using random query keys\
-   Mixing queries and mutations\
-   Ignoring cache behavior\
-   Over-fetching

------------------------------------------------------------------------

# 🧠 Mental Model

  Concern     Location
  ----------- --------------
  API calls   api.ts
  Queries     queries.ts
  Mutations   mutations.ts
  UI usage    components

------------------------------------------------------------------------

# 🤖 Claude Instructions

When fetching data:

1.  Use TanStack Query\
2.  Create query inside `features/<feature>/queries.ts`\
3.  Use consistent query keys\
4.  Do NOT fetch inside components directly\
5.  Handle loading and error states

------------------------------------------------------------------------

# 💡 Final Rule

Server state is not UI state.

Always use TanStack Query.

------------------------------------------------------------------------

This ensures scalable, predictable, and performant data management.
