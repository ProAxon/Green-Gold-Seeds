"use client";

import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

export function HomeContent() {
  const t = useTranslations();
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    // Hide preloader after component mounts
    const hidePreloader = () => {
      setShowPreloader(false);
    };
    
    // Hide immediately if DOM is ready
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 300));
      // Fallback timeout
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
        {/* Start sidebar widget content */}
        <div className="xs-sidebar-group info-group info-sidebar">
          <div className="xs-overlay xs-bg-black" />
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a href="/#" className="close-side-widget">X</a>
              </div>
              <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                  <div className="content-inner">
                    <div className="logo">
                      <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                    </div>
                    <div className="content-box">
                      <h4>{t('sidebar.aboutUs')}</h4>
                      <div className="inner-text">
                        <p>{t('sidebar.sidebarAboutText')}
                        </p>
                      </div>
                    </div>
                    {/* Get A Free Quote form removed */}
                    <div className="sidebar-contact-info">
                      <h4>{t('sidebar.contactInfo')}</h4>
                      <ul className="list-unstyled">
                        <li>
                          <span className="icon-pin" /> {t('contact.location')}
                        </li>
                        <li>
                          <span className="icon-call" />
                          <a href="tel:+918888866031">+91 88888 66031</a>
                        </li>
                        <li>
                          <span className="icon-email" />
                          <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="thm-social-link1">
                      <ul className="social-box list-unstyled">
                        <li>
                          <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" aria-hidden="true" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End sidebar widget content */}
        <div className="page-wrapper">
          <header className="main-header">
            <div className="main-menu__top">
              <div className="main-menu__top-inner">
                <ul className="list-unstyled main-menu__contact-list">
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
                {/* Welcome text header removed */}
                <div className="main-menu__top-right">
                  <p className="main-menu__social-title">{t('topBar.followUsOn')}</p>
                  <div className="main-menu__social">
                    <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
                    <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <nav className="main-menu">
              <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <Link href="/"><img src="/assets/images/resources/logo-2.png" alt="" /></Link>
                    </div>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a href="/#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                    <ul className="main-menu__list">
                      <li>
                        <Link href="/">{t('nav.home')}</Link>
                      </li>
                      <li>
                        <Link href="/about">{t('nav.about')}</Link>
                      </li>
                      {/* Services dropdown commented out - temporarily disabled
                      <li className="dropdown">
                        <a href="/#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                        <ul className="shadow-box">
                          <li><Link href="/services">{t('nav.services')}</Link></li>
                          <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                        </ul>
                      </li>
                      */}
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
                    <div className="main-menu__call">
                      <div className="main-menu__call-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="main-menu__call-content">
                        <p className="main-menu__call-sub-title">{t('common.callAnytime')}</p>
                        <h5 className="main-menu__call-number"><a href="tel:+918888866031">+91 88888 66031</a></h5>
                      </div>
                    </div>
                    <LanguageSwitcher />
                    {/* Search and Cart components removed */}
                    <div className="main-menu__nav-sidebar-icon">
                      <a className="navSidebar-button" href="/#">
                        <span className="icon-dots-menu-one" />
                        <span className="icon-dots-menu-two" />
                        <span className="icon-dots-menu-three" />
                      </a>
                    </div>
                    {/* Get A Quote button removed */}
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content" />{/* /.sticky-header__content */}
          </div>{/* /.stricky-header */}
          {/* Banner One Start */}
          <section className="banner-one">
            <div className="banner-one__shape-bg" style={{ backgroundImage: 'url(/assets/images/shapes/banner-one-shape-bg.png)' }}>
            </div>
            <div className="banner-one__shape-4 float-bob-x">
              <img src="/assets/images/shapes/banner-one-shape-4.png" alt="" />
            </div>
            <div className="banner-one__shape-5 float-bob-y">
              <img src="/assets/images/shapes/banner-one-shape-5.png" alt="" />
            </div>
            <div className="banner-one__shape-6">
              <img src="/assets/images/shapes/banner-one-shape-6.png" alt="" />
            </div>
            <div className="banner-one__shape-7 img-bounce">
              <img src="/assets/images/shapes/banner-one-shape-7.png" alt="" />
            </div>
            <div className="banner-one__shape-8 float-bob-y">
              <img src="/assets/images/shapes/banner-one-shape-8.png" alt="" />
            </div>
            <div className="container">
              <div className="banner-one__inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="banner-one__left">
                      <div className="banner-one__title-box">
                      <div className="banner-one__sub-title">
                        <p>{t('home.banner.subtitle')}</p>
                      </div>
                      <h2 className="banner-one__title">{t('home.banner.title')}</h2>
                      </div>
                    <p className="banner-one__text">
                      {t('home.banner.description')}
                    </p>
                      <div className="banner-one__thm-and-other-btn-box">
                        <div className="banner-one__btn-box">
                          <Link className="thm-btn" href="/about#our-history">{t('common.exploreOurJourney')}
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
                  <div className="col-xl-6 col-lg-6">
                    <div className="banner-one__right">
                      <div className="banner-one__img-box">
                        <div className="banner-one__img">
                          <img
                            className="img-bounce"
                            src="/assets/images/backgrounds/1-removebg-preview.png"
                            alt={t('home.banner.title')}
                            style={{
                              width: '100%',
                              height: 'auto',
                              objectFit: 'contain',
                              maxWidth: 540,
                              maxHeight: 520,
                              margin: '0 auto',
                              display: 'block',
                            }}
                          />
                          <div className="banner-one__img-shape-box rotate-me">
                            <div className="banner-one__img-shape-1">
                              <div className="banner-one__img-shape-2" />
                            </div>
                            <div className="banner-one__shape-1">
                              <img src="/assets/images/shapes/banner-one-shape-1.png" alt="" />
                            </div>
                            <div className="banner-one__shape-2 rotate-me">
                              <img src="/assets/images/shapes/banner-one-shape-2.png" alt="" />
                            </div>
                            <div className="banner-one__shape-3">
                              <img src="/assets/images/shapes/banner-one-shape-3.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Banner One End */}
          {/*Feature One Start */}
          {false && <section className="feature-one">
            <div className="container">
              <div className="row">
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-one__single wow fadeInLeft" data-wow-delay="100ms">
                    <div className="feature-one__icon">
                      <span className="icon-farming" />
                    </div>
                    <div className="feature-one__content">
                      <h3 className="feature-one__title">Pure &amp; Organic Farming</h3>
                      <p className="feature-one__text">Grow Naturally, Eat Healthy</p>
                    </div>
                  </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-one__single-two wow fadeInUp" data-wow-delay="100ms">
                    <div className="feature-one__single-two-bg-color">
                      <div className="feature-one__single-two-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/feature-one-single-two-bg.jpg)' }}>
                      </div>
                    </div>
                    <ul className="feature-one__ratting list-unstyled">
                      <li>
                        <span className="icon-pointed-star" />
                      </li>
                      <li>
                        <span className="icon-pointed-star" />
                      </li>
                      <li>
                        <span className="icon-pointed-star" />
                      </li>
                    </ul>
                    <div className="feature-one__single-two-shape-1">
                      <img src="/assets/images/shapes/feature-one-single-two-shape-1.png" alt="feature-one-single-two-shape-1" />
                    </div>
                    <div className="feature-one__single-two-shape-2">
                      <img src="/assets/images/shapes/feature-one-single-two-shape-2.png" alt="feature-one-single-two-shape-2" />
                    </div>
                    <div className="feature-one__icon-two">
                      <span className="icon-trophy" />
                    </div>
                    <span className="feature-one__award-year">2025</span>
                    <h3 className="feature-one__title-two">Quality in Organic<br /> Harvests</h3>
                  </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                  <div className="feature-one__single wow fadeInRight" data-wow-delay="100ms">
                    <div className="feature-one__icon">
                      <span className="icon-sustainable" />
                    </div>
                    <div className="feature-one__content">
                      <h3 className="feature-one__title">Innovation in Sustainable Farming</h3>
                      <p className="feature-one__text">Commitment to Green Grow</p>
                    </div>
                  </div>
                </div>
                {/*Feature One Single End*/}
              </div>
            </div>
          </section>}
          {/*Feature One End */}
          {/*About One Start */}
          <section className="about-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-one__left">
                    <div className="about-one__img" style={{ width: '100%', height: '100%', minHeight: '500px' }}>
                      <img src="/assets/images/backgrounds/homepage_1.jpg" alt="Tractor tilling field" style={{ width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-one__right">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="section-title-shape-1" />
                        </div>
                        <h6 className="section-title__tagline">{t('home.about.ourStory')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">{t('home.about.growingWithFarmers')}</h3>
                    </div>
                    <p className="about-one__text">
                      {t('home.about.storyText1')}
                    </p>
                    <p className="about-one__text">
                      {t('home.about.storyText2')}
                    </p>
                    <h4 className="about-one__title-1">{t('home.about.highlightsAtGlance')}</h4>
                    <div className="about-one__points-box-and-since" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', flexWrap: 'wrap' }}>
                      <ul className="about-one__points list-unstyled" style={{ flex: '1', minWidth: '250px' }}>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p dangerouslySetInnerHTML={{ __html: t('home.about.highlight1') }} />
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p dangerouslySetInnerHTML={{ __html: t('home.about.highlight2') }} />
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p dangerouslySetInnerHTML={{ __html: t('home.about.highlight3') }} />
                        </li>
                      </ul>
                      <div className="about-one__since-box" style={{ flexShrink: 0 }}>
                        <div className="about-one__since-icon">
                          <span className="icon-harvester" />
                        </div>
                        <h5 className="about-one__since-title">{t('home.about.progressSince')}</h5>
                        <h4 className="about-one__since-year">2001</h4>
                      </div>
                    </div>
                    <div className="about-one__btn-and-video">
                      <div className="about-one__btn-box">
                        <Link className="thm-btn" href="/about#our-history">{t('common.exploreOurJourney')}
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
            </div>
          </section>
          {/*About One End */}
          {/*Author One Start */}
          <section className="author-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">{t('about.ourVision')}</h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p dangerouslySetInnerHTML={{ __html: t('about.visionText') }} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">{t('about.ourMission')}</h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p dangerouslySetInnerHTML={{ __html: t('about.missionText') }} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">{t('home.values.title')}</h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>{t('home.values.description')}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Author One End */}
          {/*Services One Start */}
          {false && <section className="services-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">What We Do</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Delivering Smart Sustainable And<br /> Innovative
                  <span>Farming Solutions</span></h3>
              </div>
              <div className="row">
                {/*Services One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="services-one__single">
                    <div className="services-one__single-inner">
                      <div className="services-one__single-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/services-one-single-bg-1.jpg)' }}>
                      </div>
                      <div className="services-one__btn-box">
                        <a className="thm-btn" href="/about">Read More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                      <div className="services-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-farming" />
                      </div>
                      <h3 className="services-one__title"><Link href="/services">Organic Farming
                        Solutions</Link></h3>
                      <p className="services-one__text">Eco-friendly fertilizers &amp; natural crop protection. Soil
                        care,
                        water conservation &amp; renewable methods.</p>
                      <div className="services-one__read-more">
                        <a href="/#">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services One Single End*/}
                {/*Services One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                  <div className="services-one__single">
                    <div className="services-one__single-inner">
                      <div className="services-one__single-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/services-one-single-bg-2.jpg)' }}>
                      </div>
                      <div className="services-one__btn-box">
                        <a className="thm-btn" href="/about">Read More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                      <div className="services-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-precision-agriculture" />
                      </div>
                      <h3 className="services-one__title"><Link href="/services">Smart Agriculture
                        Technology</Link></h3>
                      <p className="services-one__text">Eco-friendly fertilizers &amp; natural crop protection. Soil
                        care,
                        water conservation &amp; renewable methods.</p>
                      <div className="services-one__read-more">
                        <a href="/#">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services One Single End*/}
                {/*Services One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                  <div className="services-one__single">
                    <div className="services-one__single-inner">
                      <div className="services-one__single-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/services-one-single-bg-3.jpg)' }}>
                      </div>
                      <div className="services-one__btn-box">
                        <a className="thm-btn" href="/about">Read More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                      <div className="services-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-seeding" />
                      </div>
                      <h3 className="services-one__title"><Link href="/services">High-Quality Seeds &amp;
                        Crops</Link></h3>
                      <p className="services-one__text">Eco-friendly fertilizers &amp; natural crop protection. Soil
                        care,
                        water conservation &amp; renewable methods.</p>
                      <div className="services-one__read-more">
                        <a href="/#">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services One Single End*/}
                {/*Services One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                  <div className="services-one__single">
                    <div className="services-one__single-inner">
                      <div className="services-one__single-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/services-one-single-bg-4.jpg)' }}>
                      </div>
                      <div className="services-one__btn-box">
                        <a className="thm-btn" href="/about">Read More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                      <div className="services-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-farmer" />
                      </div>
                      <h3 className="services-one__title"><Link href="/services">Farmer Training &amp;
                        Support</Link></h3>
                      <p className="services-one__text">Eco-friendly fertilizers &amp; natural crop protection. Soil
                        care,
                        water conservation &amp; renewable methods.</p>
                      <div className="services-one__read-more">
                        <a href="/#">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services One Single End*/}
              </div>
            </div>
          </section>}
          {/*Services One End */}
          {/*Distributors Network Start*/}
          <section id="distributors" style={{ padding: '80px 0', backgroundColor: '#faf8f0' }}>
            <div className="container">
              <div className="section-title text-center">
                <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#190f06', marginBottom: '50px' }}>{t('home.distributorsNetwork.title')}</h2>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div style={{ width: '100%', height: '550px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <iframe 
                      src="/map.html" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 'none' }}
                      title={t('home.distributorsNetwork.title')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Distributors Network End*/}
          {/*Products One Start*/}
          <section className="products-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">{t('home.products.tagline')}</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation" dangerouslySetInnerHTML={{ __html: t('home.products.title') }} />
              </div>
              <div className="row">
                {/*Products One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="products-one__single">
                    <div className="products-one__img-box">
                      <div className="products-one__img">
                        <img src="/assets/images/backgrounds/cotton_home.jpg" alt="Cotton lint close-up" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><Link href="/products">{t('home.products.freshVegetables')}</Link>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-vegetable" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{ backgroundImage: 'url(/assets/images/shapes/products-one-text-bg.png)' }}>
                        </div>
                        <p className="products-one__text">{t('home.products.freshVegetablesDesc')}</p>
                        <div className="products-one__read-more">
                          <Link href="/products">{t('common.readMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Products One Single End*/}
                {/*Products One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                  <div className="products-one__single">
                    <div className="products-one__img-box">
                      <div className="products-one__img">
                        <img src="/assets/images/backgrounds/field_crop_home.jpg" alt="Field crops assortment" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><Link href="/products">{t('home.products.dairyProduct')}</Link>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-cow" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{ backgroundImage: 'url(/assets/images/shapes/products-one-text-bg.png)' }}>
                        </div>
                        <p className="products-one__text">{t('home.products.dairyProductDesc')}</p>
                        <div className="products-one__read-more">
                          <Link href="/products">{t('common.readMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Products One Single End*/}
                {/*Products One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                  <div className="products-one__single">
                    <div className="products-one__img-box">
                      <div className="products-one__img">
                        <img src="/assets/images/backgrounds/pulses_home.jpg" alt="Pulses and grains assortment" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><Link href="/products">{t('home.products.livestockProduct')}</Link>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-hen-1" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{ backgroundImage: 'url(/assets/images/shapes/products-one-text-bg.png)' }}>
                        </div>
                        <p className="products-one__text">{t('home.products.livestockProductDesc')}</p>
                        <div className="products-one__read-more">
                          <Link href="/products">{t('common.readMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Products One Single End*/}
                {/*Products One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                  <div className="products-one__single">
                    <div className="products-one__img-box">
                      <div className="products-one__img">
                        <img src="/assets/images/backgrounds/vegetable_home.jpg" alt="Vegetable seeds assortment" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><Link href="/products">{t('home.products.organicFruits')}</Link>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-healthy-food" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{ backgroundImage: 'url(/assets/images/shapes/products-one-text-bg.png)' }}>
                        </div>
                        <p className="products-one__text">{t('home.products.organicFruitsDesc')}</p>
                        <div className="products-one__read-more">
                          <Link href="/products">{t('common.readMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Products One Single End*/}
              </div>
            </div>
          </section>
          {/*Products One End*/}
          {/*Counter One Start*/}
          <section className="counter-one">
            <div className="counter-one__bg-color" />
            <div className="container">
              <div className="counter-one__inner">
                <div className="row">
                  {/*Counter One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="counter-one__single">
                      <div className="counter-one__single-shape-1" />
                      <div className="counter-one__icon">
                        <span className="icon-farmer" />
                        <div className="counter-one__icon-shape-1" />
                        <div className="counter-one__icon-shape-2" />
                      </div>
                      <h3 className="counter-one__title">{t('home.counter.happyFarmers')}</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={340000} data-speed={1500}></h3>
                      </div>
                    </div>
                  </div>
                  {/*Counter One Single End*/}
                  {/*Counter One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="counter-one__single">
                      <div className="counter-one__single-shape-1" />
                      <div className="counter-one__icon">
                        <span className="icon-harvester" />
                        <div className="counter-one__icon-shape-1" />
                        <div className="counter-one__icon-shape-2" />
                      </div>
                      <h3 className="counter-one__title">{t('home.counter.dealers')}</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={943} data-speed={1500}></h3>
                      </div>
                    </div>
                  </div>
                  {/*Counter One Single End*/}
                  {/*Counter One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="counter-one__single">
                      <div className="counter-one__single-shape-1" />
                      <div className="counter-one__icon">
                        <span className="icon-sustainable" />
                        <div className="counter-one__icon-shape-1" />
                        <div className="counter-one__icon-shape-2" />
                      </div>
                      <h3 className="counter-one__title">{t('home.counter.hardWorkers')}</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={1463} data-speed={1500}></h3>
                      </div>
                    </div>
                  </div>
                  {/*Counter One Single End*/}
                  {/*Counter One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="counter-one__single">
                      <div className="counter-one__icon">
                        <span className="icon-milk" />
                        <div className="counter-one__icon-shape-1" />
                        <div className="counter-one__icon-shape-2" />
                      </div>
                      <h3 className="counter-one__title">{t('home.counter.products')}</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={47} data-speed={1500}></h3>
                      </div>
                    </div>
                  </div>
                  {/*Counter One Single End*/}
                </div>
              </div>
            </div>
          </section>
          {/*Counter One End*/}
          {/*Why Choose One Start*/}
          {false && <section className="why-choose-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Why Choose Us</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Freshness, Trust &amp; Care<br /> In Every Step
                </h3>
              </div>
              <div className="why-choose-one__inner">
                <div className="why-choose-one__img float-bob-x">
                  <img src="/assets/images/resources/why-choose-one-img-1.png" alt="" />
                </div>
                <div className="why-choose-one__shape-1 float-bob-y">
                  <img src="/assets/images/shapes/why-choose-one-shape-1.png" alt="" />
                </div>
                <div className="why-choose-one__shape-2">
                  <img src="/assets/images/shapes/why-choose-one-shape-2.png" alt="" />
                </div>
                <div className="row">
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-satisfication" />
                      </div>
                      <h4 className="why-choose-one__title">100% Fresh<br /> Products</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-sustainable" />
                      </div>
                      <h4 className="why-choose-one__title">Sustainable &amp; Organic<br /> Practices</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-farmer" />
                      </div>
                      <h4 className="why-choose-one__title">Experienced<br /> Farmers</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-guarantee" />
                      </div>
                      <h4 className="why-choose-one__title">Quality &amp; Safety<br /> Guaranteed</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-product" />
                      </div>
                      <h4 className="why-choose-one__title">Wide Range of<br /> Products</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-trusted" />
                      </div>
                      <h4 className="why-choose-one__title">Trusted by<br /> Thousands</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-planting" />
                      </div>
                      <h4 className="why-choose-one__title">Sustainable &amp; Eco-Friendly Practices</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/why-choose-one-single-bg-shape.png)' }}>
                      </div>
                      <div className="why-choose-one__icon">
                        <span className="icon-honesty" />
                      </div>
                      <h4 className="why-choose-one__title">Commitment to Health<br /> &amp; Environment</h4>
                      <p className="why-choose-one__text">Dedicated to every stage of farming excellence
                      </p>
                    </div>
                  </div>
                  {/*Why Choose One Single End*/}
                </div>
              </div>
            </div>
          </section>}
          {/*Why Choose One End*/}
          {/*Project One Start*/}
          {false && <section className="project-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Our Recent Projects</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Real Projects That Bring<br /> Growth, Quality, And
                  Trust
                </h3>
              </div>
              <div className="row masonary-layout">
                {/*Project One Single Start*/}
                <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="/assets/images/project/project-1-1.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Vegetable</p>
                        <h3 className="project-one__title"><Link href="/services">Organic Farming
                          Projects</Link></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Vegetable</p>
                        <h4 className="project-one__title-2"><Link href="/services">Organic Farming
                          Projects</Link></h4>
                        <p className="project-one__text">Blending tradition with technology for smarter
                          agriculture</p>
                        <div className="project-one__arrow">
                          <a href="/assets/images/project/project-1-1.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="/assets/images/project/project-1-2.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Dairy</p>
                        <h3 className="project-one__title"><Link href="/services">Dairy Delight
                          Project</Link></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Dairy</p>
                        <h4 className="project-one__title-2"><Link href="/services">Dairy Delight
                          Project</Link></h4>
                        <p className="project-one__text">Proper health, and feeding, essential for productivity.
                        </p>
                        <div className="project-one__arrow">
                          <a href="/assets/images/project/project-1-2.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="/assets/images/project/project-1-3.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">NutriHarvest</p>
                        <h3 className="project-one__title"><Link href="/services">Healthy Harvest
                          Initiative</Link></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">NutriHarvest</p>
                        <h4 className="project-one__title-2"><Link href="/services">Healthy Harvest
                          Initiative</Link></h4>
                        <p className="project-one__text">Dedicated to every stage of farming excellence</p>
                        <div className="project-one__arrow">
                          <a href="/assets/images/project/project-1-3.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="/assets/images/project/project-1-4.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Livestock</p>
                        <h4 className="project-one__title"><Link href="/services">Livestock Farming
                          Projects</Link></h4>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Livestock</p>
                        <h3 className="project-one__title-2"><Link href="/services">Livestock Farming
                          Projects</Link></h3>
                        <p className="project-one__text">Blending tradition with technology for smarter
                          agriculture</p>
                        <div className="project-one__arrow">
                          <a href="/assets/images/project/project-1-4.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="/assets/images/project/project-1-5.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Agri-Tech</p>
                        <h4 className="project-one__title"><Link href="/services">Agri-Tech Innovation
                        </Link></h4>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Agri-Tech</p>
                        <h3 className="project-one__title-2"><Link href="/services">Agri-Tech
                          Innovation</Link></h3>
                        <p className="project-one__text">Eco-friendly fertilizers &amp; natural crop protection.
                        </p>
                        <div className="project-one__arrow">
                          <a href="/assets/images/project/project-1-5.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
              </div>
            </div>
          </section>}
          {/*Project One End*/}
          {/*Do And Donts Start*/}
          {false && <section className="do-and-donts">
            <div className="do-and-donts__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/do-and-donts-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="do-and-donts__left wow fadeInLeft" data-wow-delay="100ms">
                    <div className="do-and-donts__single-title">
                      <span>{t('homeExtra.doDonts.dosTitle')}</span>
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-1">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do1')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-2">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do2')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-3">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do3')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-4">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do4')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-5">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do5')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="do-and-donts__middle">
                    <div className="do-and-donts__img">
                      <img src="/assets/images/resources/do-and-donts-img-1.png" alt="" />
                    </div>
                    <div className="section-title text-center sec-title-animation animation-style1">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">{t('homeExtra.doDonts.tagline')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation" dangerouslySetInnerHTML={{ __html: t('homeExtra.doDonts.title') }} />
                    </div>
                    <p className="do-and-donts__middle-text">
                      {t('homeExtra.doDonts.intro')}
                    </p>
                    <div className="do-and-donts__btn-box">
                      <a className="thm-btn" href="/about">Grow With Us
                        <i className="fal fa-long-arrow-right" />
                        <span className="hover-btn hover-bx" />
                        <span className="hover-btn hover-bx2" />
                        <span className="hover-btn hover-bx3" />
                        <span className="hover-btn hover-bx4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="do-and-donts__right wow fadeInRight" data-wow-delay="100ms">
                    <div className="do-and-donts__single-title">
                      <span>{t('homeExtra.doDonts.dontsTitle')}</span>
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-6">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont1')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-7">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont2')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-8">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont3')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-9">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont4')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-10">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont5')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>}
          {/*Do And Donts End*/}
          {/*Faq One Start*/}
          {false && <section className="faq-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-5">
                  <div className="faq-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="faq-one__contact-box">
                      <div className="faq-one__contact-box-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/faq-one-contact-box-bg-shape.png)' }}>
                      </div>
                      <div className="faq-one__contact-shape-1">
                        <img src="/assets/images/shapes/faq-one-contact-shape-1.png" alt="" />
                      </div>
                      <div className="faq-one__author-box-inner">
                        <div className="faq-one__author-shape-1">
                          <img src="/assets/images/shapes/faq-one-author-shape-1.png" alt="" />
                        </div>
                        <div className="faq-one__author-box">
                          <div className="faq-one__author-img">
                            <img src="/assets/images/resources/faq-one-author-img.png" alt="" />
                          </div>
                          <h4 className="faq-one__author-name"><Link href="/about">Adam Smith</Link></h4>
                          <p className="faq-one__author-sub-title">Founder</p>
                        </div>
                      </div>
                      <h3 className="faq-one__contact-title">{t('homeExtra.faq.contactTitle')}</h3>
                      <p className="faq-one__contact-text">
                        {t('homeExtra.faq.contactText')}
                      </p>
                      <div className="faq-one__contact-social">
                        <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-f" /></a>
                        <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer"><span className="fab fa-youtube" /></a>
                        <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram" /></a>
                      </div>
                      <div className="faq-one__contact-number">
                        <a href="tel:+918888866031">+91 88888 66031</a>
                      </div>
                      <div className="faq-one__contact-btn">
                        <a className="thm-btn" href="/contact">Shoot a Direct Call
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="faq-one__right">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">{t('homeExtra.faq.tagline')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation" dangerouslySetInnerHTML={{ __html: t('homeExtra.faq.title') }} />
                    </div>
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q1')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a1')}</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion active wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q2')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a2')}</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q3')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a3')}</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q4')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a4')}</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q5')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a5')}</p>
                          </div>{/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>}
          {/*Faq One End*/}
          {/*Testimonial One Start*/}
          {false && <section className="testimonial-one">
            <div className="testimonial-one__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-bg.jpg)' }} />
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">{t('homeExtra.testimonials.tagline')}</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation" dangerouslySetInnerHTML={{ __html: t('homeExtra.testimonials.title') }} />
              </div>
              <div className="testimonial-one__inner">
                <div className="testimonial-one__carousel swiper-container">
                  <div className="swiper-wrapper">
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t1Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t1Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t1Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t2Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t2Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t2Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t3Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t3Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t3Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-4.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t4Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t4Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t4Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-5.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t5Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t5Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t5Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-6.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><Link href="/about">{t('homeExtra.testimonials.t6Role')}</Link></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t6Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t6Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                  </div>
                  <div className="testimonial-one__nav">
                    <div className="swiper-button-next1">
                      <i className="fas fa-arrow-left" />
                    </div>
                    <div className="swiper-button-prev1">
                      <i className="fas fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>}
          {/*Testimonial One End*/}
          {/*Start Cta One*/}
          {false && <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <div className="cta-one__img">
                  <img src="/assets/images/resources/cta-one-img-1.png" alt="" />
                </div>
                <div className="cta-one__content">
                  <div className="cta-one__shape-1" style={{ backgroundImage: 'url(/assets/images/shapes/cta-one-shape-1.png)' }} />
                  <div className="cta-one__shape-2 float-bob-x">
                    <img src="/assets/images/shapes/cta-one-shape-2.png" alt="" />
                  </div>
                  <div className="cta-one__shape-bg" style={{ backgroundImage: 'url(/assets/images/shapes/cta-one-shape-bg.png)' }} />
                  <h2>Recognized as One of The <br /> Leading <span>Farming!</span></h2>
                  <p className="cta-one__text-1">Thousands of families choose us for healthy, safe, and farm-fresh<br />
                    products every day.Trusted by Families &amp; Food Lovers.</p>
                  <p className="cta-one__text-2 count-box">Join with <span className="count-text" data-stop={25} data-speed={1500} />
                    <span className="count-text-plus">k+ </span>happy
                    users.</p>
                  <ul className="cta-one__app-list list-unstyled">
                    <li>
                      <div className="icon">
                        <img src="/assets/images/icon/app-1.png" alt="" />
                      </div>
                      <div className="content">
                        <p>Play Store</p>
                        <span>ios</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/assets/images/icon/app-2.png" alt="" />
                      </div>
                      <div className="content">
                        <p>App Store</p>
                        <span>Android</span>
                      </div>
                    </li>
                  </ul>
                  <div className="cta-one__btn-box">
                    <a className="thm-btn" href="/about">Read More
                      <i className="fal fa-long-arrow-right" />
                      <span className="hover-btn hover-bx" />
                      <span className="hover-btn hover-bx2" />
                      <span className="hover-btn hover-bx3" />
                      <span className="hover-btn hover-bx4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>}
          {/*End Cta One*/}
          {/*Blog One Start */}
          {false && <section className="blog-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">News & Events</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Latest News & Events
                </h3>
              </div>
              <div className="row">
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="blog-one__single">
                    <div className="blog-one__single-inner">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                          <div className="blog-one__plus">
                            <a href="/blog"><i className="fas fa-plus" /></a>
                          </div>
                          <div className="blog-one__tag">
                            <a href="/blog">Organic</a>
                          </div>
                        </div>
                        <div className="blog-one__date">
                          <p>25 <span>Mar</span></p>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/blog-one-content-bg-shape.png)' }}>
                        </div>
                        <ul className="blog-one__meta list-unstyled">
                          <li>
                            <a href="/blog">
                              <span className="fas fa-user" />Admin
                            </a>
                          </li>
                          <li>
                            <a href="/blog">
                              <span className="fas fa-comments" />Comment
                            </a>
                          </li>
                        </ul>
                        <h3 className="blog-one__title"><a href="/blog">Why Fresh, Organic
                          Vegetables
                          Matter</a></h3>
                        <p className="blog-one__text">Learn how organic vegetables benefit your health and the
                          planet at the same time.</p>
                      </div>
                      <div className="blog-one__read-more">
                        <a href="/blog">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="blog-one__single">
                    <div className="blog-one__single-inner">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                          <div className="blog-one__plus">
                            <a href="/blog"><i className="fas fa-plus" /></a>
                          </div>
                          <div className="blog-one__tag">
                            <a href="/blog">FreshProduce</a>
                          </div>
                        </div>
                        <div className="blog-one__date">
                          <p>05 <span>Jun</span></p>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/blog-one-content-bg-shape.png)' }}>
                        </div>
                        <ul className="blog-one__meta list-unstyled">
                          <li>
                            <a href="/blog">
                              <span className="fas fa-user" />Admin
                            </a>
                          </li>
                          <li>
                            <a href="/blog">
                              <span className="fas fa-comments" />Comment
                            </a>
                          </li>
                        </ul>
                        <h3 className="blog-one__title"><a href="/blog">Health Benefits of Organic
                          Vegetables</a></h3>
                        <p className="blog-one__text">Learn how organic vegetables benefit your health and the
                          planet at the same time.</p>
                      </div>
                      <div className="blog-one__read-more">
                        <a href="/blog">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                  <div className="blog-one__single">
                    <div className="blog-one__single-inner">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                          <div className="blog-one__plus">
                            <a href="/blog"><i className="fas fa-plus" /></a>
                          </div>
                          <div className="blog-one__tag">
                            <a href="/blog">AgriTech</a>
                          </div>
                        </div>
                        <div className="blog-one__date">
                          <p>13 <span>Aug</span></p>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/blog-one-content-bg-shape.png)' }}>
                        </div>
                        <ul className="blog-one__meta list-unstyled">
                          <li>
                            <a href="/blog">
                              <span className="fas fa-user" />Admin
                            </a>
                          </li>
                          <li>
                            <a href="/blog">
                              <span className="fas fa-comments" />Comment
                            </a>
                          </li>
                        </ul>
                        <h3 className="blog-one__title"><a href="/blog">How Technology is Changing
                          Farming</a></h3>
                        <p className="blog-one__text">Learn how organic vegetables benefit your health and the
                          planet at the same time.</p>
                      </div>
                      <div className="blog-one__read-more">
                        <a href="/blog">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Blog One Single End*/}
              </div>
            </div>
          </section>}
          {/*Blog One End */}

          {/*Do And Donts Start*/}
          <section className="do-and-donts">
            <div className="do-and-donts__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/do-and-donts-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="do-and-donts__left">
                    <div className="do-and-donts__single-title">
                      <span>{t('homeExtra.doDonts.dosTitle')}</span>
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-1">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do1')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-2">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do2')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-3">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do3')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-4">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do4')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-5">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.do5')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="do-and-donts__middle">
                    <div className="do-and-donts__img">
                      {/* Image removed as requested */}
                    </div>
                    <div className="section-title text-center sec-title-animation animation-style1">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="section shape left" />
                        </div>
                        <h6 className="section-title__tagline">{t('homeExtra.doDonts.tagline')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="section shape right" />
                        </div>
                      </div>
                      <h3
                        className="section-title__title title-animation"
                        dangerouslySetInnerHTML={{ __html: t('homeExtra.doDonts.title') }}
                      />
                    </div>
                    <p className="do-and-donts__middle-text">
                      {t('homeExtra.doDonts.intro')}
                    </p>
                    <div className="do-and-donts__btn-box">
                      <a className="thm-btn" href="/about">Grow With Us
                        <i className="fal fa-long-arrow-right" />
                        <span className="hover-btn hover-bx" />
                        <span className="hover-btn hover-bx2" />
                        <span className="hover-btn hover-bx3" />
                        <span className="hover-btn hover-bx4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="do-and-donts__right">
                    <div className="do-and-donts__single-title">
                      <span>{t('homeExtra.doDonts.dontsTitle')}</span>
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-6">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont1')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-7">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont2')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-8">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont3')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-9">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont4')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-10">
                      <div className="do-and-donts__single-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/do-and-donts-single-bg-shape.png)' }}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">{t('homeExtra.doDonts.dont5')}</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Do And Donts End*/}

          {/*Faq One Start*/}
          <section className="faq-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-5">
                  <div className="faq-one__left">
                    <div className="faq-one__contact-box">
                      <div className="faq-one__contact-box-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/faq-one-contact-box-bg-shape.png)' }}>
                      </div>
                      <div className="faq-one__contact-shape-1">
                        <img src="/assets/images/shapes/faq-one-contact-shape-1.png" alt="" />
                      </div>
                      <div className="faq-one__author-box-inner">
                        <div className="faq-one__author-shape-1">
                          <img src="/assets/images/shapes/faq-one-author-shape-1.png" alt="" />
                        </div>
                        <div className="faq-one__author-box">
                          <div className="faq-one__author-img">
                            <img src="/assets/images/resources/faq-one-author-img.png" alt="" />
                          </div>
                          <h4 className="faq-one__author-name"><a href="/about">Adam Smith</a></h4>
                          <p className="faq-one__author-sub-title">Founder</p>
                        </div>
                      </div>
                      <h3 className="faq-one__contact-title">{t('homeExtra.faq.contactTitle')}</h3>
                      <p className="faq-one__contact-text">
                        {t('homeExtra.faq.contactText')}
                      </p>
                      <div className="faq-one__contact-social">
                        <a href="/#"><span className="fab fa-facebook-f" /></a>
                        <a href="/#"><span className="fab fa-twitter" /></a>
                        <a href="/#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/#"><span className="fab fa-instagram" /></a>
                      </div>
                      <div className="faq-one__contact-number">
                        <a href="tel:+918888866031">+91 88888 66031</a>
                      </div>
                      <div className="faq-one__contact-btn">
                        <a className="thm-btn" href="/contact">Shoot a Direct Call
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="faq-one__right">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">{t('homeExtra.faq.tagline')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3
                        className="section-title__title title-animation"
                        dangerouslySetInnerHTML={{ __html: t('homeExtra.faq.title') }}
                      />
                    </div>
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q1')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a1')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q2')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a2')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q3')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a3')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q4')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a4')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>{t('homeExtra.faq.q5')}</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t('homeExtra.faq.a5')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Faq One End*/}

          {/*Testimonial One Start*/}
          <section className="testimonial-one">
            <div className="testimonial-one__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-bg.jpg)' }} />
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">{t('homeExtra.testimonials.tagline')}</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3
                  className="section-title__title title-animation"
                  dangerouslySetInnerHTML={{ __html: t('homeExtra.testimonials.title') }}
                />
              </div>
              <div className="testimonial-one__inner">
                <div className="testimonial-one__carousel swiper-container">
                  <div className="swiper-wrapper">
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t1Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t1Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t1Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t2Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t2Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t2Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t3Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t3Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t3Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-4.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t4Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t4Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t4Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-5.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t5Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t5Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t5Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="/assets/images/testimonial/testimonial-1-6.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="/testimonials">{t('homeExtra.testimonials.t6Role')}</a></h4>
                              <p className="testimonial-one__client-sub-title">{t('homeExtra.testimonials.t6Region')}</p>
                            </div>
                            <div className="testimonial-one__ratting">
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                              <span className="icon-pointed-star" />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-one__text-box">
                          <div className="testimonial-one__text-box-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-text-box-bg.jpg)' }}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="/assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text">
                            <span className="fas fa-quote-left" /> {t('homeExtra.testimonials.t6Text')} <span className="fas fa-quote-right quote-two" />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Testimonial One Single End*/}
                  </div>
                  <div className="testimonial-one__nav">
                    <div className="swiper-button-next1">
                      <i className="fas fa-arrow-left" />
                    </div>
                    <div className="swiper-button-prev1">
                      <i className="fas fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Testimonial One End*/}

          {/*Site Footer Start*/}
          <footer className="site-footer">
            <div className="site-footer__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/site-footer-bg.jpg)' }}>
            </div>
            {/* site-footer__top section removed */}
            <div className="site-footer__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__copyright">
                        <p className="site-footer__copyright-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*Site Footer End*/}
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
        {/* Search Popup removed */}
        <a href="/#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
