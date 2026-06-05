import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "NWS Birmingham Climate", url: "https://www.weather.gov/bmx/climate" },
  { name: "NOAA Climate.gov", url: "https://www.climate.gov/" },
  { name: "NCDC Climate Data", url: "https://www.ncei.noaa.gov/access" },
  { name: "Tornado History Project", url: "https://www.tornadohistoryproject.com/" },
  { name: "Significant Alabama Tornadoes (NWS)", url: "https://www.weather.gov/bmx/sigtornado" },
  { name: "SPC Severe Weather Climatology", url: "https://www.spc.noaa.gov/climo/" },
  { name: "American Meteorological Society", url: "https://www.ametsoc.org/" },
  { name: "Enhanced Fujita Scale", url: "https://www.spc.noaa.gov/efscale/" },
  { name: "NSSL Archive", url: "https://www.nssl.noaa.gov/" },
  { name: "WeatherBrains Podcast", url: "https://weatherbrains.com/" },
  { name: "NWS JetStream — Education", url: "https://www.weather.gov/jetstream/" },
];

export function WeatherHistory() {
  return <SidebarLinkSection title="Weather History / Educational Sites" links={links} />;
}
