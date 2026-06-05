import { ResourcesExplorer } from "@/components/resources/ResourcesExplorer";

export const metadata = {
  title: "Resources",
  description:
    "Weather links for Alabama and the U.S. — NWS, SPC, NOAA, radar, models, and more (BamaWX).",
};

export default function ResourcesPage() {
  return (
    <div>
      <h2 className="date-header mb-2">RESOURCES</h2>
      <h1 className="post-title mb-4">
        <span className="text-foreground">Weather Resources</span>
      </h1>
      <p className="mb-6 text-[12px] text-muted-foreground">
        The same kinds of tools and trusted links you&apos;ve long found on BamaWX — National
        Weather Service offices, SPC, satellite and radar portals, models, and reference sites.
        Use the tabs and search to narrow the list.
      </p>
      <ResourcesExplorer />
    </div>
  );
}
