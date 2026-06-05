import type { WeatherLinkCategory } from "@/types";

export type WeatherLinksCategoryKey =
  | "quickLinks"
  | "severeWeather"
  | "radarSatellite"
  | "stormReports"
  | "observations"
  | "forecastModels"
  | "history"
  | "cameras"
  | "blogs";

/** Sidebar / resources links aligned with classic BamaWX resource lists (NWS, SPC, NOAA, etc.) */
export const weatherLinks: Record<WeatherLinksCategoryKey, WeatherLinkCategory> = {
  quickLinks: {
    title: "Quick links",
    icon: "Link",
    links: [
      { name: "National Hurricane Center", url: "https://www.nhc.noaa.gov/" },
      { name: "Storm Prediction Center", url: "https://www.spc.noaa.gov/" },
      { name: "NOAA / National Weather Service", url: "https://www.weather.gov/" },
      { name: "NWS Birmingham", url: "https://www.weather.gov/bmx" },
      { name: "NWS Huntsville", url: "https://www.weather.gov/hun" },
      { name: "NWS Mobile", url: "https://www.weather.gov/mob" },
      { name: "CoCoRaHS", url: "https://www.cocorahs.org/" },
      { name: "Alabama EMA", url: "https://ema.alabama.gov/" },
      { name: "FEMA", url: "https://www.fema.gov/" },
      { name: "Ready.gov", url: "https://www.ready.gov/" },
    ],
  },

  severeWeather: {
    title: "Severe weather",
    icon: "CloudLightning",
    links: [
      { name: "SPC Mesoscale Discussions", url: "https://www.spc.noaa.gov/products/md/" },
      { name: "SPC Watch Outline", url: "https://www.spc.noaa.gov/products/watch/" },
      { name: "SPC Storm Reports (current)", url: "https://www.spc.noaa.gov/climo/reports/today.html" },
      { name: "SPC Day 1 Outlook", url: "https://www.spc.noaa.gov/products/outlook/day1otlk.html" },
      { name: "SPC Day 2 Outlook", url: "https://www.spc.noaa.gov/products/outlook/day2otlk.html" },
      { name: "SPC Day 3 Outlook", url: "https://www.spc.noaa.gov/products/outlook/day3otlk.html" },
      { name: "NWS Severe Weather Summary", url: "https://www.weather.gov/source/crh/summary.html" },
      { name: "Weather Prediction Center", url: "https://www.wpc.ncep.noaa.gov/" },
      { name: "NWS JetStream — Severe Weather", url: "https://www.weather.gov/jetstream/thunder" },
    ],
  },

  radarSatellite: {
    title: "Radar & satellite",
    icon: "Radar",
    links: [
      { name: "NOAA Radar (radar.weather.gov)", url: "https://radar.weather.gov/" },
      { name: "College of DuPage NEXLAB", url: "https://weather.cod.edu/satrad/" },
      { name: "SPC Mesoscale Analysis", url: "https://www.spc.noaa.gov/exper/mesoanalysis/" },
      { name: "GOES Image Viewer (NESDIS)", url: "https://www.star.nesdis.noaa.gov/GOES/" },
      { name: "RAMMB/CIRA SLIDER", url: "https://www.star.nesdis.noaa.gov/goes/" },
      { name: "NWS Satellite", url: "https://www.weather.gov/satellite" },
      { name: "MRMS QPE / Radar composites", url: "https://mrms.ncep.noaa.gov/" },
      { name: "Lightning Mapper (GLM)", url: "https://www.star.nesdis.noaa.gov/GOES/conus_band.php?sat=G16&band=GLM&length=24" },
    ],
  },

  stormReports: {
    title: "Storm reports",
    icon: "FileWarning",
    links: [
      { name: "SPC Storm Reports (today)", url: "https://www.spc.noaa.gov/climo/reports/today.html" },
      { name: "SPC Storm Reports (yesterday)", url: "https://www.spc.noaa.gov/climo/reports/yesterday.html" },
      { name: "Local Storm Reports (LSR)", url: "https://www.weather.gov/bmx/lsr" },
      { name: "NWS Damage Assessment Toolkit", url: "https://dat.noaa.gov/" },
      { name: "NCDC Storm Events", url: "https://www.ncdc.noaa.gov/stormevents/" },
      { name: "SPC Severe Plot", url: "https://www.spc.noaa.gov/climo/online/svr/" },
    ],
  },

  observations: {
    title: "Observations",
    icon: "Thermometer",
    links: [
      { name: "AHN Mesonet", url: "https://weather.uah.edu/mesonet/" },
      { name: "Alabama Mesonet", url: "https://mesonet.agron.auburn.edu/" },
      { name: "NWS Observations / METAR", url: "https://www.weather.gov/observations" },
      { name: "SPC Soundings", url: "https://www.spc.noaa.gov/exper/soundings/" },
      { name: "SPC Observed Soundings", url: "https://www.spc.noaa.gov/exper/soundings/SPCsoundings/" },
      { name: "Water Vapor imagery", url: "https://www.weather.gov/satellite" },
      { name: "River gauges (AHPS)", url: "https://water.weather.gov/" },
    ],
  },

  forecastModels: {
    title: "Forecast models",
    icon: "LineChart",
    links: [
      { name: "Pivotal Weather", url: "https://www.pivotalweather.com/" },
      { name: "Tropical Tidbits", url: "https://www.tropicaltidbits.com/" },
      { name: "College of DuPage Model Page", url: "https://weather.cod.edu/forecast/" },
      { name: "NCEP Model Analyses & Guidance", url: "https://www.weather.gov/mdl/mos" },
      { name: "NOAA GFS / NBM (NOMADS)", url: "https://nomads.ncep.noaa.gov/" },
      { name: "SPC SREF Plumes", url: "https://www.spc.noaa.gov/exper/sref/" },
    ],
  },

  history: {
    title: "Climate & history",
    icon: "History",
    links: [
      { name: "NWS Birmingham climate", url: "https://www.weather.gov/bmx/climate" },
      { name: "NOAA Climate.gov", url: "https://www.climate.gov/" },
      { name: "NCDC Climate Data", url: "https://www.ncei.noaa.gov/access" },
      { name: "SPC Severe Weather Climatology", url: "https://www.spc.noaa.gov/climo/" },
      { name: "Tornado History Project", url: "https://www.tornadohistoryproject.com/" },
      { name: "Significant Alabama Tornadoes (NWS)", url: "https://www.weather.gov/bmx/sigtornado" },
    ],
  },

  cameras: {
    title: "Cameras & webcams",
    icon: "Camera",
    links: [
      { name: "Alabama Road Conditions / Cameras", url: "https://algotraffic.com/" },
      { name: "SkyCams (regional)", url: "https://www.weather.gov/bmx" },
      { name: "EarthCam — Gulf Coast", url: "https://www.earthcam.com/" },
      { name: "ALDOT Traffic Cameras", url: "https://algotraffic.com/" },
      { name: "WeatherBug Webcams", url: "https://www.weatherbug.com/traffic-cam/" },
    ],
  },

  blogs: {
    title: "Blogs & discussions",
    icon: "Newspaper",
    links: [
      { name: "Capital Weather Gang", url: "https://www.washingtonpost.com/weather/" },
      { name: "Weather Underground Cat6", url: "https://www.wunderground.com/cat6/" },
      { name: "NWS Weather Prediction Center Blog", url: "https://www.wpc.ncep.noaa.gov/dailywxmap/" },
      { name: "SPC Forecast Operations", url: "https://www.spc.noaa.gov/misc/about.html" },
      { name: "Mike Wilhelm — BamaWX (legacy)", url: "https://www.bamawx.com/" },
    ],
  },
};

export const weatherLinkCategoryOrder: WeatherLinksCategoryKey[] = [
  "quickLinks",
  "severeWeather",
  "radarSatellite",
  "stormReports",
  "observations",
  "forecastModels",
  "history",
  "cameras",
  "blogs",
];
