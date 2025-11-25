export function HomeContent() {
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
                      <a href="/"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                    </div>
                    <div className="content-box">
                      <h4>About Us</h4>
                      <div className="inner-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                          roots in a piece of classical Latin literature from 45 BC, making it over
                          2000 years old.
                        </p>
                      </div>
                    </div>
                    <div className="form-inner">
                      <h4>Get a free quote</h4>
                      <form action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <textarea name="message" placeholder="Message..." required defaultValue={""} />
                        </div>
                        <div className="form-group message-btn">
                          <button className="thm-btn" data-text="Submit Now +" type="submit" data-loading-text="Please wait...">Submit Now
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
                    <div className="sidebar-contact-info">
                      <h4>Contact Info</h4>
                      <ul className="list-unstyled">
                        <li>
                          <span className="icon-pin" /> 88 broklyn street, New York
                        </li>
                        <li>
                          <span className="icon-call" />
                          <a href="tel:123456789">+1 555-9990-153</a>
                        </li>
                        <li>
                          <span className="icon-email" />
                          <a href="mailto:info@example.com">info@example.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="thm-social-link1">
                      <ul className="social-box list-unstyled">
                        <li>
                          <a href="/#"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                        </li>
                        <li>
                          <a href="/#"><i className="fab fa-twitter" aria-hidden="true" /></a>
                        </li>
                        <li>
                          <a href="/#"><i className="fab fa-pinterest-p" aria-hidden="true" /></a>
                        </li>
                        <li>
                          <a href="/#"><i className="fab fa-instagram" aria-hidden="true" /></a>
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
                      <p><a href="mailto:info@Farmology24.com">info@Farmology25.com</a>
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
                <p className="main-menu__top-welcome-text">Welcome to Farmology
                  our Best Farming HTML5 Template</p>
                <div className="main-menu__top-right">
                  <p className="main-menu__social-title">Follow Us On:</p>
                  <div className="main-menu__social">
                    <a href="/#"><i className="fab fa-twitter" /></a>
                    <a href="/#"><i className="fab fa-facebook-f" /></a>
                    <a href="/#"><i className="fab fa-pinterest-p" /></a>
                    <a href="/#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <nav className="main-menu">
              <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <a href="/"><img src="assets/images/resources/logo-2.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a href="/#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                    <ul className="main-menu__list">
                      <li className="dropdown megamenu">
                        <a href="/#">Home </a>
                        <ul>
                          <li>
                            <section className="home-showcase">
                              <div className="container">
                                <div className="home-showcase__inner">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img src="assets/images/home-showcase/home-showcase-1-1.jpg" alt="" />
                                          <div className="home-showcase__buttons">
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              Multi Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              One Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                          </div>
                                          {/* /.home-showcase__buttons */}
                                        </div>{/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">Home
                                          Page
                                          01</h3>
                                        {/* /.home-showcase__title */}
                                      </div>{/* /.home-showcase__item */}
                                    </div>{/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img src="assets/images/home-showcase/home-showcase-1-2.jpg" alt="" />
                                          <div className="home-showcase__buttons">
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              Multi Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              One Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                          </div>
                                          {/* /.home-showcase__buttons */}
                                        </div>{/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">Home
                                          Page
                                          02
                                        </h3>{/* /.home-showcase__title */}
                                      </div>{/* /.home-showcase__item */}
                                    </div>{/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img src="assets/images/home-showcase/home-showcase-1-3.jpg" alt="" />
                                          <div className="home-showcase__buttons">
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              Multi Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              One Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                          </div>
                                          {/* /.home-showcase__buttons */}
                                        </div>{/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">Home
                                          Page
                                          03
                                        </h3>{/* /.home-showcase__title */}
                                      </div>{/* /.home-showcase__item */}
                                    </div>{/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img src="assets/images/home-showcase/home-showcase-1-4.jpg" alt="" />
                                          <div className="home-showcase__buttons">
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              Multi Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                            <a href="/" className="thm-btn home-showcase__buttons__item">
                                              One Page
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                          </div>
                                          {/* /.home-showcase__buttons */}
                                        </div>{/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">Home
                                          Page
                                          04
                                        </h3>{/* /.home-showcase__title */}
                                      </div>{/* /.home-showcase__item */}
                                    </div>{/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__item">
                                        <div className="home-showcase__image">
                                          <img src="assets/images/home-showcase/home-showcase-1-5.jpg" alt="" />
                                          <div className="home-showcase__buttons">
                                            <a href="index-dark.html" className="thm-btn home-showcase__buttons__item">
                                              Dark Home
                                              <i className="fal fa-long-arrow-right" />
                                              <span className="hover-btn hover-bx" />
                                              <span className="hover-btn hover-bx2" />
                                              <span className="hover-btn hover-bx3" />
                                              <span className="hover-btn hover-bx4" />
                                            </a>
                                          </div>
                                          {/* /.home-showcase__buttons */}
                                        </div>{/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">Dark Home
                                        </h3>{/* /.home-showcase__title */}
                                      </div>{/* /.home-showcase__item */}
                                    </div>{/* /.col-lg-3 */}
                                  </div>{/* /.row */}
                                </div>{/* /.home-showcase__inner */}
                              </div>{/* /.container */}
                            </section>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/#">About</a>
                        <ul className="shadow-box">
                          <li><a href="/about">About</a></li>
                          <li><a href="history.html">History</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/#">Pages</a>
                        <ul className="shadow-box">
                          <li><a href="team.html">Team</a></li>
                          <li><a href="team-details.html">Team Details</a></li>
                          <li><a href="projects.html">Projects</a></li>
                          <li><a href="project-details.html">Project Details</a></li>
                          <li><a href="testimonials.html">Testimonials</a></li>
                          <li><a href="pricing.html">Pricing</a></li>
                          <li><a href="/faq">FAQs</a></li>
                          <li><a href="404.html">404 Error</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/#">services</a>
                        <ul className="shadow-box">
                          <li><a href="/services">Services</a></li>
                          <li><a href="fresh-produce.html">Fresh Produce</a></li>
                          <li><a href="dairy-products.html">Dairy Products</a></li>
                          <li><a href="livestock.html">Livestock</a></li>
                          <li><a href="poultry-eggs.html">Poultry &amp; Eggs</a></li>
                          <li><a href="grains-cereals.html">Grains &amp; Cereals</a></li>
                          <li><a href="herbs-spices.html">Herbs &amp; Spices</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/#">Shop</a>
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
                        <a href="/#">Blog</a>
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
                  <div className="main-menu__right">
                    <div className="main-menu__call">
                      <div className="main-menu__call-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="main-menu__call-content">
                        <p className="main-menu__call-sub-title">Call Anytime</p>
                        <h5 className="main-menu__call-number"><a href="tel:9288006780">+92 ( 8800 ) -
                            6780</a></h5>
                      </div>
                    </div>
                    <div className="main-menu__search-cart-box">
                      <div className="main-menu__search-cart-box">
                        <div className="main-menu__search-box">
                          <a href="/#" className="main-menu__search searcher-toggler-box fal fa-search" />
                        </div>
                        <div className="main-menu__cart-box">
                          <a href="cart.html" className="main-menu__cart">
                            <span className="fal fa-shopping-cart" />
                            <span className="main-menu__cart-count">02</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="main-menu__nav-sidebar-icon">
                      <a className="navSidebar-button" href="/#">
                        <span className="icon-dots-menu-one" />
                        <span className="icon-dots-menu-two" />
                        <span className="icon-dots-menu-three" />
                      </a>
                    </div>
                    <div className="main-menu__btn-box">
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
            </nav>
          </header>
          <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content" />{/* /.sticky-header__content */}
          </div>{/* /.stricky-header */}
          {/* Banner One Start */}
          <section className="banner-one">
            <div className="banner-one__shape-bg" style={{backgroundImage: 'url(assets/images/shapes/banner-one-shape-bg.png)'}}>
            </div>
            <div className="banner-one__shape-4 float-bob-x">
              <img src="assets/images/shapes/banner-one-shape-4.png" alt="" />
            </div>
            <div className="banner-one__shape-5 float-bob-y">
              <img src="assets/images/shapes/banner-one-shape-5.png" alt="" />
            </div>
            <div className="banner-one__shape-6">
              <img src="assets/images/shapes/banner-one-shape-6.png" alt="" />
            </div>
            <div className="banner-one__shape-7 img-bounce">
              <img src="assets/images/shapes/banner-one-shape-7.png" alt="" />
            </div>
            <div className="banner-one__shape-8 float-bob-y">
              <img src="assets/images/shapes/banner-one-shape-8.png" alt="" />
            </div>
            <div className="container">
              <div className="banner-one__inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="banner-one__left">
                      <div className="banner-one__title-box">
                        <div className="banner-one__sub-title">
                          <p>100% Natural &amp; Fresh</p>
                        </div>
                        <h2 className="banner-one__title">Choose A Better Life With <span>Organic Farming</span>
                        </h2>
                      </div>
                      <p className="banner-one__text">From farm to table, we deliver pure organic products that
                        ensure a sustainable lifestyle and better tomorrow.</p>
                      <div className="banner-one__thm-and-other-btn-box">
                        <div className="banner-one__btn-box">
                          <a className="thm-btn" href="/about">Discover More
                            <i className="fal fa-long-arrow-right" />
                            <span className="hover-btn hover-bx" />
                            <span className="hover-btn hover-bx2" />
                            <span className="hover-btn hover-bx3" />
                            <span className="hover-btn hover-bx4" />
                          </a>
                        </div>
                        <div className="banner-one__video-link">
                          <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                            <div className="banner-one__video-icon">
                              <span className="fa fa-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                          <h4 className="banner-one__video-title">Watch Video</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="banner-one__right">
                      <div className="banner-one__img-box">
                        <div className="banner-one__img">
                          <img src="assets/images/resources/banner-one-img-1.png" alt="" />
                          <div className="banner-one__img-shape-box rotate-me">
                            <div className="banner-one__img-shape-1">
                              <div className="banner-one__img-shape-2" />
                            </div>
                            <div className="banner-one__shape-1">
                              <img src="assets/images/shapes/banner-one-shape-1.png" alt="" />
                            </div>
                            <div className="banner-one__shape-2 rotate-me">
                              <img src="assets/images/shapes/banner-one-shape-2.png" alt="" />
                            </div>
                            <div className="banner-one__shape-3">
                              <img src="assets/images/shapes/banner-one-shape-3.png" alt="" />
                            </div>
                          </div>
                          <div className="banner-one__discount-box">
                            <h3>50%</h3>
                            <p>Discount</p>
                          </div>
                          <div className="banner-one__client-review">
                            <div className="banner-one__client-review-img">
                              <img src="assets/images/resources/banner-one-review-img.jpg" alt="" />
                            </div>
                            <div className="banner-one__client-review-text">
                              <h4>Review</h4>
                            </div>
                            <div className="banner-one__client-review-client-info">
                              <p className="banner-one__client-review-client-name">Alisa Olivia/</p>
                              <div className="banner-one__client-review-star">
                                <span className="icon-pointed-star" />
                                <span className="icon-pointed-star" />
                                <span className="icon-pointed-star" />
                                <span className="icon-pointed-star" />
                              </div>
                            </div>
                          </div>
                          <div className="banner-one__happy-customer">
                            <ul className="list-unstyled banner-one__happy-customer-list">
                              <li>
                                <div className="banner-one__happy-customer-img">
                                  <img src="assets/images/resources/banner-one-happy-customer-img-1-1.jpg" alt="" />
                                </div>
                              </li>
                              <li>
                                <div className="banner-one__happy-customer-img">
                                  <img src="assets/images/resources/banner-one-happy-customer-img-1-2.jpg" alt="" />
                                </div>
                              </li>
                              <li>
                                <div className="banner-one__happy-customer-img">
                                  <div className="banner-one__happy-customer-plus">
                                    <i className="fas fa-plus" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="banner-one__happy-customer-count-box">
                              <div className="banner-one__happy-customer-count-box-inner count-box">
                                <p className="count-text" data-stop={2000} data-speed={3000}>00</p>
                                <span>+</span>
                              </div>
                              <p className="banner-one__happy-customer-text">Happy Customers</p>
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
          <section className="feature-one">
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
                      <div className="feature-one__single-two-bg" style={{backgroundImage: 'url(assets/images/backgrounds/feature-one-single-two-bg.jpg)'}}>
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
                      <img src="assets/images/shapes/feature-one-single-two-shape-1.png" alt="feature-one-single-two-shape-1" />
                    </div>
                    <div className="feature-one__single-two-shape-2">
                      <img src="assets/images/shapes/feature-one-single-two-shape-2.png" alt="feature-one-single-two-shape-2" />
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
          </section>
          {/*Feature One End */}
          {/*About One Start */}
          <section className="about-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-one__img">
                      <img src="assets/images/resources/about-one-image-1.jpg" alt="about-one-image-1" />
                      <div className="about-one__crop-harvest">
                        <div className="about-one__crop-harvest-icon">
                          <span className="icon-tractor" />
                        </div>
                        <h3 className="about-one__crop-harvest-title">Crops<br /> Harvested</h3>
                        <div className="about-one__crop-harvest-count count-box">
                          <h3 className="count-text" data-stop="6.9" data-speed={1500} />
                          <span>M+</span>
                        </div>
                      </div>
                      <div className="about-one__img-shape-1 float-bob-y">
                        <img src="assets/images/shapes/about-one-img-shape-1.png" alt="about-one-img-shape-1" />
                      </div>
                      <div className="about-one__shape-1 float-bob-x">
                        <img src="assets/images/shapes/about-one-shape-1.png" alt="about-one-shape-1" />
                      </div>
                    </div>
                    <div className="about-one__field-box">
                      <div className="about-one__count-box count-box">
                        <h3 className="count-text" data-stop={600} data-speed={1500} />
                        <span>+</span>
                      </div>
                      <p className="about-one__field-text">Fields of Growth</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-one__right">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-1.png" alt="section-title-shape-1" />
                        </div>
                        <h6 className="section-title__tagline">ABOUT US</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">Connecting Farms With <br />The Future
                      </h3>
                    </div>
                    <p className="about-one__text">At Farmology, we believe in transforming agriculture with
                      innovation, sustainability, and trust. Our mission is to bridge the gap between
                      traditional farming and modern solutions—helping farmers grow.</p>
                    <h4 className="about-one__title-1">With a strong commitment</h4>
                    <div className="about-one__points-box-and-since">
                      <ul className="about-one__points list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>Premium quality seeds, eco<br />-friendly fertilizers</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>Automation to maximize yield<br /> and efficiency.</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>Building strong communities<br /> with training</p>
                        </li>
                      </ul>
                      <div className="about-one__since-box">
                        <div className="about-one__since-icon">
                          <span className="icon-harvester" />
                        </div>
                        <h5 className="about-one__since-title">Harvesting since</h5>
                        <h4 className="about-one__since-year">2000</h4>
                      </div>
                    </div>
                    <div className="about-one__btn-and-video">
                      <div className="about-one__btn-box">
                        <a className="thm-btn" href="/about">More About Us
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
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
                          Watch Our Story</p>
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
                <div className="col-xl-3">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">Our Vision </h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>Smarter farming for all</p>
                      </li>
                      <li>
                        <p>Sustainable and eco-friendly</p>
                      </li>
                      <li>
                        <p>Inclusive growth for farmers</p>
                      </li>
                      <li>
                        <p>Innovation-driven agriculture</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="author-one__img-box">
                    <div className="author-one__img">
                      <img src="assets/images/resources/author-one-img-1.png" alt="author-one-img-1" />
                    </div>
                    <div className="author-one__text-box">
                      <div className="author-one__text-box-shape-1">
                        <img src="assets/images/shapes/author-one-text-box-shape-1.png" alt="author-one-text-box-shape-1" />
                      </div>
                      <p className="author-one__text">Empowering Farmers for a Sustainable Future</p>
                      <div className="author-one__info">
                        <h4>Joseph C. Jensen</h4>
                        <p>Founder</p>
                      </div>
                      <div className="author-one__sign">
                        <img src="assets/images/resources/author-one-sign.png" alt="author-one-sign" />
                      </div>
                    </div>
                    <div className="author-one__img-shape">
                      <img src="assets/images/shapes/author-one-img-shape.png" alt="author-one-img-shape" />
                    </div>
                    <div className="author-one__ratting-box">
                      <div className="author-one__ratting-box-shape float-bob-x">
                        <img src="assets/images/shapes/author-one-ratting-box-shape.png" alt="author-one-ratting-box-shape" />
                      </div>
                      <div className="author-one__ratting-box-content">
                        <span className="author-one__ratting-title">Top Rated</span>
                        <div className="author-one__ratting">
                          <span className="icon-pointed-star" />
                          <span className="icon-pointed-star" />
                          <span className="icon-pointed-star" />
                          <span className="icon-pointed-star" />
                          <span className="icon-pointed-star" />
                        </div>
                        <p className="author-one__ratting-text count-box">From <span className="count-text" data-stop="2.5" data-speed={1500} />Million<br /> Customers</p>
                        <div className="author-one__ratting-text-two">
                          <span>4.9 out of 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">Our Mission </h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>Ensure efficient use of resources</p>
                      </li>
                      <li>
                        <p>Help farmers grow better crops</p>
                      </li>
                      <li>
                        <p>Make sustainable farming easy</p>
                      </li>
                      <li>
                        <p>Provide tools &amp; knowledge</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Author One End */}
          {/*Services One Start */}
          <section className="services-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">What We Do</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
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
                      <div className="services-one__single-bg" style={{backgroundImage: 'url(assets/images/backgrounds/services-one-single-bg-1.jpg)'}}>
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
                      <div className="services-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-one-single-bg-shape.png)'}}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-farming" />
                      </div>
                      <h3 className="services-one__title"><a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">Organic Farming
                          Solutions</a></h3>
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
                      <div className="services-one__single-bg" style={{backgroundImage: 'url(assets/images/backgrounds/services-one-single-bg-2.jpg)'}}>
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
                      <div className="services-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-one-single-bg-shape.png)'}}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-precision-agriculture" />
                      </div>
                      <h3 className="services-one__title"><a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">Smart Agriculture
                          Technology</a></h3>
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
                      <div className="services-one__single-bg" style={{backgroundImage: 'url(assets/images/backgrounds/services-one-single-bg-3.jpg)'}}>
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
                      <div className="services-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-one-single-bg-shape.png)'}}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-seeding" />
                      </div>
                      <h3 className="services-one__title"><a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">High-Quality Seeds &amp;
                          Crops</a></h3>
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
                      <div className="services-one__single-bg" style={{backgroundImage: 'url(assets/images/backgrounds/services-one-single-bg-4.jpg)'}}>
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
                      <div className="services-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-one-single-bg-shape.png)'}}>
                      </div>
                      <div className="services-one__icon">
                        <span className="icon-farmer" />
                      </div>
                      <h3 className="services-one__title"><a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">Farmer Training &amp;
                          Support</a></h3>
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
          </section>
          {/*Services One End */}
          {/*Video One Start*/}
          <section className="video-one">
            <div className="video-one__bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{backgroundImage: 'url(assets/images/backgrounds/video-one-bg.jpg)'}} />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="video-one__inner">
                    <div className="video-one__video-link">
                      <a href="https://www.youtube.com/watch?v=3Ww2TP_tU7o" className="video-popup">
                        <div className="video-one__icon">
                          <span className="fa fa-play" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                    <p className="video-one__sub-title">Watch How We Cultivate the Future</p>
                    <h2 className="video-one__title">A glimpse into our journey of innovation<br /> and
                      sustainability
                    </h2>
                    <div className="video-one__round-text">
                      <div className="video-one__curved-circle">
                        Always 100% Fresh from Our Fields
                      </div>
                    </div>
                    <div className="video-one__round-text-2">
                      <div className="video-one__curved-circle-2">
                        Always 100% Fresh from Our Fields
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-one">
                <div className="brand-one__carousel swiper-container">
                  <div className="swiper-wrapper">
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/#"><img src="assets/images/brand/brand-1-1.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/#"><img src="assets/images/brand/brand-1-2.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/#"><img src="assets/images/brand/brand-1-3.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/#"><img src="assets/images/brand/brand-1-4.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/#"><img src="assets/images/brand/brand-1-5.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Video One End*/}
          {/*Products One Start*/}
          <section className="products-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Our Fresh Products</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Bringing Nature’s Best Harvest
                  <br />Straight To You.
                </h3>
              </div>
              <div className="row">
                {/*Products One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="products-one__single">
                    <div className="products-one__img-box">
                      <div className="products-one__img">
                        <img src="assets/images/products/products-1-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><a href="product-details.html">Fresh Vegetables</a>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-vegetable" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{backgroundImage: 'url(assets/images/shapes/products-one-text-bg.png)'}}>
                        </div>
                        <p className="products-one__text">Our vegetables are cultivated naturally to bring you
                          the best of every season.</p>
                        <div className="products-one__read-more">
                          <a href="product-details.html">Read More<span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/products/products-1-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><a href="product-details.html">Dairy Product</a>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-cow" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{backgroundImage: 'url(assets/images/shapes/products-one-text-bg.png)'}}>
                        </div>
                        <p className="products-one__text">From fresh milk to our dairy products ensure
                          farm-fresh quality every day.</p>
                        <div className="products-one__read-more">
                          <a href="product-details.html">Read More<span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/products/products-1-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><a href="product-details.html">Livestock
                            Product</a>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-hen-1" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{backgroundImage: 'url(assets/images/shapes/products-one-text-bg.png)'}}>
                        </div>
                        <p className="products-one__text">From organic eggs, our Livestock Product ensure
                          farm-fresh quality every day.</p>
                        <div className="products-one__read-more">
                          <a href="product-details.html">Read More<span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/products/products-1-4.jpg" alt="" />
                      </div>
                    </div>
                    <div className="products-one__content">
                      <div className="products-one__icon-and-title">
                        <h3 className="products-one__title"><a href="product-details.html">Organic Fruits</a>
                        </h3>
                        <div className="products-one__icon">
                          <span className="icon-healthy-food" />
                        </div>
                      </div>
                      <div className="products-one__text-and-read-more">
                        <div className="products-one__text-and-read-more-bg" style={{backgroundImage: 'url(assets/images/shapes/products-one-text-bg.png)'}}>
                        </div>
                        <p className="products-one__text">Handpicked from our orchards fruits are packed with
                          freshness and nutrients.</p>
                        <div className="products-one__read-more">
                          <a href="product-details.html">Read More<span className="fas fa-arrow-right" /></a>
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
                      <h3 className="counter-one__title">Happy Farmers</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={1200} data-speed={1500} />
                        <span>+</span>
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
                      <h3 className="counter-one__title">Crops Harvested</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop="1.5" data-speed={1500} />
                        <span>M</span>
                        <span>+</span>
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
                      <h3 className="counter-one__title">Sustainable Practices</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop={100} data-speed={1500} />
                        <span>%</span>
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
                      <h3 className="counter-one__title">Livestock Raised</h3>
                      <div className="counter-one__count-box count-box">
                        <h3 className="count-text" data-stop="1.2" data-speed={1500} />
                        <span>M</span>
                        <span>+</span>
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
          <section className="why-choose-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Why Choose Us</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Freshness, Trust &amp; Care<br /> In Every Step
                </h3>
              </div>
              <div className="why-choose-one__inner">
                <div className="why-choose-one__img float-bob-x">
                  <img src="assets/images/resources/why-choose-one-img-1.png" alt="" />
                </div>
                <div className="why-choose-one__shape-1 float-bob-y">
                  <img src="assets/images/shapes/why-choose-one-shape-1.png" alt="" />
                </div>
                <div className="why-choose-one__shape-2">
                  <img src="assets/images/shapes/why-choose-one-shape-2.png" alt="" />
                </div>
                <div className="row">
                  {/*Why Choose One Single Start*/}
                  <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
                      <div className="why-choose-one__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/why-choose-one-single-bg-shape.png)'}}>
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
          </section>
          {/*Why Choose One End*/}
          {/*Project One Start*/}
          <section className="project-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Our Recent Projects</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
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
                        <img src="assets/images/project/project-1-1.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Vegetable</p>
                        <h3 className="project-one__title"><a href="project-details.html">Organic Farming
                            Projects</a></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Vegetable</p>
                        <h4 className="project-one__title-2"><a href="project-details.html">Organic Farming
                            Projects</a></h4>
                        <p className="project-one__text">Blending tradition with technology for smarter
                          agriculture</p>
                        <div className="project-one__arrow">
                          <a href="assets/images/project/project-1-1.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/project/project-1-2.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Dairy</p>
                        <h3 className="project-one__title"><a href="project-details.html">Dairy Delight
                            Project</a></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Dairy</p>
                        <h4 className="project-one__title-2"><a href="project-details.html">Dairy Delight
                            Project</a></h4>
                        <p className="project-one__text">Proper health, and feeding, essential for productivity.
                        </p>
                        <div className="project-one__arrow">
                          <a href="assets/images/project/project-1-2.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/project/project-1-3.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">NutriHarvest</p>
                        <h3 className="project-one__title"><a href="project-details.html">Healthy Harvest
                            Initiative</a></h3>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">NutriHarvest</p>
                        <h4 className="project-one__title-2"><a href="project-details.html">Healthy Harvest
                            Initiative</a></h4>
                        <p className="project-one__text">Dedicated to every stage of farming excellence</p>
                        <div className="project-one__arrow">
                          <a href="assets/images/project/project-1-3.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/project/project-1-4.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Livestock</p>
                        <h4 className="project-one__title"><a href="project-details.html">Livestock Farming
                            Projects</a></h4>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Livestock</p>
                        <h3 className="project-one__title-2"><a href="project-details.html">Livestock Farming
                            Projects</a></h3>
                        <p className="project-one__text">Blending tradition with technology for smarter
                          agriculture</p>
                        <div className="project-one__arrow">
                          <a href="assets/images/project/project-1-4.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
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
                        <img src="assets/images/project/project-1-5.jpg" alt="" />
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__sub-title">Agri-Tech</p>
                        <h4 className="project-one__title"><a href="project-details.html">Agri-Tech Innovation
                          </a></h4>
                      </div>
                      <div className="project-one__content-2">
                        <p className="project-one__sub-title-2">Agri-Tech</p>
                        <h3 className="project-one__title-2"><a href="project-details.html">Agri-Tech
                            Innovation</a></h3>
                        <p className="project-one__text">Eco-friendly fertilizers &amp; natural crop protection.
                        </p>
                        <div className="project-one__arrow">
                          <a href="assets/images/project/project-1-5.jpg" className="img-popup"><span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
              </div>
            </div>
          </section>
          {/*Project One End*/}
          {/*Do And Donts Start*/}
          <section className="do-and-donts">
            <div className="do-and-donts__bg" style={{backgroundImage: 'url(assets/images/backgrounds/do-and-donts-bg.jpg)'}}>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="do-and-donts__left wow fadeInLeft" data-wow-delay="100ms">
                    <div className="do-and-donts__single-title">
                      <span>Do’s</span>
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-1">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">Use natural fertilizers &amp; compost</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-2">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">Irrigate crops with clean water</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-3">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">Rotate crops<br /> for soil<br /> health</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-4">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">Practice sustainable farming</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single do-and-donts__single-5">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-checked-1" />
                        <h4 className="do-and-donts__text">Choose fresh, and organic produce</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="do-and-donts__middle">
                    <div className="do-and-donts__img">
                      <img src="assets/images/resources/do-and-donts-img-1.png" alt="" />
                    </div>
                    <div className="section-title text-center sec-title-animation animation-style1">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">Do’s &amp; Don’ts</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">Simple Guidelines For Better Harvest
                        And A Healthier Planet
                      </h3>
                    </div>
                    <p className="do-and-donts__middle-text">At Farmology, we bring you the purest and freshest
                      products straight from our fields. every product is cultivated naturally, ensuring 100%
                      farm-fresh goodness.</p>
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
                      <span>Don’ts</span>
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-6">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">Don’t overuse chemical pesticides</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-7">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">no waste water during irrigation</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-8">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">Don’t<br /> ignore soil<br /> testing</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-9">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">Don’t compromise on quality</h4>
                      </div>
                      <div className="do-and-donts__single-shape-1" />
                      <div className="do-and-donts__single-shape-2" />
                    </div>
                    <div className="do-and-donts__single-one do-and-donts__single-10">
                      <div className="do-and-donts__single-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/do-and-donts-single-bg-shape.png)'}}>
                      </div>
                      <div className="do-and-donts__icon">
                        <span className="icon-cross" />
                        <h4 className="do-and-donts__text">no use harmful packaging</h4>
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
                  <div className="faq-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="faq-one__contact-box">
                      <div className="faq-one__contact-box-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/faq-one-contact-box-bg-shape.png)'}}>
                      </div>
                      <div className="faq-one__contact-shape-1">
                        <img src="assets/images/shapes/faq-one-contact-shape-1.png" alt="" />
                      </div>
                      <div className="faq-one__author-box-inner">
                        <div className="faq-one__author-shape-1">
                          <img src="assets/images/shapes/faq-one-author-shape-1.png" alt="" />
                        </div>
                        <div className="faq-one__author-box">
                          <div className="faq-one__author-img">
                            <img src="assets/images/resources/faq-one-author-img.png" alt="" />
                          </div>
                          <h4 className="faq-one__author-name"><a href="/about">Adam Smith</a></h4>
                          <p className="faq-one__author-sub-title">Founder</p>
                        </div>
                      </div>
                      <h3 className="faq-one__contact-title">Do you have more questions?</h3>
                      <p className="faq-one__contact-text">Have any questions about our farm, products, or
                        activities? Don’t hesitate to reach out!
                        Our team is always ready to assist you with details about fresh produce, farm tours,
                        or partnership opportunities.</p>
                      <div className="faq-one__contact-social">
                        <a href="/#"><span className="fab fa-facebook-f" /></a>
                        <a href="/#"><span className="fab fa-twitter" /></a>
                        <a href="/#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/#"><span className="fab fa-instagram" /></a>
                      </div>
                      <div className="faq-one__contact-number">
                        <a href="tel:885747546027">+88 574 7546 027</a>
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
                          <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">Got Questions?</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">We’ve Got The Answers<br /> You Need.
                      </h3>
                    </div>
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
              </div>
            </div>
          </section>
          {/*Faq One End*/}
          {/*Testimonial One Start*/}
          <section className="testimonial-one">
            <div className="testimonial-one__bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-bg.jpg)'}} />
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Client Feedback</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Real Stories Of Trust, Freshness<br /> And
                  Satisfaction.
                </h3>
              </div>
              <div className="testimonial-one__inner">
                <div className="testimonial-one__carousel swiper-container">
                  <div className="swiper-wrapper">
                    {/*Testimonial One Single Start*/}
                    <div className="swiper-slide">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">Adam
                                  Smith</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
                            <img src="assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">Rowena E. Smith</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
                            <img src="assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">David J. Mahmoud</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
                            <img src="assets/images/testimonial/testimonial-1-4.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">James S. Adams</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
                            <img src="assets/images/testimonial/testimonial-1-5.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">Iris
                                  W. Jackson</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
                            <img src="assets/images/testimonial/testimonial-1-6.jpg" alt="" />
                          </div>
                          <div className="testimonial-one__client-content">
                            <div className="testimonial-one__client-name-box">
                              <h4 className="testimonial-one__client-name"><a href="testimonials.html">Herman G. McClure</a></h4>
                              <p className="testimonial-one__client-sub-title">Ceo Agency</p>
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
                          <div className="testimonial-one__text-box-bg" style={{backgroundImage: 'url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)'}}>
                          </div>
                          <div className="testimonial-one__single-shape-1">
                            <img src="assets/images/shapes/testimonial-one-single-shape-1.png" alt="" />
                          </div>
                          <p className="testimonial-one__text"><span className="fas fa-quote-left" /> At
                            Farmology,
                            we bring you the purest and
                            freshest
                            products straight from our fields. every product is cultivated naturally,
                            ensuring 100% farm-fresh goodness. <span className="fas fa-quote-right quote-two" />
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
          {/*Start Cta One*/}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <div className="cta-one__img">
                  <img src="assets/images/resources/cta-one-img-1.png" alt="" />
                </div>
                <div className="cta-one__content">
                  <div className="cta-one__shape-1" style={{backgroundImage: 'url(assets/images/shapes/cta-one-shape-1.png)'}} />
                  <div className="cta-one__shape-2 float-bob-x">
                    <img src="assets/images/shapes/cta-one-shape-2.png" alt="" />
                  </div>
                  <div className="cta-one__shape-bg" style={{backgroundImage: 'url(assets/images/shapes/cta-one-shape-bg.png)'}} />
                  <h2>Recognized as One of The <br /> Leading <span>Farming!</span></h2>
                  <p className="cta-one__text-1">Thousands of families choose us for healthy, safe, and farm-fresh<br />
                    products every day.Trusted by Families &amp; Food Lovers.</p>
                  <p className="cta-one__text-2 count-box">Join with <span className="count-text" data-stop={25} data-speed={1500} />
                    <span className="count-text-plus">k+ </span>happy
                    users.</p>
                  <ul className="cta-one__app-list list-unstyled">
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/app-1.png" alt="" />
                      </div>
                      <div className="content">
                        <p>Play Store</p>
                        <span>ios</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="assets/images/icon/app-2.png" alt="" />
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
          </section>
          {/*End Cta One*/}
          {/*Blog One Start */}
          <section className="blog-one">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Client Feedback</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Real Stories Of Trust, Freshness<br /> And
                  Satisfaction.
                </h3>
              </div>
              <div className="row">
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="blog-one__single">
                    <div className="blog-one__single-inner">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img src="assets/images/blog/blog-1-1.jpg" alt="" />
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
                        <div className="blog-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/blog-one-content-bg-shape.png)'}}>
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
                          <img src="assets/images/blog/blog-1-2.jpg" alt="" />
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
                        <div className="blog-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/blog-one-content-bg-shape.png)'}}>
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
                          <img src="assets/images/blog/blog-1-3.jpg" alt="" />
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
                        <div className="blog-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/blog-one-content-bg-shape.png)'}}>
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
          </section>
          {/*Blog One End */}
          {/*Site Footer Start*/}
          <footer className="site-footer">
            <div className="site-footer__bg" style={{backgroundImage: 'url(assets/images/backgrounds/site-footer-bg.jpg)'}}>
            </div>
            <div className="site-footer__top">
              <div className="container">
                <div className="site-footer__top-inner">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                      <div className="footer-widget__about">
                        <div className="footer-widget__about-logo">
                          <a href="/"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                        </div>
                        <p className="footer-widget__about-text">Believe that great food starts with great
                          farming. For 40 years, our farm has been committed to sustainable, eco-friendly
                          and full of goodness.</p>
                        <div className="footer-widget__payment">
                          <h3>We Accept</h3>
                          <div className="footer-widget__payment-card">
                            <a href="checkout.html"><img src="assets/images/resources/footer-widget-payment-card-1.jpg" alt="" /></a>
                            <a href="checkout.html"><img src="assets/images/resources/footer-widget-payment-card-2.jpg" alt="" /></a>
                            <a href="checkout.html"><img src="assets/images/resources/footer-widget-payment-card-3.jpg" alt="" /></a>
                            <a href="checkout.html"><img src="assets/images/resources/footer-widget-payment-card-4.jpg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                      <div className="footer-widget__links">
                        <h4 className="footer-widget__title">Quick links</h4>
                        <ul className="footer-widget__links-list list-unstyled">
                          <li><span className="fas fa-wheat" /><a href="/about">About Us</a></li>
                          <li><span className="fas fa-wheat" /><a href="team.html">Meet Our Team</a></li>
                          <li><span className="fas fa-wheat" /><a href="projects.html">Our Projects</a>
                          </li>
                          <li><span className="fas fa-wheat" /><a href="/faq">Help &amp; FAQs</a></li>
                          <li><span className="fas fa-wheat" /><a href="/contact">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                      <div className="footer-widget__services">
                        <h4 className="footer-widget__title">Our Products</h4>
                        <ul className="footer-widget__links-list list-unstyled">
                          <li><span className="fas fa-wheat" /><a href="fresh-produce.html">Organic &amp;
                              Processed</a></li>
                          <li><span className="fas fa-wheat" /><a href="dairy-products.html">Dairy
                              Products</a></li>
                          <li><span className="fas fa-wheat" /><a href="livestock.html">Livestock
                              Products</a></li>
                          <li><span className="fas fa-wheat" /><a href="grains-cereals.html">Crops &amp;
                              Grains</a></li>
                          <li><span className="fas fa-wheat" /><a href="fresh-produce.html">Fresh
                              Vegetables</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                      <div className="footer-widget__contact">
                        <h3 className="footer-widget__title">Contact Us</h3>
                        <ul className="footer-widget__contact-list list-unstyled">
                          <li>
                            <div className="icon">
                              <span className="icon-pin" />
                            </div>
                            <p>4140 Parker Rd. Allentown, New
                              <br /> Mexico 31134</p>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-call" />
                            </div>
                            <p>
                              <a href="tel:885747546027">+88 574 7546 027</a><br />
                              <a href="tel:885747546027">+88 574 7546 027</a>
                            </p>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-email" />
                            </div>
                            <p>
                              <a href="mailto:Farmology@gmail.com">Farmology@gmail.com</a><br />
                              <a href="mailto:Farmology@gmail.com">Farmology@gmail.com</a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-footer__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__copyright">
                        <p className="site-footer__copyright-text">Copyright@ 2025 <a href="/">Farmology</a>. All Rights Reserved.</p>
                      </div>
                      <div className="site-footer__bottom-menu-box">
                        <ul className="list-unstyled site-footer__bottom-menu">
                          <li><a href="/about">Terms of Service</a></li>
                          <li><a href="/about">Privacy policy</a></li>
                          <li><a href="/about">Support</a></li>
                        </ul>
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
              <a href="/" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width={150} alt="" /></a>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container" />
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:needhelp@packageName__.com">needhelp@Farmology.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="/#" className="fab fa-twitter" />
                <a href="/#" className="fab fa-facebook-square" />
                <a href="/#" className="fab fa-pinterest-p" />
                <a href="/#" className="fab fa-instagram" />
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
              <input type="search" name="search-field" defaultValue placeholder="Search Here" required />
              <button type="submit"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* End Search Popup */}
        <a href="/#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> Go Back Top</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
