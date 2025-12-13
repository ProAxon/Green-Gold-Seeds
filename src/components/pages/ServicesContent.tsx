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
<<<<<<< HEAD
            <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }}>
=======
            <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
>>>>>>> filtering
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
<<<<<<< HEAD
              <div className="row">
                <div className="col-xl-12">
                  <div className="about-one__right">

                    <div className="section-title text-left">
                      <h3 className="section-title__title">Diagnostics Test</h3>
                      <span className="section-title__tagline">Home Diagnostics Test</span>
                    </div>

                    <p className="about-one__text">The Success of the seed company is correlated with the consistency in the quality. Obviously, Quality Assurance Department is the backbone of the seed business.</p>
                    <p className="about-one__text">Quality Assurance Department functions at farm level to ensure the genetic purity during seed production and second wing i.e., Seed Testing Laboratory ensures the Physical purity, Germination, Viability/Vigour, Seed Health and the ‘n’ number of Qualitative parameters.</p>
                    <p className="about-one__text">We are strictly adhered to maintain the Indian Minimum Seed Certification Standards and also ISTA norms. Once the samples goes through stringent testing activities and qualifies in all the parameters then only released for the marketing.</p>
                    <p className="about-one__text">A well established Seed Testing Laboratory with ultra-modern equipments with all facilities, trained and dedicated manpower are the strength of the Quality Assurance Department of Ajeet Seeds Private Limited. To maintain the sanctity of seed quality, obviously Quality Assurance Department is working round the clock with due emphasis on Physical Purity, Seed Health, Germination, Viability/Vigour tests, Genetic Purity and Trait Purity as per ISTA standards.</p>
                    <p className="about-one__text">Quality Assurance not only assures the quality of the seeds but also assures the quality during Processing, Treatment, Packing, Logistics and finally the dispatches to the market till it goes in the hands of the end user i.e., FARMER. It also ensures the performance in the farmer’s fields by visiting randomly to Re-reassurance and farmer’s satisfaction.</p>

                    <br />
                    <div className="section-title text-left">
                      <h3 className="section-title__title">Ajeet Seeds</h3>
                    </div>
                    <p className="about-one__text"><strong>Plant Biotechnology Research Centre (PBRC), Ajeet Seeds Pvt. Ltd.</strong></p>
                    <p className="about-one__text">24 Jan, 2022<br />NABL (ISO/IEC 17025:2017) accredited Laboratory (Conformity Assessment Body) since 2022</p>
                    <p className="about-one__text">10 May, 2022<br />Department of Scientific and Industrial Research (DSIR) recognized Laboratory since 2000</p>
                    <p className="about-one__text">27 July, 2021<br />Dr. Babasaheb Ambedkar Marathwada University’s Ph.D. research Laboratory</p>

                    <br />
                    <div className="section-title text-left">
                      <h3 className="section-title__title">Research Centre</h3>
                      <span className="section-title__tagline">Ajeet Seeds Pvt. Ltd.</span>
                    </div>
                    <p className="about-one__text"><strong>Research and Development (Crop Improvement for Biotic and Abiotic Stresses)</strong></p>
                    <p className="about-one__text">ASPL has developed a state-of-the-art facility for research in biotechnology for crop improvement.</p>

                    <ul className="about-one__points list-unstyled">
                      <li>
                        <div className="icon"><span className="fa fa-check" /></div>
                        <div className="text"><p>Protein Diagnostic Laboratory (ELISA/LFS)</p></div>
                      </li>
                      <li>
                        <div className="icon"><span className="fa fa-check" /></div>
                        <div className="text"><p>DNA Diagnostic Laboratory (M-GOT, Hybrid Purity, Parental Line purity, DNA Fingerprinting)</p></div>
                      </li>
                    </ul>

                    <br />
                    <div className="section-title text-left">
                      <h3 className="section-title__title">Testing Services</h3>
                    </div>
                    <p className="about-one__text">DNA Testing services at PBRC include DNA based Hybrid purity (M-GOT), Line purity, DNA Fingerprinting etc.</p>
                    <p className="about-one__text">ELISA Testing services at PBRC include detection of Bt-genes (Cry1Ac, Cry2Ab/Aa, VIP3a), RRF- CP4EPSPS using Double antibody Sandwich ELISA (DAS-ELISA) and Lateral Flow Strips (LFS)</p>

                    <br />
                    <div className="section-title text-left">
                      <h3 className="section-title__title">Quality Policy</h3>
                      <span className="section-title__tagline">and Objectives</span>
                    </div>
                    <h4 className="about-one__title-1">NABL Scope of Accreditation</h4>
                    <h4 className="about-one__title-1">Diagnostic Testing Services</h4>

                    <br />
                    <h5 className="about-one__text"><strong>1. DNA Diagnostic Services (Testing) at PBRC</strong></h5>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>DNA Diagnostic Services</th>
                            <th>Service Code</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>GMO testing for presence of genetic materials (End point PCR method)</td><td>ASPL-SRV-006</td><td>NABL accredited (Check crop list)</td></tr>
                          <tr><td>2</td><td>Determination of hybrid purity (Molecular GOT / M-GOT)</td><td>ASPL-SRV-007</td><td>NABL accredited (Check crop list)</td></tr>
                          <tr><td>3</td><td>DNA Fingerprinting for crop plants</td><td>ASPL-SRV-008</td><td>NABL accredited (Check crop list)</td></tr>
                          <tr><td>4</td><td>Parental line purity analysis using Molecular markers</td><td>ASPL-SRV-009</td><td>NABL accredited (Check crop list)</td></tr>
                          <tr><td>5</td><td>Screening of Tomato for Tomato Yellow Leaf curl virus) (TY) using molecular markers</td><td>ASPL-SRV-010</td><td>Project mode</td></tr>
                          <tr><td>6</td><td>Customized screening of germplasm for selective traits</td><td>ASPL-SRV-011</td><td>Project mode, Check feasibility</td></tr>
                          <tr><td>7</td><td>Assistance in molecular marker assisted breeding</td><td>ASPL-SRV-012</td><td>Project mode, Check feasibility</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <br />
                    <h5 className="about-one__text"><strong>2. ELISA Diagnostic Services (Testing) at PBRC</strong></h5>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>ELISA Diagnostic Services</th>
                            <th>Service Code</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>Trait Purity (Cotton) by ELISA (Cry1Ac)</td><td>ASPL-SRV-001</td><td>NABL accredited</td></tr>
                          <tr><td>2</td><td>Trait Purity (Cotton) by ELISA (Cry2Ab)</td><td>ASPL-SRV-002</td><td>NABL accredited</td></tr>
                          <tr><td>3</td><td>Trait Purity (Cotton) by ELISA (CP4EPSPS)</td><td>ASPL-SRV-003</td><td>NABL accredited</td></tr>
                          <tr><td>4</td><td>Quantitative ELISA for Cry1Ac</td><td>ASPL-SRV-004</td><td>NABL accredited</td></tr>
                          <tr><td>5</td><td>Quantitative ELISA for Cry2Ab</td><td>ASPL-SRV-005</td><td>NABL accredited</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <br />
                    <h5 className="about-one__text"><strong>3. ELISA Diagnostic Products</strong></h5>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>ELISA Diagnostic Products</th>
                            <th>Product Code</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>Qualitative ELISA kit for Cry1Ac (05 plates)</td><td>ASPL-001</td><td>Sample kits available</td></tr>
                          <tr><td>2</td><td>Qualitative ELISA kit for Cry2Ab (05 plates)</td><td>ASPL-002</td><td>Sample kits available</td></tr>
                          <tr><td>3</td><td>Qualitative ELISA kit for Cry1Ac/Cry2Ab (05 plates)</td><td>ASPL-003</td><td>Sample kits available</td></tr>
                          <tr><td>4</td><td>Lateral Flow strip for detection of Cry1Ac (50 Strips)</td><td>ASPL-004</td><td>Sample kits available</td></tr>
                          <tr><td>5</td><td>Lateral Flow strip for detection of Cry2Ab (50 Strips)</td><td>ASPL-005</td><td>Sample kits available</td></tr>
                          <tr><td>6</td><td>Lateral Flow strip for detection of CP4EPSPS (50 Strips)</td><td>ASPL-006</td><td>Sample kits available</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="section-title text-left">
                          <h3 className="section-title__title">Address</h3>
                        </div>
                        <p className="about-one__text">
                          <a href="tel:+919922933999">+91-9922933999</a><br />
                          <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a><br />
                          Gut No. 233, Chitegaon, Tq. Paithan, Dist. Chhatrapati Sambhaji Nagar (Aurangabad) - 431105 (Maharashtra)
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="section-title text-left">
                          <h3 className="section-title__title">PM Group</h3>
                        </div>
                        <ul className="about-one__points list-unstyled">
                          <li><div className="icon"><span className="fa fa-check" /></div><div className="text"><p>Gangamai Industries & Construction Ltd.</p></div></li>
                          <li><div className="icon"><span className="fa fa-check" /></div><div className="text"><p>Arya Hybrid Seeds Ltd.</p></div></li>
                          <li><div className="icon"><span className="fa fa-check" /></div><div className="text"><p>ASPL Nature Pure Pvt. Ltd.</p></div></li>
                          <li><div className="icon"><span className="fa fa-check" /></div><div className="text"><p>Omkara Techno Infra Pvt. Ltd.</p></div></li>
                          <li><div className="icon"><span className="fa fa-check" /></div><div className="text"><p>C.S.M.S.S</p></div></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
=======
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
>>>>>>> filtering
              </div>
            </div>
          </section>
          {/*Services Page End*/}
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
                        </li>
=======
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.freshProduce')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.livestockProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.organicFarming')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.cropsGrains')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.poultry')}</Link></li>
>>>>>>> filtering
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

