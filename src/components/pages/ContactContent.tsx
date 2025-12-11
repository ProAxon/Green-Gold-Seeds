export function ContactContent() {
  return (
    <>
      <div>
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />
        {/*Start Preloader*/}
        <div id="preloader">
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
              <p>Please fill out the form below and we will get back to you as soon as possible.</p>
              <form action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Text" required defaultValue={""} />
                </div>
                <div className="form-group message-btn">
                  <button type="submit" className="thm-btn"> Submit Now
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
                        <a href="/"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                      </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                      <a href="/contact#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li className="dropdown">
                          <a href="/contact#">services</a>
                          <ul className="shadow-box">
                            <li><a href="/services">Services</a></li>
                            <li><a href="/diagnostics-test">Diagnostic Test</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/contact#">Shop</a>
                          <ul className="shadow-box">
                            <li><a href="/products">Products</a></li>
                            <li><a href="product-details.html">Product Details</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="login.html">Login</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/contact#">Blog</a>
                          <ul className="shadow-box">
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="blog-standard.html">Blog Standard</a></li>
                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                            <li><a href="/blog">Blog Details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
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
                        <a href="sign-up.html"><span className="far fa-users" /></a>
                      </div>
                      <div className="main-menu-two__btn-box">
                        <a className="thm-btn" href="/contact">Get A Quote
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
            <div className="sticky-header__content" />{/* /.sticky-header__content */}
          </div>{/* /.stricky-header */}
          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>Contact </h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>Contact </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*Contact Info Start*/}
          <section className="contact-info">
            <div className="container">
              <div className="row">
                {/*Contact Two Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="contact-info__single">
                    <div className="contact-info__icon">
                      <span className="icon-call" />
                    </div>
                    <p>Contact Us</p>
                    <h3><a href="tel:+919922933999">+91-9922933999</a></h3>
                  </div>
                </div>
                {/*Contact Two Single End*/}
                {/*Contact Two Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                  <div className="contact-info__single">
                    <div className="contact-info__icon">
                      <span className="icon-email" />
                    </div>
                    <p>Mail Us</p>
                    <h3><a href="mailto:aurangabad@ajeetseed.co.in">aurangabad@ajeetseed.co.in</a></h3>
                  </div>
                </div>
                {/*Contact Two Single End*/}
                {/*Contact Two Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                  <div className="contact-info__single">
                    <div className="contact-info__icon">
                      <span className="icon-pin" />
                    </div>
                    <p>Our Office Location</p>
                    <h3>12 Green Road 05 New Yark</h3>
                  </div>
                </div>
                {/*Contact Two Single End*/}
              </div>
            </div>
          </section>
          {/*Contact Info End*/}
          {/*Contact Page Start*/}
          <section className="contact-page">
            <div className="container">
              <div className="contact-page__inner">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact-page__left">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="google-map__one" allowFullScreen />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact-page__right">
                      <h3 className="contact-page__form-title">Get A Free Quote</h3>
                      <form id="contact-form" className="contact-form-validated contact-page__form" action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/mail.php" method="POST">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-page__input-box">
                              <input type="text" name="name" placeholder="Your name" required />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-page__input-box">
                              <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-page__input-box">
                              <input type="text" placeholder="Mobile" name="number" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-page__input-box">
                              <input type="text" placeholder="Company" name="company" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-page__input-box text-message-box">
                              <textarea name="message" placeholder="Messege" defaultValue={""} />
                            </div>
                            <div className="contact-page__btn-box">
                              <button type="submit" className="thm-btn contact-page__btn" data-loading-text="Please wait...">
                                Send A Message
                                <i className="fal fa-long-arrow-right" />
                                <span className="hover-btn hover-bx" />
                                <span className="hover-btn hover-bx2" />
                                <span className="hover-btn hover-bx3" />
                                <span className="hover-btn hover-bx4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <p className="ajax-response mb-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Contact Page End*/}
          {/*Site Footer Two Start*/}
          <footer className="site-footer-two">
            <div className="site-footer-two__top">
              <div className="container">
                <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
                  </div>
                  <h3 className="footer-widget-two__newsletter-title">Subscribe To Our Newsletter To<br />
                    Get
                    Latest Update</h3>
                  <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                    <div className="footer-widget-two__newsletter-form-input-box">
                      <input type="email" placeholder="Enter email" name="EMAIL" />
                    </div>
                    <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">Subscribe
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
                          <p>Mon - Fri<span>9:00 AM - 5:00 PM</span></p>
                        </li>
                        <li>
                          <p>Saturday<span>8:00 AM - 6:00 PM</span></p>
                        </li>
                        <li>
                          <p>Sunday<span>Closed</span></p>
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
                        <h3 className="footer-widget-two__title">Quick Links</h3>
                      </div>
                      <div className="footer-widget-two__link-box">
                        <ul className="footer-widget-two__link list-unstyled">
                          <li><span className="fas fa-wheat" /><a href="/about">About Us</a></li>
                          <li><span className="fas fa-wheat" /><a href="projects.html">Portfolio</a></li>
                          <li><span className="fas fa-wheat" /><a href="/faq">Help &amp; FAQs</a></li>
                          <li><span className="fas fa-wheat" /><a href="/blog">Blog</a></li>
                          <li><span className="fas fa-wheat" /><a href="/services">Services</a></li>
                          <li><span className="fas fa-wheat" /><a href="/contact">Contact</a></li>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget-two__logo">
                  <a href="/"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="site-footer-two__bottom">
              <div className="container">
                <div className="site-footer-two__bottom-inner">
                  <p className="site-footer-two__bottom-text">Copyright@ 2025 <a href="/">Farmology</a>. All
                    Rights Reserved.</p>
                  <ul className="list-unstyled site-footer-two__bottom-menu">
                    <li><a href="/contact">Support</a></li>
                    <li><a href="/about">Terms and Condition</a></li>
                    <li><a href="/about">Privacy and Policy</a></li>
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
              <a href="/" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width={150} alt="" /></a>
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
          <form method="post" action="blog.html">
            <div className="form-group">
              <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required />
              <button type="submit"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* End Search Popup */}
        <a href="/contact#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> Go Back Top</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
