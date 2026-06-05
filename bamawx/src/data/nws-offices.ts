import type { WeatherLink } from "@/types";

/** Alabama-area NWS offices — forecast & alert hubs */
export const nwsOffices: WeatherLink[] = [
  {
    name: "NWS Birmingham, AL",
    url: "https://www.weather.gov/bmx",
    description: "Central & eastern Alabama",
  },
  {
    name: "NWS Huntsville, AL",
    url: "https://www.weather.gov/hun",
    description: "Northern Alabama",
  },
  {
    name: "NWS Mobile, AL",
    url: "https://www.weather.gov/mob",
    description: "Southwest Alabama & Gulf Coast",
  },
  {
    name: "NWS Jackson, MS",
    url: "https://www.weather.gov/jan",
    description: "Western AL border / Mississippi",
  },
  {
    name: "NWS Memphis, TN",
    url: "https://www.weather.gov/meg",
    description: "Northwest Alabama / Mid-South",
  },
  {
    name: "NWS Nashville, TN",
    url: "https://www.weather.gov/ohx",
    description: "Northern border / Middle Tennessee",
  },
  {
    name: "NWS Tallahassee, FL",
    url: "https://www.weather.gov/tae",
    description: "Southeastern AL / Florida Panhandle",
  },
  {
    name: "NWS Morristown (Chattanooga area), TN",
    url: "https://www.weather.gov/mrx",
    description: "Northeast Alabama / East Tennessee",
  },
  {
    name: "NWS Atlanta, GA",
    url: "https://www.weather.gov/ffc",
    description: "Eastern Alabama / Georgia",
  },
];
