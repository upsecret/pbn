export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  tags: string[];
  category?: string;
}

export interface WeatherLink {
  name: string;
  url: string;
  icon?: string;
  description?: string;
}

export interface WeatherLinkCategory {
  title: string;
  icon: string;
  links: WeatherLink[];
}

export interface SidebarWidget {
  title: string;
  type: string;
  isOpen: boolean;
  content: string;
}

export interface ArchiveItem {
  year: number;
  month: number;
  count: number;
  posts: Post[];
}
