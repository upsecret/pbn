import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "SPC Convective Outlooks", url: "https://www.spc.noaa.gov/products/outlook/" },
  { name: "SPC Mesoscale Discussions", url: "https://www.spc.noaa.gov/products/md/" },
  { name: "SPC Mesoscale Analysis", url: "https://www.spc.noaa.gov/exper/mesoanalysis/" },
  { name: "SPC Watch Outline", url: "https://www.spc.noaa.gov/products/watch/" },
  { name: "SPC Observed Soundings", url: "https://www.spc.noaa.gov/exper/soundings/" },
  { name: "SPC Storm Reports (current)", url: "https://www.spc.noaa.gov/climo/reports/today.html" },
  { name: "NWS US Watches/Warnings", url: "https://www.weather.gov/warnings" },
  { name: "Weather Prediction Center", url: "https://www.wpc.ncep.noaa.gov/" },
  { name: "NWS JetStream — Severe Weather", url: "https://www.weather.gov/jetstream/thunder" },
  { name: "NWS Severe Weather Summary", url: "https://www.weather.gov/source/crh/summary.html" },
];

export function SevereWeatherTools() {
  return <SidebarLinkSection title="Severe Weather Tools" links={links} />;
}
