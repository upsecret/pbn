export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  yoast_head_json?: YoastSEO;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: YoastSEO;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      medium?: { source_url: string };
      large?: { source_url: string };
      thumbnail?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

export interface YoastSEO {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: { url: string }[];
  canonical?: string;
  schema?: Record<string, unknown>;
  twitter_misc?: Record<string, string>;
}

export interface WPPaginatedResponse<T> {
  data: T[];
  totalPages: number;
  totalItems: number;
}
