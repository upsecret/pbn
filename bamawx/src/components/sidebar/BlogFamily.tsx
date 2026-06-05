import { SidebarLinkSection } from "@/components/sidebar/SidebarLinkSection";

const blogFamily = [
  { name: "My Sweet Home in Alabama", url: "#" },
  { name: "David's Place", url: "#" },
  { name: "Joe's Place", url: "#" },
  { name: "Bible Study Blog", url: "#" },
];

const favoriteReading = [
  { name: "ABC 33/40 Weather Blog", url: "https://abc3340.com/weather" },
  { name: "Cliff Mass Weather Blog", url: "https://cliffmass.blogspot.com/" },
  { name: "Jeff Masters' WunderBlog", url: "https://www.wunderground.com/cat6/" },
  { name: "Capital Weather Gang", url: "https://www.washingtonpost.com/weather/" },
  { name: "WeatherBrains", url: "https://weatherbrains.com/" },
  { name: "Tennessee Valley Weather", url: "#" },
  { name: "EYE OF THE STORM", url: "#" },
  { name: "Iowa WX", url: "#" },
  { name: "Southern Weather Brigade", url: "#" },
  { name: "Dan's Wild Wild Weather Journal", url: "#" },
];

const recommendations = [
  { name: "The Surgical Technique That Cured My Gynecomastia", url: "https://man.daprs.com/men/gynecomastia.php" },
  { name: "Good Guideline Choosing Study Abroad Agency", url: "#" },
  { name: "Prosthodontic Dental Clinic NYC", url: "https://prosthandconyc.com/" },
  { name: "Da Dosan Skin Clinic", url: "https://da-dosan.com/" },
];

export function BlogFamily() {
  return (
    <>
      <SidebarLinkSection title="Recommendations" links={recommendations} />
      <SidebarLinkSection title="Blog Family" links={blogFamily} />
      <SidebarLinkSection title="Some of My Favorite Reading" links={favoriteReading} />
    </>
  );
}
