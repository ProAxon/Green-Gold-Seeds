import Link from "next/link";
import { siteConfig, footerData } from "@/data/config";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="site-footer__bg"
        style={{ backgroundImage: "url(assets/images/backgrounds/site-footer-bg.jpg)" }}
      />
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div className="footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/">
                      <img src={siteConfig.logo.light} alt="" />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{footerData.about.text}</p>
                  <div className="footer-widget__payment">
                    <h3>We Accept</h3>
                    <div className="footer-widget__payment-card">
                      {footerData.about.paymentCards.map((card, index) => (
                        <a key={index} href={card.href}>
                          <img src={card.image} alt="" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget__links">
                  <h4 className="footer-widget__title">Quick links</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    {footerData.quickLinks.map((link, index) => (
                      <li key={index}>
                        <span className={link.icon} />
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget__services">
                  <h4 className="footer-widget__title">PM Group</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    {footerData.pmGroup.map((item, index) => (
                      <li key={index}>
                        <span className="fas fa-wheat" />
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="footer-widget__contact">
                  <h3 className="footer-widget__title">Contact Us</h3>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin" />
                      </div>
                      <p>{footerData.contact.address}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <p>
                        <a href={`tel:${footerData.contact.phone.replace(/\D/g, "")}`}>
                          {footerData.contact.phone}
                        </a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email" />
                      </div>
                      <p>
                        <a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__copyright">
                  <p className="site-footer__copyright-text">
                    {siteConfig.footer.copyright} <a href="/">{siteConfig.name}</a>. All Rights Reserved.
                  </p>
                </div>
                <div className="site-footer__bottom-menu-box">
                  <ul className="list-unstyled site-footer__bottom-menu">
                    {siteConfig.footer.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

