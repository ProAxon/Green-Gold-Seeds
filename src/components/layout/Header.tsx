"use client";

import Link from "next/link";
import { siteConfig, navigationMenu } from "@/data/config";
import { SocialLinks } from "../ui/SocialLinks";
import { Button } from "../ui/Button";

interface HeaderProps {
  variant?: "default" | "two";
}

export function Header({ variant = "default" }: HeaderProps) {
  const headerClass = variant === "two" ? "main-header-two" : "main-header";
  const menuClass = variant === "two" ? "main-menu main-menu-two" : "main-menu";
  const wrapperClass = variant === "two" ? "main-menu-two__wrapper" : "main-menu__wrapper";
  const innerClass = variant === "two" ? "main-menu-two__wrapper-inner" : "main-menu__wrapper-inner";
  const leftClass = variant === "two" ? "main-menu-two__left" : "main-menu__left";
  const logoClass = variant === "two" ? "main-menu-two__logo" : "main-menu__logo";
  const boxClass = variant === "two" ? "main-menu-two__main-menu-box" : "main-menu__main-menu-box";
  const rightClass = variant === "two" ? "main-menu-two__right" : "main-menu__right";
  const stickyClass = variant === "two" ? "stricky-header stricked-menu main-menu main-menu-two" : "stricky-header stricked-menu main-menu";

  return (
    <>
      <header className={headerClass}>
        <div className="main-menu__top">
          <div className="main-menu__top-inner">
            <ul className="list-unstyled main-menu__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-email" />
                </div>
                <div className="text">
                  <p>
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-pin" />
                </div>
                <div className="text">
                  <p>{siteConfig.contact.address}</p>
                </div>
              </li>
            </ul>
            <p className="main-menu__top-welcome-text">{siteConfig.welcomeText}</p>
            <div className="main-menu__top-right">
              <p className="main-menu__social-title">Follow Us On:</p>
              <div className="main-menu__social">
                {siteConfig.socialLinks.map((social) => (
                  <a key={social.name} href={social.url}>
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className={menuClass}>
          <div className={wrapperClass}>
            <div className={innerClass}>
              <div className={leftClass}>
                <div className={logoClass}>
                  <Link href="/">
                    <img src={variant === "two" ? siteConfig.logo.light : siteConfig.logo.dark} alt="" />
                  </Link>
                </div>
              </div>
              <div className={boxClass}>
                <a href="/#" className="mobile-nav__toggler">
                  <i className="fa fa-bars" />
                </a>
                <ul className="main-menu__list">
                  {navigationMenu.map((item) => (
                    <li
                      key={item.label}
                      className={item.hasDropdown ? (item.isMegaMenu ? "dropdown megamenu" : "dropdown") : ""}
                    >
                      <a href={item.href}>{item.label}</a>
                      {item.hasDropdown && item.dropdownItems && (
                        <ul className={item.isMegaMenu ? "" : "shadow-box"}>
                          {item.isMegaMenu ? (
                            <li>
                              <section className="home-showcase">
                                <div className="container">
                                  <div className="home-showcase__inner">
                                    <div className="row">
                                      {item.dropdownItems.map((dropdownItem: any, index: number) => (
                                        <div key={index} className="col-lg-3">
                                          <div className="home-showcase__item">
                                            <div className="home-showcase__image">
                                              <img src={dropdownItem.image} alt="" />
                                              <div className="home-showcase__buttons">
                                                <a href={dropdownItem.multiPageUrl} className="thm-btn home-showcase__buttons__item">
                                                  Multi Page
                                                  <i className="fal fa-long-arrow-right" />
                                                  <span className="hover-btn hover-bx" />
                                                  <span className="hover-btn hover-bx2" />
                                                  <span className="hover-btn hover-bx3" />
                                                  <span className="hover-btn hover-bx4" />
                                                </a>
                                                {dropdownItem.onePageUrl && (
                                                  <a href={dropdownItem.onePageUrl} className="thm-btn home-showcase__buttons__item">
                                                    One Page
                                                    <i className="fal fa-long-arrow-right" />
                                                    <span className="hover-btn hover-bx" />
                                                    <span className="hover-btn hover-bx2" />
                                                    <span className="hover-btn hover-bx3" />
                                                    <span className="hover-btn hover-bx4" />
                                                  </a>
                                                )}
                                              </div>
                                            </div>
                                            <h3 className="home-showcase__title">{dropdownItem.title}</h3>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </li>
                          ) : (
                            item.dropdownItems.map((dropdownItem: any, index: number) => (
                              <li key={index}>
                                <a href={dropdownItem.href}>{dropdownItem.label}</a>
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={rightClass}>
                <div className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <i className="icon-call" />
                  </div>
                  <div className="main-menu__call-content">
                    <p className="main-menu__call-sub-title">Call Anytime</p>
                    <h5 className="main-menu__call-number">
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>{siteConfig.contact.phone}</a>
                    </h5>
                  </div>
                </div>
                <div className="main-menu__search-cart-box">
                  <div className="main-menu__search-cart-box">
                    <div className="main-menu__search-box">
                      <a href="/#" className="main-menu__search searcher-toggler-box fal fa-search" />
                    </div>
                    <div className="main-menu__cart-box">
                      <a href="cart.html" className="main-menu__cart">
                        <span className="fal fa-shopping-cart" />
                        <span className="main-menu__cart-count">02</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-menu__nav-sidebar-icon">
                  <a className="navSidebar-button" href="/#">
                    <span className="icon-dots-menu-one" />
                    <span className="icon-dots-menu-two" />
                    <span className="icon-dots-menu-three" />
                  </a>
                </div>
                <div className="main-menu__btn-box">
                  <Button href="/contact">Get A Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={stickyClass}>
        <div className="sticky-header__content" />
      </div>
    </>
  );
}

