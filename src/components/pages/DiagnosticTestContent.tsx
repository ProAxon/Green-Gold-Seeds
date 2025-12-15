"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function DiagnosticTestContent() {
  const t = useTranslations();
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    // Hide preloader after component mounts
    const hidePreloader = () => {
      setShowPreloader(false);
    };
    
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 300));
      setTimeout(hidePreloader, 1000);
    }
    
    // Custom accordion toggle functionality
    const initAccordion = () => {
      const accordionGroup = document.querySelector('[data-custom-toggle="true"]');
      if (!accordionGroup) return;

      const accordionTitles = accordionGroup.querySelectorAll('.accrodion-title');
      const handlers: Array<{ element: HTMLElement; handler: (e: Event) => void }> = [];
      
      const handleClick = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const target = e.currentTarget as HTMLElement;
        const accordion = target.closest('.accrodion') as HTMLElement | null;
        if (!accordion) return;

        const isActive = accordion.classList.contains('active');
        const content = accordion.querySelector('.accrodion-content') as HTMLElement | null;

        if (isActive) {
          // Close the accordion
          accordion.classList.remove('active');
          if (content) {
            content.style.display = 'none';
          }
        } else {
          // Close all other accordions in the group
          const allAccordions = accordionGroup.querySelectorAll('.accrodion');
          const allContents = accordionGroup.querySelectorAll('.accrodion-content') as NodeListOf<HTMLElement>;
          
          allAccordions.forEach((acc: Element) => {
            acc.classList.remove('active');
          });
          allContents.forEach((cont) => {
            cont.style.display = 'none';
          });
          
          // Open the clicked accordion
          accordion.classList.add('active');
          if (content) {
            content.style.display = 'block';
          }
        }
      };

      // Add listeners
      accordionTitles.forEach((title) => {
        const titleEl = title as HTMLElement;
        titleEl.addEventListener('click', handleClick, true); // Capture phase - runs first
        handlers.push({ element: titleEl, handler: handleClick });
      });

      return handlers;
    };

    // Run after a delay to ensure DOM is ready
    let handlers: Array<{ element: HTMLElement; handler: (e: Event) => void }> = [];
    
    const timeoutId = setTimeout(() => {
      const result = initAccordion();
      if (result) {
        handlers = result;
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      handlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler, true);
      });
    };
  }, []);

  useEffect(() => {
    // Initialize Magnific Popup for certification images
    const initCertificationPopup = () => {
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.magnificPopup) {
          $('.certification-popup').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1]
            },
            image: {
              titleSrc: function(item: any) {
                return item.el.attr('alt') || '';
              }
            }
          });
        }
      }
    };

    // Add hover effect styles
    const style = document.createElement('style');
    style.textContent = `
      .certification-item:hover .certification-overlay {
        opacity: 1 !important;
      }
      .certification-item img {
        transition: transform 0.3s;
      }
      .certification-item:hover img {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);

    // Initialize popup after a delay to ensure jQuery is loaded
    const timeoutId = setTimeout(initCertificationPopup, 500);

    return () => {
      clearTimeout(timeoutId);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <NavHighlighter />
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
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
      <div className="chat-icon">
        <button type="button" className="chat-toggler">
          <i className="fa fa-comment" />
        </button>
      </div>
      <div id="chat-popup" className="chat-popup">
        <div className="popup-inner">
          <div className="close-chat">
            <i className="fa fa-times" />
          </div>
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
                <textarea name="message" placeholder={t('contact.yourText')} required />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn">
                  {t('common.submitNow')}
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
                      <p>
                        <a href="tel:+918888866031">+91 88888 66031</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-email" />
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
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
                    <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
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
                      <Link href="/">
                        <img src="/assets/images/resources/logo-1.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu-two__main-menu-box">
                    <a href="/services#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" />
                    </a>
                    <ul className="main-menu__list">
                      <li>
                        <Link href="/">{t('nav.home')}</Link>
                      </li>
                      <li>
                        <Link href="/about">{t('nav.about')}</Link>
                      </li>
                      {/* Services dropdown commented out - temporarily disabled
                      <li className="dropdown">
                        <a href="/services" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                        <ul className="shadow-box">
                          <li>
                            <Link href="/services">{t('nav.services')}</Link>
                          </li>
                          <li>
                            <Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link>
                          </li>
                        </ul>
                      </li>
                      */}
                      <li className="dropdown">
                        <a href="/shop" onClick={(e) => e.preventDefault()}>{t('nav.products')}</a>
                        <ul className="shadow-box">
                          <li>
                            <Link href="/products">{t('nav.productCategories.allProducts')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.cottonSeeds')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.wheatSeeds')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.vegetableSeeds')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.oilseeds')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.pulses')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productCategories.cereals')}</Link>
                          </li>
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
                    <LanguageSwitcher />
                    {/* Search, Cart, and Get A Quote components removed */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu main-menu-two">
          <div className="sticky-header__content" />
        </div>
        <section className="page-header">
          <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }} />
          <div className="container">
            <div className="page-header__inner">
              <h3>{t('diagnosticsTest.title')}</h3>
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link href="/">{t('nav.home')}</Link>
                  </li>
                  <li>
                    <span className="fas fa-angle-right" />
                  </li>
                  <li>
                    <Link href="/services">{t('nav.services')}</Link>
                  </li>
                  <li>
                    <span className="fas fa-angle-right" />
                  </li>
                  <li>{t('diagnosticsTest.title')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="service-details__sidebar">
                  <div className="service-details__services-box">
                    <h3 className="service-details__services-title">{t('diagnosticsTest.ourServices')}</h3>
                    <ul className="service-details__services-list list-unstyled">
                      <li>
                        <Link href="/services">
                          {t('diagnosticsTest.diagnosticsTest')}<span className="fas fa-arrow-right" />
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="/diagnostics-test">
                          {t('diagnosticsTest.diagnosticsTestDetails')}<span className="fas fa-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="service-details__sidebar-contact">
                    <div className="service-details__sidebar-contact-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/service-details-sidebar-contact-bg.jpg)' }} />
                    <div className="service-details__sidebar-contact-content">
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <h2>
                        <a href="tel:+918888866031">+91 88888 66031</a>
                        <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
                      </h2>
                      <p>
                        {t('diagnosticsTest.ifYouNeedHelp')}
                        <br />
                        {t('diagnosticsTest.contactWithUs')}
                      </p>
                      <div className="service-details__sidebar-contact-btn-box">
                        <Link className="thm-btn" href="/contact">
                          {t('diagnosticsTest.contactUs')}
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-details__sidebar-download-box">
                    <h3 className="service-details__services-title">{t('diagnosticsTest.certifications')}</h3>
                    <div className="service-details__sidebar-single-download">
                      <ul className="clearfix list-unstyled">
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="/assets/images/quality_assurance/certificate1.png" alt={t('diagnosticsTest.certification1')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.certification1')}</Link>
                              </h2>
                              <p>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.viewCertificate')}</Link>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="/assets/images/quality_assurance/certificate1.png" className="certification-popup">
                              <span className="fas fa-plus" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="/assets/images/quality_assurance/certificate2.png" alt={t('diagnosticsTest.certification2')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.certification2')}</Link>
                              </h2>
                              <p>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.viewCertificate')}</Link>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="/assets/images/quality_assurance/certificate2.png" className="certification-popup">
                              <span className="fas fa-plus" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="/assets/images/quality_assurance/certificate3.png" alt={t('diagnosticsTest.certification3')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.certification3')}</Link>
                              </h2>
                              <p>
                                <Link href="/diagnostics-test">{t('diagnosticsTest.viewCertificate')}</Link>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="/assets/images/quality_assurance/certificate3.png" className="certification-popup">
                              <span className="fas fa-plus" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="service-details__left">
                  <div className="service-details__img">
                    <img src="/assets/images/backgrounds/004.jpg" alt="" />
                  </div>
                  <h3 className="service-details__title-1">{t('diagnosticsTest.title')}</h3>
                  <p className="service-details__text-1">
                    {t('diagnosticsTest.description1')}
                  </p>
                  <p className="service-details__text-2">
                    {t('diagnosticsTest.description2')}
                  </p>
                  <ul className="service-details__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>{t('diagnosticsTest.point1')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>{t('diagnosticsTest.point2')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>{t('diagnosticsTest.point3')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>{t('diagnosticsTest.point4')}</p>
                    </li>
                  </ul>
                  <div className="service-details__img-box">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__img-box-single">
                          <div className="service-details__img-box-img">
                            <img src="/assets/images/research_development/qaulity_assurance/005.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div className="service-details__img-box-content">
                            <div className="service-details__img-box-content-icon-and-title">
                              <div className="service-details__img-box-content-icon">
                                <span className="icon-product" />
                              </div>
                              <h3 className="service-details__img-box-content-title">{t('diagnosticsTest.modernTestingLaboratory')}</h3>
                            </div>
                            <p className="service-details__img-box-content-text">
                              {t('diagnosticsTest.modernTestingLaboratoryDesc')}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__img-box-single">
                          <div className="service-details__img-box-img">
                            <img src="/assets/images/quality_assurance/quality_4.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div className="service-details__img-box-content">
                            <div className="service-details__img-box-content-icon-and-title">
                              <div className="service-details__img-box-content-icon">
                                <span className="icon-satisfication" />
                              </div>
                              <h3 className="service-details__img-box-content-title">{t('diagnosticsTest.farmLevelMonitoring')}</h3>
                            </div>
                            <p className="service-details__img-box-content-text">
                              {t('diagnosticsTest.farmLevelMonitoringDesc')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-page__single">
                    <div className="faq-one__right">
                      <div className="accrodion-grp faq-one-accrodion diagnostic-services-accrodion" data-grp-name="diagnostic-services-accrodion" data-custom-toggle="true" style={{ marginTop: '30px' }}>
                        <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ border: '1px solid #e0e0e0', borderRadius: '0', marginBottom: '10px', background: '#ffffff' }}>
                          <div className="accrodion-title">
                            <h4>{t('diagnosticsTest.dnaServicesTitle')}</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>{t('diagnosticsTest.srNo')}</th>
                                      <th>{t('diagnosticsTest.dnaServices')}</th>
                                      <th>{t('diagnosticsTest.serviceCode')}</th>
                                      <th>{t('diagnosticsTest.details')}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>{t('diagnosticsTest.gmoTesting')}</td>
                                      <td>ASPL-SRV-006</td>
                                      <td>{t('diagnosticsTest.nablAccredited')} ({t('diagnosticsTest.checkFeasibility')})</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>{t('diagnosticsTest.hybridPurity')}</td>
                                      <td>ASPL-SRV-007</td>
                                      <td>{t('diagnosticsTest.nablAccredited')} ({t('diagnosticsTest.checkFeasibility')})</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>{t('diagnosticsTest.dnaFingerprinting')}</td>
                                      <td>ASPL-SRV-008</td>
                                      <td>{t('diagnosticsTest.nablAccredited')} ({t('diagnosticsTest.checkFeasibility')})</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>{t('diagnosticsTest.parentalLinePurity')}</td>
                                      <td>ASPL-SRV-009</td>
                                      <td>{t('diagnosticsTest.nablAccredited')} ({t('diagnosticsTest.checkFeasibility')})</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>{t('diagnosticsTest.screeningTomatoTY')}</td>
                                      <td>ASPL-SRV-010</td>
                                      <td>{t('diagnosticsTest.projectMode')}</td>
                                    </tr>
                                    <tr>
                                      <td>6</td>
                                      <td>{t('diagnosticsTest.customizedScreening')}</td>
                                      <td>ASPL-SRV-011</td>
                                      <td>{t('diagnosticsTest.projectMode')}, {t('diagnosticsTest.checkFeasibility')}</td>
                                    </tr>
                                    <tr>
                                      <td>7</td>
                                      <td>{t('diagnosticsTest.molecularMarkerAssistance')}</td>
                                      <td>ASPL-SRV-012</td>
                                      <td>{t('diagnosticsTest.projectMode')}, {t('diagnosticsTest.checkFeasibility')}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accrodion wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ border: '1px solid #e0e0e0', borderRadius: '0', marginBottom: '10px', background: '#ffffff' }}>
                          <div className="accrodion-title">
                            <h4>{t('diagnosticsTest.elisaServicesTitle')}</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>{t('diagnosticsTest.srNo')}</th>
                                      <th>{t('diagnosticsTest.elisaServices')}</th>
                                      <th>{t('diagnosticsTest.serviceCode')}</th>
                                      <th>{t('diagnosticsTest.details')}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>{t('diagnosticsTest.traitPurityCry1Ac')}</td>
                                      <td>ASPL-SRV-001</td>
                                      <td>{t('diagnosticsTest.nablAccredited')}</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>{t('diagnosticsTest.traitPurityCry2Ab')}</td>
                                      <td>ASPL-SRV-002</td>
                                      <td>{t('diagnosticsTest.nablAccredited')}</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>{t('diagnosticsTest.traitPurityCP4EPSPS')}</td>
                                      <td>ASPL-SRV-003</td>
                                      <td>{t('diagnosticsTest.nablAccredited')}</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>{t('diagnosticsTest.quantitativeElisaCry1Ac')}</td>
                                      <td>ASPL-SRV-004</td>
                                      <td>{t('diagnosticsTest.nablAccredited')}</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>{t('diagnosticsTest.quantitativeElisaCry2Ab')}</td>
                                      <td>ASPL-SRV-005</td>
                                      <td>{t('diagnosticsTest.nablAccredited')}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ border: '1px solid #e0e0e0', borderRadius: '0', marginBottom: '10px', background: '#ffffff' }}>
                          <div className="accrodion-title">
                            <h4>{t('diagnosticsTest.elisaProductsTitle')}</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>{t('diagnosticsTest.srNo')}</th>
                                      <th>{t('diagnosticsTest.elisaProducts')}</th>
                                      <th>{t('diagnosticsTest.productCode')}</th>
                                      <th>{t('diagnosticsTest.details')}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>{t('diagnosticsTest.qualitativeElisaKitCry1Ac')}</td>
                                      <td>ASPL-001</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>{t('diagnosticsTest.qualitativeElisaKitCry2Ab')}</td>
                                      <td>ASPL-002</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>{t('diagnosticsTest.qualitativeElisaKitCry1AcCry2Ab')}</td>
                                      <td>ASPL-003</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>{t('diagnosticsTest.lateralFlowCry1Ac')}</td>
                                      <td>ASPL-004</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>{t('diagnosticsTest.lateralFlowCry2Ab')}</td>
                                      <td>ASPL-005</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                    <tr>
                                      <td>6</td>
                                      <td>{t('diagnosticsTest.lateralFlowCP4EPSPS')}</td>
                                      <td>ASPL-006</td>
                                      <td>{t('diagnosticsTest.sampleKitsAvailable')}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
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
        <footer className="site-footer-two">
          <div className="site-footer-two__top">
            <div className="container">
              <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }} />
                <h3 className="footer-widget-two__newsletter-title" dangerouslySetInnerHTML={{ __html: t('footer.newsletter.title') }} />
                <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                  <div className="footer-widget-two__newsletter-form-input-box">
                    <input type="email" placeholder={t('about.enterEmail')} name="EMAIL" />
                  </div>
                  <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">
                    {t('common.subscribe')}
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
                <p className="site-footer-two__bottom-text">
                  © Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img src="/assets/images/resources/logo-1.png" width={150} alt="" />
            </Link>
          </div>
          <div className="mobile-nav__container" />
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone" />
              <a href="tel:+918888866031">+91 88888 66031</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer" className="fab fa-youtube" />
              <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square" />
              <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
      {/* Search Popup removed */}
      <Link href="/diagnostics-test#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner" />
        </span>
        <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
      </Link>
    </>
  );
}

