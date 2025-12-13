"use client";

import dynamic from 'next/dynamic';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });

export function AboutContent() {
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
                      <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" /></a>
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
                      <a href="/about#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <Link href="/">{t('nav.home')}</Link>
                        </li>
                        <li>
                          <Link href="/about">{t('nav.about')}</Link>
                        </li>
                        <li className="dropdown">
                          <a href="/about#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/services">{t('nav.services')}</Link></li>
                            <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/about#" onClick={(e) => e.preventDefault()}>{t('nav.shop')}</a>
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
                          <a href="/about#" onClick={(e) => e.preventDefault()}>{t('nav.blog')}</a>
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
<<<<<<< HEAD
            <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }}>
=======
            <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
>>>>>>> filtering
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>{t('about.pageTitle')}</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><Link href="/">{t('nav.home')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>{t('about.breadcrumb')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*About One Start */}
          <section id="our-history" className="about-one about-five">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-one__img">
                      <img src="/assets/images/backgrounds/farming_4.jpg" alt="about-one-image-1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="about-one__crop-harvest">
                        <div className="about-one__crop-harvest-icon">
                          <span className="icon-tractor" />
                        </div>
                        <h3 className="about-one__crop-harvest-title" dangerouslySetInnerHTML={{ __html: t('about.cropsHarvested') }} />
                        <div className="about-one__crop-harvest-count count-box">
                          <h3 className="count-text" data-stop="6.9" data-speed={1500} />
                          <span>M+</span>
                        </div>
                      </div>
                      <div className="about-one__img-shape-1 float-bob-y">
                        <img src="/assets/images/shapes/about-one-img-shape-1.png" alt="about-one-img-shape-1" />
                      </div>
                      <div className="about-one__shape-1 float-bob-x">
                        <img src="/assets/images/shapes/about-one-shape-1.png" alt="about-one-shape-1" />
                      </div>
                    </div>
                    <div className="about-one__field-box">
                      <div className="about-one__count-box count-box">
                        <h3 className="count-text" data-stop={600} data-speed={1500} />
                        <span>+</span>
                      </div>
                      <p className="about-one__field-text">{t('about.fieldsOfGrowth')}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-one__right">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
<<<<<<< HEAD
                          <img src="assets/images/resources/section-title-shape-1.png" alt="section-title-shape-1" />
                        </div>
                        <h6 className="section-title__tagline">Our History</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">History</h3>
                    </div>
                    <p className="about-one__text">Welcome to Ajeet Seeds Pvt. Ltd.</p>
                    <p className="about-one__text">
                      Ajeet Seeds has played a significant role in producing and supplying quality hybrid seeds
                      to farmers at affordable prices. Ajeet-11, a cotton hybrid introduced in 1992, is known
                      for its seed quality and tolerance to both biotic and abiotic stresses. Ajeet-11 was
                      followed by Ajeet-33, which offered distinguishing differences and attributes. Continued
                      research led to the development of many hybrids in crops such as Jowar, Bajra, Maize,
                      Sunflower, and Vegetables. The hybrid Bhendi Ajeet-311 was launched in 2002, followed by
                      hybrids of Chilies, Brinjal, Tomato, Bottle Gourd, Bitter Gourd, and more.
                    </p>
                    <p className="about-one__text">
                      Ajeet Seeds is the first private seed company to introduce a proprietary variety of
                      wheat, Ajeet-102. Our progress continues to be robust and dynamic. Today, our product
                      portfolio covers 22 crops and 55 different hybrid varieties.
                    </p>
                    <p className="about-one__text">
                      Understanding the pivotal role of biotechnology in the seed industry, Ajeet Seeds
                      established the Plant Biotechnology Research Center (PBRC) in 2003 at Hanumantgaon,
                      Taluka Gangapur. PBRC has been recognized as a research center by Dr. Babasaheb Ambedkar
                      Marathwada University.
                    </p>
                    <p className="about-one__text">
                      We have also built a State-of-the-Art laboratory, backed by expert scientists led by a
                      veteran biotech specialist. Our teams are developing indigenous transgenic technology to
                      accelerate progress. Ajeet Seeds remains committed to farm prosperity and is actively
                      engaged in genetic research using crop biotechnology to improve the lives of Indian
                      farmers. In line with this, we introduced three genetically modified Bt cotton hybrids in
                      the Kharif season of 2006.
                    </p>
                    <h4 className="about-one__title-1">A legacy of innovation</h4>
=======
                          <img src="/assets/images/resources/section-title-shape-1.png" alt="section-title-shape-1" />
                        </div>
                        <h6 className="section-title__tagline">{t('about.ourStory')}</h6>
                        <div className="section-title__shape-1">
                          <img src="/assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">{t('about.growingWithFarmers')}</h3>
                    </div>
                    <p className="about-one__text">
                      {t('about.storyText1')}
                    </p>
                    <p className="about-one__text">
                      {t('about.storyText2')}
                    </p>
                    <h4 className="about-one__title-1">{t('about.highlightsAtGlance')}</h4>
>>>>>>> filtering
                    <div className="about-one__points-box-and-since">
                      <ul className="about-one__points list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
<<<<<<< HEAD
                          <p>Ajeet-11 &amp; Ajeet-33 set the benchmark<br />for resilient cotton hybrids.</p>
=======
                          <p dangerouslySetInnerHTML={{ __html: t('about.highlight1') }} />
>>>>>>> filtering
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
<<<<<<< HEAD
                          <p>India's first private wheat variety<br />Ajeet-102 pioneered diversification.</p>
=======
                          <p dangerouslySetInnerHTML={{ __html: t('about.highlight2') }} />
>>>>>>> filtering
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
<<<<<<< HEAD
                          <p>22 crops &amp; 55 hybrids support<br />farm prosperity nationwide.</p>
=======
                          <p dangerouslySetInnerHTML={{ __html: t('about.highlight3') }} />
>>>>>>> filtering
                        </li>
                      </ul>
                      <div className="about-one__since-box">
                        <div className="about-one__since-icon">
                          <span className="icon-harvester" />
                        </div>
<<<<<<< HEAD
                        <h5 className="about-one__since-title">Progress since</h5>
=======
                        <h5 className="about-one__since-title">{t('about.progressSince')}</h5>
>>>>>>> filtering
                        <h4 className="about-one__since-year">1992</h4>
                      </div>
                    </div>
                    <div className="about-one__btn-and-video">
                      <div className="about-one__btn-box">
<<<<<<< HEAD
                        <a className="thm-btn" href="/about#our-history">Explore Our Journey
=======
                        <Link className="thm-btn" href="/about#our-history">{t('common.exploreOurJourney')}
>>>>>>> filtering
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </Link>
                      </div>
                      <div className="about-one__video-box">
                        <div className="about-one__video-link">
                          <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                            <div className="about-one__video-icon">
                              <span className="fas fa-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                        <p className="about-one__video-text">
                          {t('about.researchInAction')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About One End */}
          {/*Vision & Mission Start */}
          {/* <section className="services-three leaders-overview">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 col-xl-5 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1200ms">
                  <div className="leaders-overview__card">
                    <h4 className="leaders-overview__card-title">Our Vision</h4>
                    <p className="leaders-overview__card-text">
                      To acquire and apply the latest technologies to enhance crop productivity.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-xl-5 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1200ms">
                  <div className="leaders-overview__card">
                    <h4 className="leaders-overview__card-title">Our Mission</h4>
                    <p className="leaders-overview__card-text">
                      To provide high-quality seeds with the right genotype, at the right time, and at an affordable price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/*Vision & Mission End */}
          {/*Author One Start */}
          <section className="author-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-3">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">{t('about.ourVision')}</h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>{t('about.visionText')}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="author-one__img-box">
                    <div className="author-one__img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="/assets/images/board_member/sameer-mulay.jpg" alt="author-one-img-1" style={{ borderRadius: '20px', width: '352px', height: '426px', objectFit: 'cover' }} />
                    </div>
                    <div className="author-one__text-box">
                      <p className="author-one__text" dangerouslySetInnerHTML={{ __html: t('home.author.text') }} />
                      <div className="author-one__info">
                        <h4>{t('home.author.name')}</h4>
                        <p>{t('home.author.position')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">{t('about.ourMission')}</h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>{t('about.missionText')}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Author One End */}
          {/*Services Two Start */}
          <section className="services-two departments-section">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">{t('about.whatWereDoing')}</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">{t('about.ourDepartments')}</h3>
              </div>
              <div className="services-two__inner">
                <div className="services-two__carousel owl-theme owl-carousel">
                  {/*Services Two Single Start*/}
                  <div className="item">
                    <div className="services-two__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="services-two__img-box" style={{ height: '280px', overflow: 'hidden' }}>
                        <div className="services-two__img" style={{ width: '100%', height: '100%' }}>
                          <img src="/assets/images/backgrounds/cotton-field-1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="services-two__content">
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
=======
                      <div className="services-two__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
>>>>>>> filtering
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-plant-1" />
                        </div>
                        <h3 className="services-two__title"><Link href="/services">{t('about.rAndD')}</Link></h3>
                        <p className="services-two__text">{t('about.rAndDDesc')}</p>
                        <div className="services-two__read-more" style={{ marginTop: 'auto' }}>
                          <Link href="/services">{t('common.learnMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
                    <div className="services-two__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="services-two__img-box" style={{ height: '280px', overflow: 'hidden' }}>
                        <div className="services-two__img" style={{ width: '100%', height: '100%' }}>
                          <img src="/assets/images/backgrounds/cotton-field-2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="services-two__content">
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
=======
                      <div className="services-two__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
>>>>>>> filtering
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-harvester-1" />
                        </div>
                        <h3 className="services-two__title"><Link href="/services">{t('about.production')}</Link></h3>
                        <p className="services-two__text">{t('about.productionDesc')}</p>
                        <div className="services-two__read-more" style={{ marginTop: 'auto' }}>
                          <Link href="/services">{t('common.learnMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
                    <div className="services-two__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="services-two__img-box" style={{ height: '280px', overflow: 'hidden' }}>
                        <div className="services-two__img" style={{ width: '100%', height: '100%' }}>
                          <img src="/assets/images/backgrounds/quality-control-inspection.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="services-two__content">
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
=======
                      <div className="services-two__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
>>>>>>> filtering
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-precision-agriculture" />
                        </div>
                        <h3 className="services-two__title"><Link href="/services">{t('about.qualityControl')}</Link></h3>
                        <p className="services-two__text">{t('about.qualityControlDesc')}</p>
                        <div className="services-two__read-more" style={{ marginTop: 'auto' }}>
                          <Link href="/services">{t('common.learnMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
                    <div className="services-two__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="services-two__img-box" style={{ height: '280px', overflow: 'hidden' }}>
                        <div className="services-two__img" style={{ width: '100%', height: '100%' }}>
                          <img src="/assets/images/backgrounds/lab-equipment.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="services-two__content">
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
=======
                      <div className="services-two__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
>>>>>>> filtering
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-supply-chain" />
                        </div>
                        <h3 className="services-two__title"><Link href="/services">{t('about.processing')}</Link></h3>
                        <p className="services-two__text">{t('about.processingDesc')}</p>
                        <div className="services-two__read-more" style={{ marginTop: 'auto' }}>
                          <Link href="/services">{t('common.learnMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
                    <div className="services-two__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="services-two__img-box" style={{ height: '280px', overflow: 'hidden' }}>
                        <div className="services-two__img" style={{ width: '100%', height: '100%' }}>
                          <img src="/assets/images/backgrounds/marketing.jpeg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="services-two__content">
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
=======
                      <div className="services-two__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/services-two-content-bg-shape.png)' }}>
>>>>>>> filtering
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-farming" />
                        </div>
                        <h3 className="services-two__title"><Link href="/services">{t('about.marketing')}</Link></h3>
                        <p className="services-two__text">{t('about.marketingDesc')}</p>
                        <div className="services-two__read-more" style={{ marginTop: 'auto' }}>
                          <Link href="/services">{t('common.learnMore')}<span className="fas fa-arrow-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                </div>
              </div>
            </div>
          </section>
          {/*Services Two End */}
          {/*Team One Start */}
          <section id="team" className="team-one about-page-team">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">{t('about.professionalPeople')}</h6>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">{t('about.boardOfDirectors')}</h3>
              </div>
              <div className="row">
                {/*Team One Single Start*/}
                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="/assets/images/board_member/padmakar_mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div className="team-one__content">
<<<<<<< HEAD
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
=======
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/team-one-content-bg-shape.png)' }}>
>>>>>>> filtering
                      </div>
                      <h3 className="team-one__title"><Link href="/about#team">Padmakar Mulay</Link></h3>
                      <p className="team-one__sub-title">{t('about.chairman')}</p>
                      <div className="team-one__social">
                        <a href="/about#"><span className="fab fa-facebook-f" /></a>
                        <a href="/about#"><span className="fab fa-twitter" /></a>
                        <a href="/about#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/about#"><span className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="/assets/images/board_member/sameer-mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div className="team-one__content">
<<<<<<< HEAD
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
=======
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/team-one-content-bg-shape.png)' }}>
>>>>>>> filtering
                      </div>
                      <h3 className="team-one__title"><Link href="/about#team">Sameer Mulay</Link></h3>
                      <p className="team-one__sub-title">{t('about.managingDirector')}</p>
                      <div className="team-one__social">
                        <a href="/about#"><span className="fab fa-facebook-f" /></a>
                        <a href="/about#"><span className="fab fa-twitter" /></a>
                        <a href="/about#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/about#"><span className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="/assets/images/board_member/ranjeet-mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div className="team-one__content">
<<<<<<< HEAD
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
=======
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(/assets/images/shapes/team-one-content-bg-shape.png)' }}>
>>>>>>> filtering
                      </div>
                      <h3 className="team-one__title"><Link href="/about#team">Ranjeet Mulay</Link></h3>
                      <p className="team-one__sub-title">{t('about.director')}</p>
                      <div className="team-one__social">
                        <a href="/about#"><span className="fab fa-facebook-f" /></a>
                        <a href="/about#"><span className="fab fa-twitter" /></a>
                        <a href="/about#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/about#"><span className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Team One Single End*/}
              </div>
            </div>
          </section>
          {/*Team One End */}
          {/*Closing Statement Start*/}
          <section className="cta-two closing-message">
            <div className="container">
              <div className="cta-two__inner text-center">
                <h3>{t('home.banner.title')}</h3>
                <p>{t('about.closingStatement')}</p>
              </div>
            </div>
          </section>
          {/*Closing Statement End*/}

          {/*Site Footer Two Start*/}
          <footer className="site-footer-two">
            <div className="site-footer-two__top">
              <div className="container">
                <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
<<<<<<< HEAD
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
=======
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
>>>>>>> filtering
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
<<<<<<< HEAD
                        <li><span className="fas fa-wheat" /><a href="fresh-produce.html">Fresh
                          Produce</a></li>
                        <li><span className="fas fa-wheat" /><a href="dairy-products.html">Dairy
                          Products</a>
                        </li>
                        <li><span className="fas fa-wheat" /><a href="livestock.html">Livestock
                          Products</a></li>
                        <li><span className="fas fa-wheat" /><a href="fresh-produce.html">Organic
                          Farming</a></li>
                        <li><span className="fas fa-wheat" /><a href="grains-cereals.html">Crops &amp;
                          Grains</a></li>
                        <li><span className="fas fa-wheat" /><a href="livestock.html">Poultry</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="footer-widget-two__instagram">
                      <div className="footer-widget-two__title-box">
                        <h3 className="footer-widget-two__title">instagram</h3>
                      </div>
                      <ul className="footer-widget-two__instagram-list list-unstyled clearfix">
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-1.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-2.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-3.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-4.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-5.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-two__instagram-img">
                            <img src="assets/images/project/footer-widget-instagram-img-6.jpg" alt="" />
                            <a href="project-details.html"><span className="fab fa-instagram" /></a>
                          </div>
=======
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.freshProduce')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link>
>>>>>>> filtering
                        </li>
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
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder={t('common.searchHere')}
                required
              />
              <button type="submit"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* End Search Popup */}
        <Link href="/about#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </Link>
        {/* template js */}
      </div>

    </>
  );
}
