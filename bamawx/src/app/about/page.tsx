export const metadata = {
  title: "About",
  description:
    "About Mike Wilhelm's Alabama Weather Blog (BamaWX) — covering Alabama weather since 2006.",
};

export default function AboutPage() {
  return (
    <div>
      <h2 className="date-header mb-2">ABOUT</h2>
      <h1 className="post-title mb-4">
        <span className="text-foreground">About BamaWX</span>
      </h1>

      <div className="prose prose-bamawx max-w-none dark:prose-invert">
        <p>
          Welcome to Bamawx.com! I have been posting about Alabama weather on this blog since
          April 2006. I am a weather enthusiast and storm spotter based in Alabama.
        </p>
        <p>
          BamaWX is a personal Alabama weather blog focused on context: what the models and maps
          mean, how the atmosphere is evolving, and how to stay safe when storms show up. It is
          not a replacement for official forecasts from the{" "}
          <a href="https://www.weather.gov/" target="_blank" rel="noopener noreferrer">
            National Weather Service
          </a>{" "}
          or local broadcast meteorologists.
        </p>

        <h3>Contact & Social</h3>
        <p>
          Follow along on social media for shares and quick pointers:
        </p>
        <ul>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/bamawx" target="_blank" rel="noopener noreferrer">
              @bamawx
            </a>
          </li>
          <li>
            Facebook:{" "}
            <a href="https://www.facebook.com/bamawx" target="_blank" rel="noopener noreferrer">
              Bamawx.com on Facebook
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:mikewx2@yahoo.com">mikewx2@yahoo.com</a>
          </li>
        </ul>

        <h3>Disclaimer</h3>
        <p>
          Forecasts and statements on this site are not a substitute for official products from
          the National Weather Service or NOAA. Always follow warnings from local NWS offices
          and emergency managers.
        </p>
      </div>
    </div>
  );
}
