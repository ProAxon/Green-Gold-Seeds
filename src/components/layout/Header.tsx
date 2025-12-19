"use client";

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ResponsiveLanguageSwitcher } from "@/components/ResponsiveLanguageSwitcher";
import { CONTACT_INFO, SOCIAL_LINKS } from '@/config/constants';
import { IMAGE_PATHS } from '@/config/images';

const MOBILE_MENU_STYLES = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
} as const;

interface HeaderProps {
  variant?: 'default' | 'two';
  currentPage?: string;
}

export function Header({ variant = 'two', currentPage = '#' }: HeaderProps) {
  const t = useTranslations();
  
  if (variant === 'default') {
    return (
      <>
        <header className="main-header">
          <div className="main-menu__top">
            <div className="main-menu__top-inner">
              <ul className="list-unstyled main-menu__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-email" />
                  </div>
                  <div className="text">
                    <p><a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a></p>
                  </div>
                </li>
              </ul>
              <div className="main-menu__top-right">
                <p className="main-menu__social-title">{t('topBar.followUsOn')}</p>
                <div className="main-menu__social">
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/"><img src={IMAGE_PATHS.logo22} alt="" /></Link>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <div style={MOBILE_MENU_STYLES}>
                    <a href="/#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                    <ResponsiveLanguageSwitcher variant="mobile" />
                  </div>
                  <ul className="main-menu__list">
                    <li>
                      <Link href="/">{t('nav.home')}</Link>
                    </li>
                    <li>
                      <Link href="/about">{t('nav.about')}</Link>
                    </li>
                    <li className="dropdown">
                      <a href="/#" onClick={(e) => e.preventDefault()}>{t('nav.products')}</a>
                      <ul className="shadow-box">
                        <li><Link href="/products">{t('nav.productCategories.allProducts')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.cottonSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.wheatSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.vegetableSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.oilseeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.pulses')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.cereals')}</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog">{t('nav.blog')}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t('nav.contact')}</Link>
                    </li>
                  </ul>
                </div>
                <div className="main-menu__right">
                  <ResponsiveLanguageSwitcher variant="desktop" />
                  <div className="main-menu__call">
                    <div className="main-menu__call-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="main-menu__call-content">
                      <p className="main-menu__call-sub-title">{t('common.callAnytime')}</p>
                      <h5 className="main-menu__call-number"><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneDisplay}</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
        </div>
      </>
    );
  }
  
  return (
    <>
      <header className="main-header-two">
        <div className="main-menu-two__top">
          <div className="container">
            <div className="main-menu-two__top-inner">
              <ul className="list-unstyled main-menu-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-call" />
                  </div>
                  <div className="text">
                    <p><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneDisplay}</a></p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-email" />
                  </div>
                  <div className="text">
                    <p><a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a></p>
                  </div>
                </li>
              </ul>
              <div className="main-menu-two__top-right">
                <div className="main-menu-two__top-time">
                  <div className="main-menu-two__top-time-icon">
                    <span className="fas fa-clock" />
                  </div>
                  <p className="main-menu-two__top-text">{t('common.businessHours')}</p>
                </div>
                <div className="main-menu-two__social">
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="container">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/"><img src={IMAGE_PATHS.logo11} alt="" /></Link>
                  </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <div style={MOBILE_MENU_STYLES}>
                    <a href={`${currentPage}#`} className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                    <ResponsiveLanguageSwitcher variant="mobile" />
                  </div>
                  <ul className="main-menu__list">
                    <li>
                      <Link href="/">{t('nav.home')}</Link>
                    </li>
                    <li>
                      <Link href="/about">{t('nav.about')}</Link>
                    </li>
                    <li className="dropdown">
                      <a href={`${currentPage}#`} onClick={(e) => e.preventDefault()}>{t('nav.products')}</a>
                      <ul className="shadow-box">
                        <li><Link href="/products">{t('nav.productCategories.allProducts')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.cottonSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.wheatSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.vegetableSeeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.oilseeds')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.pulses')}</Link></li>
                        <li><Link href="/products">{t('nav.productCategories.cereals')}</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog">{t('nav.blog')}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t('nav.contact')}</Link>
                    </li>
                  </ul>
                </div>
                <div className="main-menu-two__right">
                  <ResponsiveLanguageSwitcher variant="desktop" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content" />
      </div>
    </>
  );
}

