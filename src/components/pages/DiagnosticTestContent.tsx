"use client";

import { useEffect } from "react";

export function DiagnosticTestContent() {
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
            <p>Please fill out the form below and we will get back to you as soon as possible.</p>
            <form action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Text" required />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn">
                  Submit Now
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
                  <li>
                    <div className="icon">
                      <i className="icon-pin" />
                    </div>
                    <div className="text">
                      <p>4124 Cimmaron Road, CA 92806</p>
                    </div>
                  </li>
                </ul>
                <div className="main-menu-two__top-right">
                  <div className="main-menu-two__top-time">
                    <div className="main-menu-two__top-time-icon">
                      <span className="fas fa-clock" />
                    </div>
                    <p className="main-menu-two__top-text">Mon - Fri: 09:00 - 05:00</p>
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
                      <a href="index.html">
                        <img src="assets/images/resources/logo-1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="main-menu-two__main-menu-box">
                    <a href="/services#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" />
                    </a>
                    <ul className="main-menu__list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="/services">services</a>
                        <ul className="shadow-box">
                          <li>
                            <a href="/services">Services</a>
                          </li>
                          <li>
                            <a href="/diagnostics-test">Diagnostics Test</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/shop">Shop</a>
                        <ul className="shadow-box">
                          <li>
                            <a href="products.html">Products</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/blog">Blog</a>
                        <ul className="shadow-box">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu-two__right">
                    <div className="main-menu-two__search-box">
                      <span className="main-menu-two__search searcher-toggler-box fal fa-search" />
                    </div>
                    <div className="main-menu-two__cart">
                      <a href="cart.html">
                        <span className="fal fa-shopping-cart" />
                        <span className="main-menu-two__cart-count">02</span>
                      </a>
                    </div>
                    <div className="main-menu-two__user">
                      <a href="sign-up.html">
                        <span className="far fa-users" />
                      </a>
                    </div>
                    <div className="main-menu-two__btn-box">
                      <a className="thm-btn" href="contact.html">
                        Get A Quote
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
            </div>
          </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu main-menu-two">
          <div className="sticky-header__content" />
        </div>
        <section className="page-header">
          <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }} />
          <div className="container">
            <div className="page-header__inner">
              <h3>Diagnostic Test</h3>
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <span className="fas fa-angle-right" />
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <span className="fas fa-angle-right" />
                  </li>
                  <li>Diagnostic Test</li>
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
                    <h3 className="service-details__services-title">Our Services</h3>
                    <ul className="service-details__services-list list-unstyled">
                      <li>
                        <a href="/services">
                          Diagnostics Test<span className="fas fa-arrow-right" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="/diagnostics-test">
                          Diagnostics Test Details<span className="fas fa-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="service-details__sidebar-contact">
                    <div className="service-details__sidebar-contact-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/service-details-sidebar-contact-bg.jpg)' }} />
                    <div className="service-details__sidebar-contact-content">
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <h2>
                        <a href="tel:+919922933999">+91-9922933999</a>
                        <a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a>
                      </h2>
                      <p>
                        If You Need Any Help
                        <br />
                        Contact With Us
                      </p>
                      <div className="service-details__sidebar-contact-btn-box">
                        <a className="thm-btn" href="contact.html">
                          Contact Us
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="service-details__sidebar-download-box">
                    <h3 className="service-details__services-title">Certifications</h3>
                    <div className="service-details__sidebar-single-download">
                      <ul className="clearfix list-unstyled">
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="assets/images/quality_assurance/certificate1.png" alt="Certification 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <a href="/diagnostics-test">Certification 1</a>
                              </h2>
                              <p>
                                <a href="/diagnostics-test">View Certificate</a>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="assets/images/quality_assurance/certificate1.png" className="certification-popup">
                              <span className="fas fa-plus" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="assets/images/quality_assurance/certificate2.png" alt="Certification 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <a href="/diagnostics-test">Certification 2</a>
                              </h2>
                              <p>
                                <a href="/diagnostics-test">View Certificate</a>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="assets/images/quality_assurance/certificate2.png" className="certification-popup">
                              <span className="fas fa-plus" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="content-box">
                            <div className="icon" style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '5px' }}>
                              <img src="assets/images/quality_assurance/certificate3.png" alt="Certification 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="text-box">
                              <h2>
                                <a href="/diagnostics-test">Certification 3</a>
                              </h2>
                              <p>
                                <a href="/diagnostics-test">View Certificate</a>
                              </p>
                            </div>
                          </div>
                          <div className="btn-box">
                            <a href="assets/images/quality_assurance/certificate3.png" className="certification-popup">
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
                    <img src="assets/images/services/service-details-img-3.jpg" alt="" />
                  </div>
                  <h3 className="service-details__title-1">Diagnostic Test</h3>
                  <p className="service-details__text-1">
                    The success of a seed company is directly linked to consistent quality. The Quality Assurance Department is the backbone of the seed business, ensuring excellence at every stage from production to delivery.
                  </p>
                  <p className="service-details__text-2">
                    Our Quality Assurance Department operates at two levels: farm-level monitoring to ensure genetic purity during seed production, and our Seed Testing Laboratory that verifies physical purity, germination, viability/vigour, seed health, and numerous qualitative parameters. We strictly adhere to Indian Minimum Seed Certification Standards and ISTA norms, releasing seeds for marketing only after they pass all stringent testing parameters.
                  </p>
                  <ul className="service-details__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>Farm-level genetic purity monitoring during seed production</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>Comprehensive testing: Physical purity, germination, viability, and seed health</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>ISTA-certified laboratory with ultra-modern equipment and trained personnel</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-checked" />
                      </div>
                      <p>End-to-end quality control from processing to farmer delivery and field performance</p>
                    </li>
                  </ul>
                  <div className="service-details__img-box">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="service-details__img-box-single">
                          <div className="service-details__img-box-img">
                            <img src="assets/images/services/service-details-img-box-img-1.jpg" alt="" />
                          </div>
                          <div className="service-details__img-box-content">
                            <div className="service-details__img-box-content-icon-and-title">
                              <div className="service-details__img-box-content-icon">
                                <span className="icon-product" />
                              </div>
                              <h3 className="service-details__img-box-content-title">Modern Testing Laboratory</h3>
                            </div>
                            <p className="service-details__img-box-content-text">
                              Our ultra-modern Seed Testing Laboratory with advanced equipment and trained personnel ensures reliable, ISTA-certified results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="service-details__img-box-single">
                          <div className="service-details__img-box-img">
                            <img src="assets/images/services/service-details-img-box-img-2.jpg" alt="" />
                          </div>
                          <div className="service-details__img-box-content">
                            <div className="service-details__img-box-content-icon-and-title">
                              <div className="service-details__img-box-content-icon">
                                <span className="icon-satisfication" />
                              </div>
                              <h3 className="service-details__img-box-content-title">Farm-Level Monitoring</h3>
                            </div>
                            <p className="service-details__img-box-content-text">
                              Our Quality Assurance team monitors seed production at farm level to ensure genetic purity and quality standards throughout the process.
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
                            <h4>DNA Diagnostic Services (Testing) at PBRC</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr.No</th>
                                      <th>DNA Diagnostic Services</th>
                                      <th>Service Code</th>
                                      <th>Details</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>GMO testing for presence of genetic materials (End point PCR method)</td>
                                      <td>ASPL-SRV-006</td>
                                      <td>NABL accredited (Check crop list)</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Determination of hybrid purity (Molecular GOT / M-GOT)</td>
                                      <td>ASPL-SRV-007</td>
                                      <td>NABL accredited (Check crop list)</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>DNA Fingerprinting for crop plants</td>
                                      <td>ASPL-SRV-008</td>
                                      <td>NABL accredited (Check crop list)</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Parental line purity analysis using Molecular markers</td>
                                      <td>ASPL-SRV-009</td>
                                      <td>NABL accredited (Check crop list)</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>Screening of Tomato for Tomato Yellow Leaf curl virus (TY) using molecular markers</td>
                                      <td>ASPL-SRV-010</td>
                                      <td>Project mode</td>
                                    </tr>
                                    <tr>
                                      <td>6</td>
                                      <td>Customized screening of germplasm for selective traits</td>
                                      <td>ASPL-SRV-011</td>
                                      <td>Project mode, Check feasibility</td>
                                    </tr>
                                    <tr>
                                      <td>7</td>
                                      <td>Assistance in molecular marker assisted breeding</td>
                                      <td>ASPL-SRV-012</td>
                                      <td>Project mode, Check feasibility</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accrodion wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ border: '1px solid #e0e0e0', borderRadius: '0', marginBottom: '10px', background: '#ffffff' }}>
                          <div className="accrodion-title">
                            <h4>ELISA Diagnostic Services (Testing) at PBRC</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr.No</th>
                                      <th>ELISA Diagnostic Services</th>
                                      <th>Service Code</th>
                                      <th>Details</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Trait Purity (Cotton) by ELISA (Cry1Ac)</td>
                                      <td>ASPL-SRV-001</td>
                                      <td>NABL accredited</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Trait Purity (Cotton) by ELISA (Cry2Ab)</td>
                                      <td>ASPL-SRV-002</td>
                                      <td>NABL accredited</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Trait Purity (Cotton) by ELISA (CP4EPSPS)</td>
                                      <td>ASPL-SRV-003</td>
                                      <td>NABL accredited</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Quantitative ELISA for Cry1Ac</td>
                                      <td>ASPL-SRV-004</td>
                                      <td>NABL accredited</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>Quantitative ELISA for Cry2Ab</td>
                                      <td>ASPL-SRV-005</td>
                                      <td>NABL accredited</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ border: '1px solid #e0e0e0', borderRadius: '0', marginBottom: '10px', background: '#ffffff' }}>
                          <div className="accrodion-title">
                            <h4>ELISA Diagnostic Products (Testing) at PBRC</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr.No</th>
                                      <th>ELISA Diagnostic Products</th>
                                      <th>Product Code</th>
                                      <th>Details</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Qualitative ELISA kit for Cry1Ac (05 plates)</td>
                                      <td>ASPL-001</td>
                                      <td>Sample kits available</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Qualitative ELISA kit for Cry2Ab (05 plates)</td>
                                      <td>ASPL-002</td>
                                      <td>Sample kits available</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Qualitative ELISA kit for Cry1Ac/Cry2Ab (05 plates)</td>
                                      <td>ASPL-003</td>
                                      <td>Sample kits available</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Lateral Flow strip for detection of Cry1Ac (50 Strips)</td>
                                      <td>ASPL-004</td>
                                      <td>Sample kits available</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>Lateral Flow strip for detection of Cry2Ab (50 Strips)</td>
                                      <td>ASPL-005</td>
                                      <td>Sample kits available</td>
                                    </tr>
                                    <tr>
                                      <td>6</td>
                                      <td>Lateral Flow strip for detection of CP4EPSPS (50 Strips)</td>
                                      <td>ASPL-006</td>
                                      <td>Sample kits available</td>
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
                <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }} />
                <h3 className="footer-widget-two__newsletter-title">
                  Subscribe To Our Newsletter To
                  <br />
                  Get Latest Update
                </h3>
                <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                  <div className="footer-widget-two__newsletter-form-input-box">
                    <input type="email" placeholder="Enter email" name="EMAIL" />
                  </div>
                  <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">
                    Subscribe
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
                    <h3 className="footer-widget-two__working-title">opening time:</h3>
                    <ul className="footer-widget-two__working-hour list-unstyled">
                      <li>
                        <p>
                          Mon - Fri<span>9:00 AM - 5:00 PM</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Saturday<span>8:00 AM - 6:00 PM</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Sunday<span>Closed</span>
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
                      <h3 className="footer-widget-two__title">Quick Links</h3>
                    </div>
                    <div className="footer-widget-two__link-box">
                      <ul className="footer-widget-two__link list-unstyled">
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="projects.html">Portfolio</a>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="faq.html">Help &amp; FAQs</a>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <span className="fas fa-wheat" />
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget-two__column footer-widget-two__products">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Our Products</h3>
                    </div>
                    <ul className="footer-widget-two__link list-unstyled">
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="fresh-produce.html">Fresh Produce</a>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="dairy-products.html">Dairy Products</a>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="/diagnostics-test">Diagnostics Services</a>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="fresh-produce.html">Organic Farming</a>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="grains-cereals.html">Crops &amp; Grains</a>
                      </li>
                      <li>
                        <span className="fas fa-wheat" />
                        <a href="/poultry-eggs">Poultry</a>
                      </li>
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
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__instagram-img">
                          <img src="assets/images/project/footer-widget-instagram-img-2.jpg" alt="" />
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__instagram-img">
                          <img src="assets/images/project/footer-widget-instagram-img-3.jpg" alt="" />
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__instagram-img">
                          <img src="assets/images/project/footer-widget-instagram-img-4.jpg" alt="" />
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__instagram-img">
                          <img src="assets/images/project/footer-widget-instagram-img-5.jpg" alt="" />
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget-two__instagram-img">
                          <img src="assets/images/project/footer-widget-instagram-img-6.jpg" alt="" />
                          <a href="project-details.html">
                            <span className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget-two__logo">
                <a href="index.html">
                  <img src="assets/images/resources/logo-1.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="site-footer-two__bottom">
            <div className="container">
              <div className="site-footer-two__bottom-inner">
                <p className="site-footer-two__bottom-text">
                  Copyright@ 2025 <a href="index.html">Farmology</a>. All Rights Reserved.
                </p>
                <ul className="list-unstyled site-footer-two__bottom-menu">
                  <li>
                    <a href="contact.html">Support</a>
                  </li>
                  <li>
                    <a href="about.html">Terms and Condition</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy and Policy</a>
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
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/resources/logo-1.png" width={150} alt="" />
            </a>
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
        <form method="post" action="blog.html">
          <div className="form-group">
            <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
      </div>
      <a href="/diagnostics-test#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner" />
        </span>
        <span className="scroll-to-top__text"> Go Back Top</span>
      </a>
    </>
  );
}

