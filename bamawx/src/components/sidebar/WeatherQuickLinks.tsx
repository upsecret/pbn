import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "ABC 33/40 Birmingham Weather Blog", url: "https://abc3340.com/weather" },
  { name: "National Hurricane Center", url: "https://www.nhc.noaa.gov/" },
  { name: "NCEP Model Site", url: "https://www.weather.gov/mdl/mos" },
  { name: "NWS Birmingham", url: "https://www.weather.gov/bmx" },
  { name: "NWS Huntsville", url: "https://www.weather.gov/hun" },
  { name: "NWS Jackson MS", url: "https://www.weather.gov/jan" },
  { name: "NWS Memphis TN", url: "https://www.weather.gov/meg" },
  { name: "NWS Tallahassee FL", url: "https://www.weather.gov/tae" },
  { name: "Storm Prediction Center", url: "https://www.spc.noaa.gov/" },
  { name: "SPC Convective Outlooks", url: "https://www.spc.noaa.gov/products/outlook/" },
  { name: "SPC Watches", url: "https://www.spc.noaa.gov/products/watch/" },
  { name: "SPC Short Range Ensemble", url: "https://www.spc.noaa.gov/exper/sref/" },
  { name: "Weather Underground", url: "https://www.wunderground.com/" },
  { name: "Spotter Network", url: "https://www.spotternetwork.org/" },
  { name: "CoCoRaHS", url: "https://www.cocorahs.org/" },
  { name: "Alabama EMA", url: "https://ema.alabama.gov/" },
  { name: "FEMA", url: "https://www.fema.gov/" },
  { name: "Ready.gov", url: "https://www.ready.gov/" },
];

export function WeatherQuickLinks() {
  return <SidebarLinkSection title="Favorite Quick Weather Links" links={links} />;
}
