import legacyRoutes from "../migration/legacy-routes.json";

type LegacyRoute = { redirect?: string; gone?: boolean };
const routes: Record<string, LegacyRoute> = legacyRoutes;
const retired = new Set(Object.entries(routes).filter(([, entry]) => entry.gone).map(([path]) => path.slice(1)));

export function legacyRoute(path: string) {
  return Object.hasOwn(routes, path) ? routes[path] : undefined;
}

export function isRetiredSlug(slug: string) {
  return retired.has(slug);
}
