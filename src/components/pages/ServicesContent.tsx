"use client";

import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

export function ServicesContent() {
  const t = useTranslations();
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    const hidePreloader = () => {
      setShowPreloader(false);
    };
    
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 300));
      setTimeout(hidePreloader, 1000);
    }
  }, []);
  
  return (
    <>
      <NavHighlighter />
      <div>
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />
        {/*Start Preloader*/}
        {showPreloader && (
          <div id="preloader" style={{ opacity: showPreloader ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <div className="preloader">
              <span />
              <span />
            </div>
          </div>
        )}
        {/*End Preloader*/}
        <div className="chat-icon"><button type="button" className="chat-toggler"><i className="fa fa-comment" /></button></div>
        {/*Chat Popup*/}
        <div id="chat-popup" className="chat-popup">
          <div className="popup-inner">
            <div className="close-chat"><i className="fa fa-times" /></div>
            <div className="chat-form">
              <p>{t('sidebar.pleaseFillForm')}</p>
              <form action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                <div className="form-group">
                  <input type="text" name="name" placeholder={t('contact.yourName')} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder={t('contact.yourEmail')} required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder={t('contact.yourText')} required defaultValue={""} />
                </div>
                <div className="form-group message-btn">
                  <button type="submit" className="thm-btn"> {t('common.submitNow')}
                    <i className="fal fa-long-arrow-right" />
                    <span className="hover-btn hover-bx" />
                    <span className="hover-btn hover-bx2" />
                    <span className="hover-btn hover-bx3" />
                    <span className="hover-btn hover-bx4" />
                  </button>
                </div>
                <div className="result" />
              </form>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
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
                        <p><a href="tel:+919922933999">+91-9922933999</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-email" />
                      </div>
                      <div className="text">
                        <p><a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
                        </p>
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
                      <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
                      <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
                      <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
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
                        <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                      </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                      <a href="/services#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <Link href="/">{t('nav.home')}</Link>
                        </li>
                        <li>
                          <Link href="/about">{t('nav.about')}</Link>
                        </li>
                        <li className="dropdown">
                          <a href="/services#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/services">{t('nav.services')}</Link></li>
                            <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/services#" onClick={(e) => e.preventDefault()}>{t('nav.shop')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/products">{t('nav.products')}</Link></li>
                            <li><Link href="/products">{t('nav.productDetails')}</Link></li>
                            <li><Link href="/products">{t('nav.cart')}</Link></li>
                            <li><Link href="/products">{t('nav.checkout')}</Link></li>
                            <li><Link href="/products">{t('nav.wishlist')}</Link></li>
                            <li><Link href="/contact">{t('nav.signUp')}</Link></li>
                            <li><Link href="/contact">{t('nav.login')}</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/services#" onClick={(e) => e.preventDefault()}>{t('nav.blog')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/blog">{t('nav.blog')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogStandard')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogLeftSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogRightSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogDetails')}</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">{t('nav.contact')}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu-two__right">
                      <LanguageSwitcher />
                      <div className="main-menu-two__search-box">
                        <span className="main-menu-two__search searcher-toggler-box fal fa-search" />
                      </div>
                      <div className="main-menu-two__cart">
                        <Link href="/products">
                          <span className="fal fa-shopping-cart" />
                          <span className="main-menu-two__cart-count">02</span>
                        </Link>
                      </div>
                      <div className="main-menu-two__user">
                        <Link href="/contact"><span className="far fa-users" /></Link>
                      </div>
                      <div className="main-menu-two__btn-box">
                        <Link className="thm-btn" href="/contact">{t('common.getAQuote')}
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="stricky-header stricked-menu main-menu main-menu-two">
            <div className="sticky-header__content" />{/* /.sticky-header__content */}
          </div>{/* /.stricky-header */}
          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>{t('services.diagnosticsTest')}</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><Link href="/">{t('nav.home')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>{t('services.diagnosticsTest')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*Services Page Start*/}
          <section className="services-page">
            <div className="container">
              <div className="row justify-content-center">
                {/*Diagnostics Test Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="/assets/images/backgrounds/qualityassurance.png" alt={t('services.diagnosticsTest')} />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-precision-agriculture" />
                      </div>
                      <h3 className="services-two__title"><Link href="/diagnostics-test">{t('services.diagnosticsTest')}</Link>
                      </h3>
                      <p className="services-two__text">{t('services.diagnosticsTestDescription')}</p>
                      <div className="services-two__read-more">
                        <Link href="/diagnostics-test">{t('common.readMore')}<span className="fas fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Diagnostics Test Single End*/}
              </div>
            </div>
          </section>
          {/*Services Page End*/}
          {/*Site Footer Two Start*/}
          <footer className="site-footer-two">
            <div className="site-footer-two__top">
              <div className="container">
                <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
                  </div>
                  <h3 className="footer-widget-two__newsletter-title" dangerouslySetInnerHTML={{ __html: t('footer.newsletter.title') }} />
                  <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                    <div className="footer-widget-two__newsletter-form-input-box">
                      <input type="email" placeholder={t('about.enterEmail')} name="EMAIL" />
                    </div>
                    <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">{t('common.subscribe')}
                      <i className="fal fa-long-arrow-right" />
                      <span className="hover-btn hover-bx" />
                      <span className="hover-btn hover-bx2" />
                      <span className="hover-btn hover-bx3" />
                      <span className="hover-btn hover-bx4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="site-footer-two__middle">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="footer-widget-two__working-box">
                      <h3 className="footer-widget-two__working-title">{t('footer.openingTime.title')}:</h3>
                      <ul className="footer-widget-two__working-hour list-unstyled">
                        <li>
                          <p>{t('common.businessHoursFull')}<span>{t('common.businessHoursTime')}</span></p>
                        </li>
                        <li>
                          <p>{t('footer.openingTime.saturday')}<span>{t('footer.openingTime.saturdayHours')}</span></p>
                        </li>
                        <li>
                          <p>{t('footer.openingTime.sunday')}<span>{t('footer.openingTime.sundayHours')}</span></p>
                        </li>
                      </ul>
                      <div className="site-footer-two__social">
                        <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                        <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
                        <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                        <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                    <div className="footer-widget-two__column footer-widget-two__usefull-link">
                      <div className="footer-widget-two__title-box">
                        <h3 className="footer-widget-two__title">{t('footer.quickLinks.title')}</h3>
                      </div>
                      <div className="footer-widget-two__link-box">
                        <ul className="footer-widget-two__link list-unstyled">
                          <li><span className="fas fa-wheat" /><Link href="/about">{t('footer.quickLinks.aboutUs')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/services">{t('footer.quickLinks.portfolio')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/faq">{t('footer.quickLinks.helpFaqs')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/blog">{t('footer.quickLinks.blog')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/services">{t('footer.quickLinks.services')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/contact">{t('footer.quickLinks.contact')}</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="footer-widget-two__column footer-widget-two__products">
                      <div className="footer-widget-two__title-box">
                        <h3 className="footer-widget-two__title">{t('footer.ourProducts.title')}</h3>
                      </div>
                      <ul className="footer-widget-two__link list-unstyled">
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.freshProduce')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.livestockProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.organicFarming')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.cropsGrains')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.poultry')}</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget-two__logo">
                  <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="site-footer-two__bottom">
              <div className="container">
                <div className="site-footer-two__bottom-inner">
                  <p className="site-footer-two__bottom-text">© Copyright 2023 by <a href="https://ajeetseed.co.in" target="_blank" rel="noopener noreferrer">ajeetseed.co.in</a></p>
                  <ul className="list-unstyled site-footer-two__bottom-menu">
                    <li><Link href="/contact">{t('footer.support')}</Link></li>
                    <li><Link href="/about">{t('footer.termsAndCondition')}</Link></li>
                    <li><Link href="/about">{t('footer.privacyAndPolicy')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          {/*Site Footer Two End*/}
        </div>{/* /.page-wrapper */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          {/* /.mobile-nav__overlay */}
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
            <div className="logo-box">
              <Link href="/" aria-label="logo image"><img src="/assets/images/resources/logo-1.png" width={150} alt="" /></Link>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container" />
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:+919922933999">+91-9922933999</a>
              </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer" className="fab fa-twitter" />
                <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square" />
                <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin" />
                <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
              </div>{/* /.mobile-nav__social */}
            </div>{/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        {/* Search Popup */}
        <div className="search-popup">
          <div className="color-layer" />
          <button className="close-search"><span className="far fa-times fa-fw" /></button>
          <form method="post" action="/blog">
            <div className="form-group">
              <input type="search" name="search-field" defaultValue="" placeholder={t('common.searchHere')} required />
              <button type="submit"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* End Search Popup */}
        <Link href="/services#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </Link>
        {/* template js */}
      </div>

    </>
  );
}

