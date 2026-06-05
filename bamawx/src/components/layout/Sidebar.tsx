import { ArchiveWidget } from "@/components/sidebar/ArchiveWidget";
import { BlogFamily } from "@/components/sidebar/BlogFamily";
import { ForecastModels } from "@/components/sidebar/ForecastModels";
import { ObservationsClimate } from "@/components/sidebar/ObservationsClimate";
import { RadarSatellite } from "@/components/sidebar/RadarSatellite";
import { SevereWeatherTools } from "@/components/sidebar/SevereWeatherTools";
import { SocialFeed } from "@/components/sidebar/SocialFeed";
import { SPCOutlooks } from "@/components/sidebar/SPCOutlooks";
import { StormReports } from "@/components/sidebar/StormReports";
import { WeatherCameras } from "@/components/sidebar/WeatherCameras";
import { WeatherHistory } from "@/components/sidebar/WeatherHistory";
import { WeatherQuickLinks } from "@/components/sidebar/WeatherQuickLinks";

export function Sidebar() {
  return (
    <aside
      className="w-full border-t border-bama-light bg-[var(--bama-content-bg)] px-4 py-6 md:w-[270px] md:shrink-0 md:border-l md:border-t-0 md:py-6 md:pl-4 md:pr-3"
      aria-label="Sidebar"
    >
      {/* Welcome + Social */}
      <div className="mb-4">
        <h3 className="sidebar-section-title">Welcome</h3>
        <p className="mb-3 text-[12px] leading-relaxed text-foreground">
          I have been posting about Alabama weather on this blog since April 2006.
          Please follow along on Twitter and Facebook for the latest updates.
        </p>
      </div>
      <SocialFeed />

      {/* SPC Outlook images */}
      <SPCOutlooks />

      {/* Weather link sections */}
      <WeatherQuickLinks />
      <SevereWeatherTools />
      <ForecastModels />
      <RadarSatellite />
      <StormReports />
      <ObservationsClimate />
      <WeatherHistory />
      <WeatherCameras />

      {/* Archive */}
      <ArchiveWidget />

      {/* Blog family + favorite reading */}
      <BlogFamily />

      {/* Author profile */}
      <div className="mt-4 border-t border-bama-light pt-4 dark:border-bama-blue">
        <h3 className="sidebar-section-title">About Me</h3>
        <p className="text-[12px] leading-relaxed text-foreground">
          <strong>Mike Wilhelm</strong> — Alabama weather enthusiast and storm spotter.
          Writing about Alabama skies since 2006.
        </p>
        <p className="mt-1">
          <a
            href="mailto:mikewx2@yahoo.com"
            className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
          >
            mikewx2@yahoo.com
          </a>
        </p>
      </div>
    </aside>
  );
}
