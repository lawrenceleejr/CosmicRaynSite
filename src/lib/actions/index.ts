// Re-export build-time data helpers. Placed under `src/lib/actions` so Astro
// won't auto-wire them as server actions.
export { getCategories, filterByCategory } from "./categories";
