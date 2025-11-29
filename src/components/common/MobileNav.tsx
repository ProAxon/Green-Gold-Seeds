import { siteConfig } from "@/data/config";
import { SocialLinks } from "../ui/SocialLinks";

export function MobileNav() {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler" />
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <a href="/" aria-label="logo image">
            <img src={siteConfig.logo.light} width={150} alt="" />
          </a>
        </div>
        <div className="mobile-nav__container" />
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href={`mailto:${siteConfig.contact.email}`}>needhelp@Farmology.com</a>
          </li>
          <li>
            <i className="fas fa-phone" />
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>666 888 0000</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

