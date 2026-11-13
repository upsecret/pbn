import { NextRequest, NextResponse } from "next/server";
import legacyRoutes from "./migration/legacy-routes.json";

type LegacyRoute = { redirect?: string; gone?: boolean };
const routes: Record<string, LegacyRoute> = legacyRoutes;
const removed = new Set(Object.entries(routes).filter(([, entry]) => entry.gone).map(([path]) => path.slice(1)));

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const path = pathname.replace(/\/+$/, "") || "/";
  const route = Object.hasOwn(routes, path) ? routes[path] : undefined;
  const storySlug = path.match(/^\/(?:news|blog|post)\/([^/]+)$/)?.[1];
  if (route?.gone || (storySlug && removed.has(storySlug))) {
    return new NextResponse("This article is no longer available.", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });
  }
  if (route?.redirect) {
    const destination = request.nextUrl.clone();
    destination.pathname = route.redirect;
    destination.search = "";
    return NextResponse.redirect(destination, 308);
  }
  if (pathname !== path) {
    const destination = request.nextUrl.clone();
    destination.pathname = path;
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|favicon.svg|images/).*)"],
};
