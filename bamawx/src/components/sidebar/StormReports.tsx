import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "SPC Storm Reports (today)", url: "https://www.spc.noaa.gov/climo/reports/today.html" },
  { name: "SPC Storm Reports (yesterday)", url: "https://www.spc.noaa.gov/climo/reports/yesterday.html" },
  { name: "NWS Huntsville Storm Reports", url: "https://www.weather.gov/hun" },
  { name: "NWS Birmingham Storm Reports", url: "https://www.weather.gov/bmx" },
  { name: "NWS Mobile Alabama", url: "https://www.weather.gov/mob" },
  { name: "NWS Jackson Mississippi", url: "https://www.weather.gov/jan" },
  { name: "NWS Memphis Tennessee", url: "https://www.weather.gov/meg" },
  { name: "NWS Nashville Tennessee", url: "https://www.weather.gov/ohx" },
  { name: "NWS Tallahassee Florida", url: "https://www.weather.gov/tae" },
  { name: "NWS Chattanooga area", url: "https://www.weather.gov/mrx" },
  { name: "NWS Atlanta Georgia", url: "https://www.weather.gov/ffc" },
  { name: "NWS Damage Assessment Toolkit", url: "https://dat.noaa.gov/" },
  { name: "NCDC Storm Events Database", url: "https://www.ncdc.noaa.gov/stormevents/" },
  { name: "SPC Severe Weather Plot", url: "https://www.spc.noaa.gov/climo/online/svr/" },
];

export function StormReports() {
  return <SidebarLinkSection title="Storm Reports" links={links} />;
}
