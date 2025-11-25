export function ServicesContent() {
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
                        <p><a href="tel:15502505260">+1 (550) 250 5260</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-email" />
                      </div>
                      <div className="text">
                        <p><a href="mailto:info@Servixa24.com">info@Servixa24.com</a>
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
                      <a href="/services#"><i className="fab fa-twitter" /></a>
                      <a href="/services#"><i className="fab fa-facebook-f" /></a>
                      <a href="/services#"><i className="fab fa-pinterest-p" /></a>
                      <a href="/services#"><i className="fab fa-instagram" /></a>
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
                      <a href="/services#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li className="dropdown megamenu">
                          <a href="/services#">Home </a>
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
                          <a href="/services#">About</a>
                          <ul className="shadow-box">
                            <li><a href="/about">About</a></li>
                            <li><a href="history.html">History</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/services#">Pages</a>
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
                          <a href="/services#">services</a>
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
                          <a href="/services#">Shop</a>
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
                          <a href="/services#">Blog</a>
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
            <div className="page-header__bg" style={{backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)'}}>
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>Services </h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>Services </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*Services Page Start*/}
          <section className="services-page">
            <div className="container">
              <div className="row">
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-hen-1" />
                      </div>
                      <h3 className="services-two__title"><a href="livestock.html">Livestock<br /> Management</a>
                      </h3>
                      <p className="services-two__text">Professional care &amp; modern techniques for cattle.
                      </p>
                      <div className="services-two__read-more">
                        <a href="livestock.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-cow" />
                      </div>
                      <h3 className="services-two__title"><a href="dairy-products.html">Dairy Farming<br />
                          Services</a></h3>
                      <p className="services-two__text">High-quality dairy production, processing.
                      </p>
                      <div className="services-two__read-more">
                        <a href="dairy-products.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-plant-1" />
                      </div>
                      <h3 className="services-two__title"><a href="fresh-produce.html">Fresh from nature<br />
                          goodness</a></h3>
                      <p className="services-two__text">Scientific soil testing and crop consultancy.
                      </p>
                      <div className="services-two__read-more">
                        <a href="fresh-produce.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-4.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-hydroponic-gardening" />
                      </div>
                      <h3 className="services-two__title"><a href="grains-cereals.html">Smart Irrigation<br />
                          System</a></h3>
                      <p className="services-two__text">Modern irrigation technology to save water.
                      </p>
                      <div className="services-two__read-more">
                        <a href="grains-cereals.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-5.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-harvester-1" />
                      </div>
                      <h3 className="services-two__title"><a href="poultry-eggs.html">Farm-to-Table<br />
                          Delivery</a></h3>
                      <p className="services-two__text">Direct delivery of fresh organic products.
                      </p>
                      <div className="services-two__read-more">
                        <a href="poultry-eggs.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-6.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-farming" />
                      </div>
                      <h3 className="services-two__title"><a href="fresh-produce.html">Training &amp;<br />
                          Workshops</a></h3>
                      <p className="services-two__text">Farmers &amp; entrepreneurs modern
                        agriculture.
                      </p>
                      <div className="services-two__read-more">
                        <a href="fresh-produce.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-7.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-precision-agriculture" />
                      </div>
                      <h3 className="services-two__title"><a href="fresh-produce.html">Organic Farming<br />
                          Solutions</a></h3>
                      <p className="services-two__text">Sustainable and eco-friendly farming practices.
                      </p>
                      <div className="services-two__read-more">
                        <a href="fresh-produce.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
                {/*Services Two Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="700ms">
                  <div className="services-two__single">
                    <div className="services-two__img-box">
                      <div className="services-two__img">
                        <img src="assets/images/services/services-2-8.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-two__content">
                      <div className="services-two__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)'}}>
                      </div>
                      <div className="services-two__icon">
                        <span className="icon-supply-chain" />
                      </div>
                      <h3 className="services-two__title"><a href="dairy-products.html">Farm Equipment<br />
                          Supply</a></h3>
                      <p className="services-two__text">Modern tools &amp; machinery for efficient farming.
                      </p>
                      <div className="services-two__read-more">
                        <a href="dairy-products.html">Read More<span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Services Two Single End*/}
              </div>
            </div>
          </section>
          {/*Services Page End*/}
          {/*Site Footer Two Start*/}
          <footer className="site-footer-two">
            <div className="site-footer-two__top">
              <div className="container">
                <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget-two__newsletter-bg" style={{backgroundImage: 'url(assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)'}}>
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
                        <a href="/services#"><i className="fab fa-facebook-f" /></a>
                        <a href="/services#"><i className="fab fa-twitter" /></a>
                        <a href="/services#"><i className="fab fa-instagram" /></a>
                        <a href="/services#"><i className="fab fa-pinterest-p" /></a>
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
                <a href="mailto:needhelp@packageName__.com">needhelp@Farmology.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="/services#" className="fab fa-twitter" />
                <a href="/services#" className="fab fa-facebook-square" />
                <a href="/services#" className="fab fa-pinterest-p" />
                <a href="/services#" className="fab fa-instagram" />
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
        <a href="/services#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> Go Back Top</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
