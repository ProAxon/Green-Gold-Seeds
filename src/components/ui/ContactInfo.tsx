import { siteConfig } from "@/data/config";

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className = "sidebar-contact-info" }: ContactInfoProps) {
  return (
    <div className={className}>
      <h4>Contact Info</h4>
      <ul className="list-unstyled">
        <li>
          <span className="icon-pin" /> {siteConfig.contact.address}
        </li>
        <li>
          <span className="icon-call" />
          <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>{siteConfig.contact.phone}</a>
        </li>
        <li>
          <span className="icon-email" />
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </li>
      </ul>
    </div>
  );
}

