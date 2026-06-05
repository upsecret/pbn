import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "NOAA Radar (radar.weather.gov)", url: "https://radar.weather.gov/" },
  { name: "Birmingham NEXRAD", url: "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJ3ZWF0aGVyIiwiY2VudGVyIjpbLTg2Ljc3LDMzLjU3XSwiem9vbSI6N319" },
  { name: "Columbus MS NEXRAD", url: "https://radar.weather.gov/" },
  { name: "Mobile AL NEXRAD", url: "https://radar.weather.gov/" },
  { name: "College of DuPage NEXLAB", url: "https://weather.cod.edu/satrad/" },
  { name: "SPC Mesoscale Analysis", url: "https://www.spc.noaa.gov/exper/mesoanalysis/" },
  { name: "GOES Image Viewer (NESDIS)", url: "https://www.star.nesdis.noaa.gov/GOES/" },
  { name: "RAMMB/CIRA SLIDER", url: "https://www.star.nesdis.noaa.gov/goes/" },
  { name: "NWS Satellite", url: "https://www.weather.gov/satellite" },
  { name: "NASA MSFC Interactive Satellite", url: "https://weather.msfc.nasa.gov/" },
  { name: "MRMS QPE / Radar composites", url: "https://mrms.ncep.noaa.gov/" },
  { name: "Lightning Mapper (GLM)", url: "https://www.star.nesdis.noaa.gov/GOES/conus_band.php?sat=G16&band=GLM&length=24" },
];

export function RadarSatellite() {
  return <SidebarLinkSection title="Radar / Satellite Links" links={links} />;
}
