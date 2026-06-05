import { IconFacebook, IconX } from "@/components/icons/social";

const X_URL = "https://twitter.com/bamawx";
const FB_URL = "https://www.facebook.com/bamawx";

export function SocialFeed() {
  return (
    <div className="mb-4">
      <h3 className="sidebar-section-title">Follow BamaWX</h3>
      <div className="space-y-2">
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
        >
          <IconX className="size-4" aria-hidden />
          @bamawx on X (Twitter)
        </a>
        <a
          href={FB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
        >
          <IconFacebook className="size-4" aria-hidden />
          BamaWX on Facebook
        </a>
      </div>
    </div>
  );
}
