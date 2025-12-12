"use client";

import { useEffect } from "react";
import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function DiagnosticTestContent() {
  const t = useTranslations();
  
  useEffect(() => {
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
      <div id="preloader">
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
                        <a href="tel:+919922933999">+91-9922933999</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-email" />
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
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
                    <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer">
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
                      <li className="dropdown">
                        <a href="/shop" onClick={(e) => e.preventDefault()}>{t('nav.shop')}</a>
                        <ul className="shadow-box">
                          <li>
                            <Link href="/products">{t('nav.products')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.productDetails')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.cart')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.checkout')}</Link>
                          </li>
                          <li>
                            <Link href="/products">{t('nav.wishlist')}</Link>
                          </li>
                          <li>
                            <Link href="/contact">{t('nav.signUp')}</Link>
                          </li>
                          <li>
                            <Link href="/contact">{t('nav.login')}</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/blog" onClick={(e) => e.preventDefault()}>{t('nav.blog')}</a>
                        <ul className="shadow-box">
                          <li>
                            <Link href="/blog">{t('nav.blog')}</Link>
                          </li>
                          <li>
                            <Link href="/blog">{t('nav.blogStandard')}</Link>
                          </li>
                          <li>
                            <Link href="/blog">{t('nav.blogLeftSidebar')}</Link>
                          </li>
                          <li>
                            <Link href="/blog">{t('nav.blogRightSidebar')}</Link>
                          </li>
                          <li>
                            <Link href="/blog">{t('nav.blogDetails')}</Link>
                          </li>
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
                      <Link href="/contact">
                        <span className="far fa-users" />
                      </Link>
                    </div>
                    <div className="main-menu-two__btn-box">
                      <Link className="thm-btn" href="/contact">
                        {t('common.getAQuote')}
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
                        <a href="tel:+919922933999">+91-9922933999</a>
                        <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
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
          <div className="site-footer-two__middle">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget-two__working-box">
                    <h3 className="footer-widget-two__working-title">{t('footer.openingTime.title')}:</h3>
                    <ul className="footer-widget-two__working-hour list-unstyled">
                      <li>
                        <p>
                          {t('common.businessHoursFull')}<span>{t('common.businessHoursTime')}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          {t('footer.openingTime.saturday')}<span>{t('footer.openingTime.saturdayHours')}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          {t('footer.openingTime.sunday')}<span>{t('footer.openingTime.sundayHours')}</span>
                        </p>
                      </li>
                    </ul>
                    <div className="site-footer-two__social">
                      <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin" />
                      </a>
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
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/about">{t('footer.quickLinks.aboutUs')}</Link>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/services">{t('footer.quickLinks.portfolio')}</Link>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/faq">{t('footer.quickLinks.helpFaqs')}</Link>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/blog">{t('footer.quickLinks.blog')}</Link>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/services">{t('footer.quickLinks.services')}</Link>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <Link href="/contact">{t('footer.quickLinks.contact')}</Link>
                        </li>
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
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/products">{t('footer.ourProducts.freshProduce')}</Link>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/diagnostics-test">{t('footer.ourProducts.diagnosticsServices')}</Link>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/products">{t('footer.ourProducts.organicFarming')}</Link>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/products">{t('footer.ourProducts.cropsGrains')}</Link>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <Link href="/poultry-eggs">{t('footer.ourProducts.poultry')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget-two__logo">
                <Link href="/">
                  <img src="/assets/images/resources/logo-1.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="site-footer-two__bottom">
            <div className="container">
              <div className="site-footer-two__bottom-inner">
                <p className="site-footer-two__bottom-text">
                  © Copyright 2023 by <a href="https://ajeetseed.co.in" target="_blank" rel="noopener noreferrer">ajeetseed.co.in</a>
                </p>
                <ul className="list-unstyled site-footer-two__bottom-menu">
                  <li>
                    <Link href="/contact">{t('footer.support')}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t('footer.termsAndCondition')}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t('footer.privacyAndPolicy')}</Link>
                  </li>
                </ul>
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
              <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
            </li>
            <li>
              <i className="fas fa-phone" />
              <a href="tel:+919922933999">+91-9922933999</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://x.com/ajeetseeds" target="_blank" rel="noopener noreferrer" className="fab fa-twitter" />
              <a href="https://www.facebook.com/ajeetseedpvtltd" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square" />
              <a href="https://www.linkedin.com/company/ajeet-seeds-ltd/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin" />
              <a href="https://www.instagram.com/ajeet.seeds/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup">
        <div className="color-layer" />
        <button className="close-search">
          <span className="far fa-times fa-fw" />
        </button>
        <form method="post" action="/blog">
          <div className="form-group">
            <input type="search" name="search-field" defaultValue="" placeholder={t('common.searchHere')} required />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
      </div>
      <Link href="/diagnostics-test#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner" />
        </span>
        <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
      </Link>
    </>
  );
}

