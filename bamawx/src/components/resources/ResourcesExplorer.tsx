"use client";

import * as React from "react";
import { ExternalLink, Search } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  weatherLinkCategoryOrder,
  weatherLinks,
  type WeatherLinksCategoryKey,
} from "@/data/weather-links";
import { cn } from "@/lib/utils";

const labels: Record<WeatherLinksCategoryKey, string> = {
  quickLinks: "Quick links",
  severeWeather: "Severe",
  radarSatellite: "Radar / Sat",
  stormReports: "Reports",
  observations: "Obs",
  forecastModels: "Models",
  history: "History",
  cameras: "Cameras",
  blogs: "Blogs",
};

function filterCategory(
  key: WeatherLinksCategoryKey,
  query: string
): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  const cat = weatherLinks[key];
  if (cat.title.toLowerCase().includes(q)) return true;
  return cat.links.some((l) => {
    const desc = l.description?.toLowerCase() ?? "";
    return l.name.toLowerCase().includes(q) || desc.includes(q);
  });
}

export function ResourcesExplorer() {
  const [query, setQuery] = React.useState("");
  const [tab, setTab] = React.useState<WeatherLinksCategoryKey>("quickLinks");

  const visibleTabs = React.useMemo(
    () => weatherLinkCategoryOrder.filter((k) => filterCategory(k, query)),
    [query]
  );

  React.useEffect(() => {
    if (!visibleTabs.includes(tab) && visibleTabs[0]) {
      setTab(visibleTabs[0]);
    }
  }, [visibleTabs, tab]);

  const activeKey = visibleTabs.includes(tab) ? tab : visibleTabs[0] ?? "quickLinks";

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter links by name or category…"
          className={cn(
            "h-10 w-full rounded-lg border border-input bg-background pl-10 pr-3 text-sm",
            "shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
          )}
          aria-label="Filter resources"
        />
      </div>

      <Tabs
        value={activeKey}
        onValueChange={(v) => setTab(v as WeatherLinksCategoryKey)}
        className="w-full"
      >
        <div className="overflow-x-auto pb-2">
          <TabsList variant="line" className="min-w-max flex-nowrap">
            {weatherLinkCategoryOrder.map((key) => {
              const hidden = !filterCategory(key, query);
              if (hidden) return null;
              return (
                <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
                  {labels[key]}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {weatherLinkCategoryOrder.map((key) => {
          if (!filterCategory(key, query)) return null;
          const c = weatherLinks[key];
          return (
            <TabsContent key={key} value={key} className="mt-6 space-y-4">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {c.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {c.links.length} links — opens in a new tab.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {c.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-bama-sky hover:shadow-md"
                    >
                      <ExternalLink className="mt-0.5 size-4 shrink-0 text-bama-sky opacity-70" />
                      <span>
                        <span className="block font-medium text-foreground group-hover:text-bama-sky">
                          {link.name}
                        </span>
                        {link.description ? (
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {link.description}
                          </span>
                        ) : null}
                        <span className="mt-1 block truncate text-xs text-muted-foreground">
                          {link.url}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </TabsContent>
          );
        })}
      </Tabs>

      {visibleTabs.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          No links match &ldquo;{query}&rdquo;. Clear the search to see all categories.
        </p>
      ) : null}
    </div>
  );
}
