import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const links = [
  { name: "Huntsville SkyCam", url: "https://www.waaytv.com/" },
  { name: "Cullman SkyCam", url: "#" },
  { name: "Gadsden SkyCam", url: "#" },
  { name: "Mt. Cheaha SkyCam", url: "#" },
  { name: "Birmingham SkyCam", url: "#" },
  { name: "Gulf Shores Beach Cam", url: "https://www.earthcam.com/" },
  { name: "ABC 33/40 SkyCam Network", url: "https://abc3340.com/weather" },
  { name: "WAKA Montgomery Network", url: "https://www.waka.com/" },
  { name: "ALDOT Statewide Traffic Cameras", url: "https://algotraffic.com/" },
  { name: "Alabama Road Conditions / Cameras", url: "https://algotraffic.com/" },
  { name: "Decatur SkyCam", url: "#" },
  { name: "WeatherBug Webcams", url: "https://www.weatherbug.com/traffic-cam/" },
];

export function WeatherCameras() {
  return <SidebarLinkSection title="Weather Cameras" links={links} />;
}
