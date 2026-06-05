interface SidebarLink {
  name: string;
  url: string;
}

interface SidebarLinkSectionProps {
  title: string;
  links: SidebarLink[];
}

export function SidebarLinkSection({ title, links }: SidebarLinkSectionProps) {
  return (
    <div className="mb-4">
      <h3 className="sidebar-section-title">{title}</h3>
      <ul className="sidebar-links space-y-0.5">
        {links.map((link) => (
          <li key={link.url + link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
