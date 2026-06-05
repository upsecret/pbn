import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "Alabama Climate Data AOSC", url: "https://weather.uah.edu/" },
  { name: "CoCoRaHS", url: "https://www.cocorahs.org/" },
  { name: "AHN Mesonet", url: "https://weather.uah.edu/mesonet/" },
  { name: "Alabama Mesonet (Auburn)", url: "https://mesonet.agron.auburn.edu/" },
  { name: "NWS Observations / METAR", url: "https://www.weather.gov/observations" },
  { name: "MesoWest Precipitation Data", url: "https://mesowest.utah.edu/" },
  { name: "MesoWest Temperature Data", url: "https://mesowest.utah.edu/" },
  { name: "NWS Cooperative Observer System", url: "https://www.weather.gov/coop/" },
  { name: "US Drought Monitor", url: "https://droughtmonitor.unl.edu/" },
  { name: "SPC Soundings", url: "https://www.spc.noaa.gov/exper/soundings/" },
  { name: "River Gauges (AHPS)", url: "https://water.weather.gov/" },
  { name: "Water Vapor Imagery", url: "https://www.weather.gov/satellite" },
];

export function ObservationsClimate() {
  return <SidebarLinkSection title="Current Observations / Climate Data" links={links} />;
}
