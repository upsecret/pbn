import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "Pivotal Weather", url: "https://www.pivotalweather.com/" },
  { name: "Tropical Tidbits", url: "https://www.tropicaltidbits.com/" },
  { name: "College of DuPage Model Page", url: "https://weather.cod.edu/forecast/" },
  { name: "NCEP Model Analyses & Guidance", url: "https://www.weather.gov/mdl/mos" },
  { name: "NOAA GFS / NBM (NOMADS)", url: "https://nomads.ncep.noaa.gov/" },
  { name: "SPC SREF Plumes", url: "https://www.spc.noaa.gov/exper/sref/" },
  { name: "GFS Precip Type Animation", url: "https://www.weather.gov/mdl/mos" },
  { name: "NAM Model Forecast Soundings", url: "https://www.spc.noaa.gov/exper/soundings/" },
  { name: "HPC Winter Wx Page", url: "https://www.wpc.ncep.noaa.gov/wwd/winter_wx.shtml" },
  { name: "HPC Surface Analysis", url: "https://www.wpc.ncep.noaa.gov/html/sfc2.shtml" },
  { name: "HPC QPF (Quantitative Precip)", url: "https://www.wpc.ncep.noaa.gov/qpf/qpf2.shtml" },
];

export function ForecastModels() {
  return <SidebarLinkSection title="Forecasts / Model Data" links={links} />;
}
