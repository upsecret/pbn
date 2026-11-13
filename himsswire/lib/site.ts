export const publication = "HIMSSwire";
export const description = "Independent coverage of healthcare technology, data, and hospital operations.";
export const siteUrl = (process.env.SITE_URL ?? "https://www.himsswire.com").replace(/\/$/, "");

export const topics = [
  { slug: "interoperability", name: "EHR & Interoperability", description: "Electronic health records, standards and the exchange of clinical data." },
  { slug: "security", name: "Cybersecurity", description: "Protecting healthcare systems, patient information and critical services." },
  { slug: "digital-health", name: "Digital Health", description: "Virtual care, remote monitoring and the patient experience." },
  { slug: "data-ai", name: "Data & AI", description: "How healthcare teams evaluate, govern and use data and AI." },
  { slug: "hospital-operations", name: "Hospital Operations", description: "The systems and workflows behind care delivery." },
] as const;

export function articlePath(slug: string) {
  // WordPress percent-encodes non-ASCII post names in its REST API.
  try {
    return "/news/" + encodeURIComponent(decodeURIComponent(slug));
  } catch {
    return "/news/" + encodeURIComponent(slug);
  }
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(value));
}
