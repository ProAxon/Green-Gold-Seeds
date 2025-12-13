"use client";

import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

export function FaqContent() {
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
        <div 
          id="preloader" 
          suppressHydrationWarning
          style={{ 
            opacity: showPreloader ? 1 : 0, 
            transition: 'opacity 0.5s ease',
            pointerEvents: showPreloader ? 'auto' : 'none',
            display: showPreloader ? 'block' : 'none'
          }}
        >
          <div className="preloader">
            <span />
            <span />
          </div>
        </div>
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
                        <p><a href="tel:+918888866031">+91 88888 66031</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-email" />
                      </div>
                      <div className="text">
                        <p><a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
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
                      <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
                      <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
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
                      <a href="/faq#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <Link href="/">{t('nav.home')}</Link>
                        </li>
                        <li>
                          <Link href="/about">{t('nav.about')}</Link>
                        </li>
                        {/* Services dropdown commented out - temporarily disabled
                        <li className="dropdown">
                          <a href="/faq#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/services">{t('nav.services')}</Link></li>
                            <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                          </ul>
                        </li>
                        */}
                        <li className="dropdown">
                          <a href="/faq#" onClick={(e) => e.preventDefault()}>{t('nav.products')}</a>
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
                        {/* Blog dropdown commented out - temporarily disabled
                        <li className="dropdown">
                          <a href="/faq#" onClick={(e) => e.preventDefault()}>{t('nav.blog')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/blog">{t('nav.blog')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogStandard')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogLeftSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogRightSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogDetails')}</Link></li>
                          </ul>
                        </li>
                        */}
                        <li>
                          <Link href="/contact">{t('nav.contact')}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu-two__right">
                      <LanguageSwitcher />
                      {/* Search, Cart, and Get A Quote components removed */}
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
                <h3>Our Faq </h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><Link href="/">{t('nav.home')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>Faq </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*Faq Page Start */}
          <div className="faq-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="faq-one__right faq-page__right">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Are your fruits and vegetables organic?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we strictly follow organic farming methods without harmful
                              chemicals.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion active wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Do you deliver products at home?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we provide safe and fast home delivery within selected areas. Don’t
                              hesitate to reach out!
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>What payment methods do you accept?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We accept cash on delivery, mobile banking, and online payments.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>How can I visit your farm?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>You can book a farm tour from our website or contact us directly.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Where are your farm products sourced from?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>All of our products are directly harvested from our own organic farm to
                              ensure freshness.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="faq-one__right faq-page__right">
                    <div className=" accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Are your fruits and vegetables organic?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we strictly follow organic farming methods without harmful
                              chemicals.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Do you deliver products at home?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>Yes, we provide safe and fast home delivery within selected areas. Don’t
                              hesitate to reach out!
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>What payment methods do you accept?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>We accept cash on delivery, mobile banking, and online payments.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>How can I visit your farm?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>You can book a farm tour from our website or contact us directly.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>Where are your farm products sourced from?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>All of our products are directly harvested from our own organic farm to
                              ensure freshness.
                            </p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Faq Page End */}
          {/*Site Footer Two Start*/}
          <footer className="site-footer-two">
            <div className="site-footer-two__top">
              <div className="container">
                <div className="footer-widget-two__newsletter">
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
                  </div>
                  <h3 className="footer-widget-two__newsletter-title" dangerouslySetInnerHTML={{ __html: t('footer.newsletter.title') }} />
                  <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                    <div className="footer-widget-two__newsletter-form-input-box">
                      <input type="email" placeholder="Enter email" name="EMAIL" />
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
            {/* site-footer-two__middle section removed */}
            <div className="site-footer-two__bottom">
              <div className="container">
                <div className="site-footer-two__bottom-inner">
                  <p className="site-footer-two__bottom-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
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
                <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:+918888866031">+91 88888 66031</a>
              </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer" className="fab fa-youtube" />
                <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square" />
                <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
              </div>{/* /.mobile-nav__social */}
            </div>{/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        {/* Search Popup */}
        {/* Search Popup removed */}
        <Link href="/faq#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </Link>
        {/* template js */}
      </div>

    </>
  );
}
