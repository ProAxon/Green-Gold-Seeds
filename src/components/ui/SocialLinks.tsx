import { siteConfig } from "@/data/config";

interface SocialLinksProps {
  className?: string;
  itemClassName?: string;
}

export function SocialLinks({ className = "social-box list-unstyled", itemClassName }: SocialLinksProps) {
  return (
    <ul className={className}>
      {siteConfig.socialLinks.map((social) => (
        <li key={social.name} className={itemClassName}>
          <a href={social.url} aria-label={social.name}>
            <i className={social.icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

