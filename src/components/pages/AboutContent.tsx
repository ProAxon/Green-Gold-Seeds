export function AboutContent() {
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
                      <a href="/about#"><i className="fab fa-twitter" /></a>
                      <a href="/about#"><i className="fab fa-facebook" /></a>
                      <a href="/about#"><i className="fab fa-pinterest-p" /></a>
                      <a href="/about#"><i className="fab fa-instagram" /></a>
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
                      <a href="/about#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li className="dropdown megamenu">
                          <a href="/about#">Home </a>
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
                          <a href="/about#">About</a>
                          <ul className="shadow-box">
                            <li><a href="/about">About</a></li>
                            <li><a href="history.html">History</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/about#">Pages</a>
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
                          <a href="/about#">services</a>
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
                          <a href="/about#">Shop</a>
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
                          <a href="/about#">Blog</a>
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
                <h3>About Us</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*About One Start */}
          <section className="about-one about-five">
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
          {/*Services Two Start */}
          <section className="services-two">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Farmology Services</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Bringing Sustainable Farming &amp; <br />Organic Growth
                  Solutions
                </h3>
              </div>
              <div className="services-two__inner">
                <div className="services-two__carousel owl-theme owl-carousel">
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="livestock.html">Livestock<br />
                            Management</a></h3>
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
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="dairy-products.html">Dairy Farming
                            Services</a></h3>
                        <p className="services-two__text">High-quality dairy production, processing solutions.
                        </p>
                        <div className="services-two__read-more">
                          <a href="dairy-products.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="grains-cereals.html">Soil &amp; Crop<br />
                            Analysis</a></h3>
                        <p className="services-two__text">Scientific soil testing and crop consultancy.
                        </p>
                        <div className="services-two__read-more">
                          <a href="grains-cereals.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="herbs-spices.html">Smart Irrigation
                            System</a></h3>
                        <p className="services-two__text">Modern irrigation technology to save water boost
                          growth.
                        </p>
                        <div className="services-two__read-more">
                          <a href="herbs-spices.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="fresh-produce.html">Farm-to-Table
                            Delivery</a></h3>
                        <p className="services-two__text">Direct delivery of fresh organic products to
                          customers.
                        </p>
                        <div className="services-two__read-more">
                          <a href="fresh-produce.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="fresh-produce.html">Organic Farming
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
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="dairy-products.html">Farm Equipment
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
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="livestock.html">Livestock<br />
                            Management</a></h3>
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
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="dairy-products.html">Dairy Farming
                            Services</a></h3>
                        <p className="services-two__text">High-quality dairy production, processing solutions.
                        </p>
                        <div className="services-two__read-more">
                          <a href="dairy-products.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="herbs-spices.html">Soil &amp; Crop<br />
                            Analysis</a></h3>
                        <p className="services-two__text">Scientific soil testing and crop consultancy.
                        </p>
                        <div className="services-two__read-more">
                          <a href="herbs-spices.html">Read More<span className="fas fa-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div className="item">
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
                        <h3 className="services-two__title"><a href="fresh-produce.html">Smart Irrigation
                            System</a></h3>
                        <p className="services-two__text">Modern irrigation technology to save water boost
                          growth.
                        </p>
                        <div className="services-two__read-more">
                          <a href="fresh-produce.html">Read More<span className="fas fa-arrow-right" /></a>
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
          <section className="team-one about-page-team">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Our Farmer</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Dedicated To Growth &amp; Quality</h3>
              </div>
              <div className="row">
                {/*Team One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-1.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)'}}>
                      </div>
                      <h3 className="team-one__title"><a href="team-details.html">Dapper John</a></h3>
                      <p className="team-one__sub-title">Co-Founder</p>
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
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-2.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)'}}>
                      </div>
                      <h3 className="team-one__title"><a href="team-details.html">Frankie Dykes</a></h3>
                      <p className="team-one__sub-title">Quality Manager</p>
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
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-3.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)'}}>
                      </div>
                      <h3 className="team-one__title"><a href="team-details.html">David Crum</a></h3>
                      <p className="team-one__sub-title">Head of Farm Care</p>
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
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-4.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)'}}>
                      </div>
                      <h3 className="team-one__title"><a href="team-details.html">Charles Halvorson</a></h3>
                      <p className="team-one__sub-title">Sales Manager</p>
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
          {/*Faq One Start*/}
          <section className="faq-one faq-two">
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
                        <a href="/about#"><span className="fab fa-facebook-f" /></a>
                        <a href="/about#"><span className="fab fa-twitter" /></a>
                        <a href="/about#"><span className="fab fa-pinterest-p" /></a>
                        <a href="/about#"><span className="fab fa-instagram" /></a>
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
          {/*Testimonial Three Start*/}
          <section className="testimonial-three">
            <div className="testimonial-three__bg-shape" style={{backgroundImage: 'url(assets/images/shapes/testimonial-three-bg-shape.png)'}} />
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="testimonial-three__left">
                    <div className="section-title text-left sec-title-animation animation-style2">
                      <div className="section-title__tagline-box">
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                        </div>
                        <h6 className="section-title__tagline">Our Feedbacks</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">What They’re Talking About Our Company?
                      </h3>
                    </div>
                    <p className="testimonial-three__left-text">Aliquam viverra arcu. Donec aliquet blandit enim
                      feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh tempus turpis
                    </p>
                    <div className="testimonial-three__btn-box">
                      <a className="thm-btn" href="/about">View all testimonials
                        <i className="fal fa-long-arrow-right" />
                        <span className="hover-btn hover-bx" />
                        <span className="hover-btn hover-bx2" />
                        <span className="hover-btn hover-bx3" />
                        <span className="hover-btn hover-bx4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="testimonial-three__right">
                    <div className="testimonial-three__img-1">
                      <img src="assets/images/testimonial/testimonial-three-img-1.jpg" alt="" />
                    </div>
                    <div className="testimonial-three__shape-2">
                      <img src="assets/images/shapes/testimonial-three-shape-2.png" alt="" />
                    </div>
                    <div className="testimonial-three__carousel swiper-container">
                      <div className="swiper-wrapper">
                        {/*Testimonial Three Single Start*/}
                        <div className="swiper-slide">
                          <div className="testimonial-three__single">
                            <div className="testimonial-three__content">
                              <div className="testimonial-three__quote">
                                <span className="icon-left" />
                              </div>
                              <p className="testimonial-three__text">Having been a host farmer for three
                                seasons, we’ve seen
                                firsthand the difference this
                                internship makes in beginning
                                farmers and host farms a like As
                                a farmer.</p>
                              <div className="testimonial-three__client-info">
                                <h3><a href="testimonials.html">Adam Smith</a></h3>
                                <p>Ceo Farmology</p>
                              </div>
                              <div className="testimonial-three__shape-1">
                                <img src="assets/images/shapes/testimonial-three-shape-1.png" alt="" />
                              </div>
                            </div>
                            <div className="testimonial-three__img">
                              <img src="assets/images/testimonial/testimonial-3-1.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start*/}
                        <div className="swiper-slide">
                          <div className="testimonial-three__single">
                            <div className="testimonial-three__content">
                              <div className="testimonial-three__quote">
                                <span className="icon-left" />
                              </div>
                              <p className="testimonial-three__text">Having been a host farmer for three
                                seasons, we’ve seen
                                firsthand the difference this
                                internship makes in beginning
                                farmers and host farms a like As
                                a farmer.</p>
                              <div className="testimonial-three__client-info">
                                <h3><a href="testimonials.html">Alisha Martin</a></h3>
                                <p>Ceo Farmology</p>
                              </div>
                              <div className="testimonial-three__shape-1">
                                <img src="assets/images/shapes/testimonial-three-shape-1.png" alt="" />
                              </div>
                            </div>
                            <div className="testimonial-three__img">
                              <img src="assets/images/testimonial/testimonial-3-2.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start*/}
                        <div className="swiper-slide">
                          <div className="testimonial-three__single">
                            <div className="testimonial-three__content">
                              <div className="testimonial-three__quote">
                                <span className="icon-left" />
                              </div>
                              <p className="testimonial-three__text">Having been a host farmer for three
                                seasons, we’ve seen
                                firsthand the difference this
                                internship makes in beginning
                                farmers and host farms a like As
                                a farmer.</p>
                              <div className="testimonial-three__client-info">
                                <h3><a href="testimonials.html">Dapper John</a></h3>
                                <p>Ceo Farmology</p>
                              </div>
                              <div className="testimonial-three__shape-1">
                                <img src="assets/images/shapes/testimonial-three-shape-1.png" alt="" />
                              </div>
                            </div>
                            <div className="testimonial-three__img">
                              <img src="assets/images/testimonial/testimonial-3-3.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        {/*Testimonial Three Single End*/}
                      </div>
                    </div>
                    <div className="testimonial-three__nav">
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
            </div>
          </section>
          {/*Testimonial Three End*/}
          {/*Shop Now Start */}
          <section className="shop-now">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Shop Now</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Shop Fresh, 100% Organic <br />&amp; Chemical-Free.
                </h3>
              </div>
              <div className="row">
                {/*Shop Now Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="shop-now__single">
                    <div className="shop-now__img">
                      <img src="assets/images/shop/shop-now-1-1.png" alt="" />
                      <img src="assets/images/shop/shop-now-1-1.png" alt="" />
                      <div className="shop-now__review">
                        <i className="fa fa-star" />
                        <p>4.9</p>
                      </div>
                    </div>
                    <div className="shop-now__content">
                      <div className="shop-now__content-left">
                        <p><del>$33.00</del> $28.00</p>
                        <h4>
                          <a href="product-details.html">
                            Golden Ginger
                          </a>
                        </h4>
                      </div>
                      <ul className="shop-now__info list-unstyled">
                        <li>
                          <a href="/about#" title="Add to Wishlist">
                            <i className="fa fa-regular fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Add to cart">
                            <i className="fa fa-solid fa-cart-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Quick View">
                            <i className="fa fa-regular fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Compare">
                            <i className="fa fa-solid fa-repeat" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Shop Now Single End*/}
                {/*Shop Now Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                  <div className="shop-now__single">
                    <div className="shop-now__img">
                      <img src="assets/images/shop/shop-now-1-2.png" alt="" />
                      <img src="assets/images/shop/shop-now-1-2.png" alt="" />
                      <div className="shop-now__review">
                        <i className="fa fa-star" />
                        <p>5.0</p>
                      </div>
                    </div>
                    <div className="shop-now__content">
                      <div className="shop-now__content-left">
                        <p>$42.00</p>
                        <h4>
                          <a href="product-details.html">
                            Farm Fresh Eggs (30p)
                          </a>
                        </h4>
                      </div>
                      <ul className="shop-now__info list-unstyled">
                        <li>
                          <a href="/about#" title="Add to Wishlist">
                            <i className="fa fa-regular fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Add to cart">
                            <i className="fa fa-solid fa-cart-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Quick View">
                            <i className="fa fa-regular fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Compare">
                            <i className="fa fa-solid fa-repeat" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Shop Now Single End*/}
                {/*Shop Now Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                  <div className="shop-now__single">
                    <div className="shop-now__img">
                      <img src="assets/images/shop/shop-now-1-3.png" alt="" />
                      <img src="assets/images/shop/shop-now-1-3.png" alt="" />
                      <div className="shop-now__review">
                        <i className="fa fa-star" />
                        <p>4.7</p>
                      </div>
                    </div>
                    <div className="shop-now__content">
                      <div className="shop-now__content-left">
                        <p><del>$55.00</del>$45.00</p>
                        <h4>
                          <a href="product-details.html">
                            Pure &amp; Fresh Milk (11)
                          </a>
                        </h4>
                      </div>
                      <ul className="shop-now__info list-unstyled">
                        <li>
                          <a href="/about#" title="Add to Wishlist">
                            <i className="fa fa-regular fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Add to cart">
                            <i className="fa fa-solid fa-cart-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Quick View">
                            <i className="fa fa-regular fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Compare">
                            <i className="fa fa-solid fa-repeat" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Shop Now Single End*/}
                {/*Shop Now Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                  <div className="shop-now__single">
                    <div className="shop-now__img">
                      <img src="assets/images/shop/shop-now-1-4.png" alt="" />
                      <img src="assets/images/shop/shop-now-1-4.png" alt="" />
                      <div className="shop-now__review">
                        <i className="fa fa-star" />
                        <p>4.5</p>
                      </div>
                    </div>
                    <div className="shop-now__content">
                      <div className="shop-now__content-left">
                        <p> $38.00</p>
                        <h4>
                          <a href="product-details.html">
                            Sweet Corn
                          </a>
                        </h4>
                      </div>
                      <ul className="shop-now__info list-unstyled">
                        <li>
                          <a href="/about#" title="Add to Wishlist">
                            <i className="fa fa-regular fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Add to cart">
                            <i className="fa fa-solid fa-cart-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Quick View">
                            <i className="fa fa-regular fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="/about#" title="Compare">
                            <i className="fa fa-solid fa-repeat" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Shop Now Single End*/}
              </div>
              <div className="shop-now__btn-box">
                <a className="thm-btn" href="/products">View All Products
                  <i className="fal fa-long-arrow-right" />
                  <span className="hover-btn hover-bx" />
                  <span className="hover-btn hover-bx2" />
                  <span className="hover-btn hover-bx3" />
                  <span className="hover-btn hover-bx4" />
                </a>
              </div>
            </div>
          </section>
          {/*Shop Now End */}
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
                        <a href="/about#"><img src="assets/images/brand/brand-1-1.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/about#"><img src="assets/images/brand/brand-1-2.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/about#"><img src="assets/images/brand/brand-1-3.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/about#"><img src="assets/images/brand/brand-1-4.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                    {/*Start Brand One Single*/}
                    <div className="swiper-slide">
                      <div className="brand-one__single">
                        <a href="/about#"><img src="assets/images/brand/brand-1-5.png" alt="" /></a>
                      </div>
                    </div>
                    {/*End Brand One Single*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Video One End*/}
          {/*Process One Start */}
          <section className="process-one">
            <div className="container">
              <div className="process-one__inner">
                <div className="process-one__bg" style={{backgroundImage: 'url(assets/images/shapes/process-one-bg-shape.png)'}} />
                <div className="process-one__shape-four">
                  <img src="assets/images/shapes/process-one-shape-four.png" alt="" />
                </div>
                <ul className="row">
                  {/*Process One Single Start*/}
                  <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="process-one__single">
                      <div className="process-one__icon">
                        <span className="icon-harvester" />
                      </div>
                      <div className="process-one__shape-1">
                        <div className="process-one__shape-2">
                          <img src="assets/images/shapes/process-one-shape-2.png" alt="" />
                        </div>
                        <div className="process-one__shape-3">
                          <img src="assets/images/shapes/process-one-shape-3.png" alt="" />
                        </div>
                      </div>
                      <div className="process-one__content">
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Harvesting</h3>
                        <p className="process-one__text">Committed to eco-friendly
                          &amp; chemicalfree farming
                          practices.</p>
                      </div>
                    </div>
                  </li>
                  {/*Process One Single End*/}
                  {/*Process One Single Start*/}
                  <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div className="process-one__single">
                      <div className="process-one__content">
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Cleaning &amp; Sorting</h3>
                        <p className="process-one__text">Committed to eco-friendly
                          &amp; chemicalfree farming
                          practices.</p>
                      </div>
                      <div className="process-one__shape-1">
                        <div className="process-one__shape-2">
                          <img src="assets/images/shapes/process-one-shape-4.png" alt="" />
                        </div>
                        <div className="process-one__shape-3">
                          <img src="assets/images/shapes/process-one-shape-5.png" alt="" />
                        </div>
                      </div>
                      <div className="process-one__icon">
                        <span className="icon-hydroponic-gardening" />
                      </div>
                    </div>
                  </li>
                  {/*Process One Single End*/}
                  {/*Process One Single Start*/}
                  <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                    <div className="process-one__single">
                      <div className="process-one__icon">
                        <span className="icon-product" />
                      </div>
                      <div className="process-one__shape-1">
                        <div className="process-one__shape-2">
                          <img src="assets/images/shapes/process-one-shape-2.png" alt="" />
                        </div>
                        <div className="process-one__shape-3">
                          <img src="assets/images/shapes/process-one-shape-3.png" alt="" />
                        </div>
                      </div>
                      <div className="process-one__content">
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Packaging</h3>
                        <p className="process-one__text">Committed to eco-friendly
                          &amp; chemicalfree farming
                          practices.</p>
                      </div>
                    </div>
                  </li>
                  {/*Process One Single End*/}
                  {/*Process One Single Start*/}
                  <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                    <div className="process-one__single">
                      <div className="process-one__content">
                        <div className="process-one__count" />
                        <h3 className="process-one__title">Distribution</h3>
                        <p className="process-one__text">Committed to eco-friendly
                          &amp; chemicalfree farming
                          practices.</p>
                      </div>
                      <div className="process-one__shape-1">
                        <div className="process-one__shape-2">
                          <img src="assets/images/shapes/process-one-shape-4.png" alt="" />
                        </div>
                        <div className="process-one__shape-3">
                          <img src="assets/images/shapes/process-one-shape-5.png" alt="" />
                        </div>
                      </div>
                      <div className="process-one__icon">
                        <span className="icon-supply-chain" />
                      </div>
                    </div>
                  </li>
                  {/*Process One Single End*/}
                </ul>
              </div>
            </div>
          </section>
          {/*Process One End */}
          {/* Blog Two Start */}
          <section className="blog-two blog-five">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Our Blogs</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Get Updates On Farm Life
                </h3>
              </div>
              <div className="row">
                {/*Blog Two Single Start*/}
                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="blog-two__single">
                    <div className="blog-two__img">
                      <img src="assets/images/blog/blog-2-1.jpg" alt="" />
                      <div className="blog-two__tags">
                        <span>Dairy Farming</span>
                        <span>Milk Production</span>
                      </div>
                    </div>
                    <div className="blog-two__content">
                      <div className="blog-two__user">
                        <div className="blog-two__user-img">
                          <img src="assets/images/blog/blog-two-user-1.jpg" alt="" />
                        </div>
                        <p className="blog-two__user-title">Malaika alise</p>
                      </div>
                      <ul className="blog-two__meta list-unstyled">
                        <li>
                          <a href="/blog"><span className="far fa-calendar-alt" />April 5,
                            2025</a>
                        </li>
                        <li>
                          <a href="/blog"><span className="fal fa-comments" />80
                            Comments</a>
                        </li>
                      </ul>
                      <h3 className="blog-two__title"><a href="/blog">How small-scale Livestock
                          farming is changing rural livelihoods.</a></h3>
                      <p className="blog-two__text">Explore feeding techniques and modern tools that ensure better
                        milk quality. Goat Farming for Sustainable Income</p>
                      <div className="blog-two__btn-box">
                        <a href="/blog" className="thm-btn">Reed More
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
                {/*Blog Two Single End*/}
                <div className="col-xl-6">
                  {/* Blog Two Single Two Start */}
                  <div className="blog-two__single-two wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-two__img-two">
                      <img src="assets/images/blog/blog-2-2.jpg" alt="" />
                      <div className="blog-two__tags-two">
                        <span>Organic Farming</span>
                      </div>
                    </div>
                    <div className="blog-two__content-two">
                      <div className="blog-two__user-two">
                        <div className="blog-two__user-two-img">
                          <img src="assets/images/blog/blog-two-user-2.jpg" alt="" />
                        </div>
                        <p className="blog-two__user-two-title">John Smith</p>
                      </div>
                      <ul className="blog-two__meta-two list-unstyled">
                        <li>
                          <a href="/blog"><span className="far fa-calendar-alt" />Feb 25,
                            2025</a>
                        </li>
                        <li>
                          <a href="/blog"><span className="fal fa-comments" />22
                            Comments</a>
                        </li>
                      </ul>
                      <h3 className="blog-two__title-two"><a href="/blog">Benefits of Organic
                          Vegetable Farming.</a></h3>
                      <p className="blog-two__text-two">Organic methods improve soil health and boost
                        yields naturally.</p>
                      <div className="blog-two__btn-box-two">
                        <a href="/blog" className="thm-btn">Reed More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Blog Two Single Two End */}
                  {/* Blog Two Single Two Start */}
                  <div className="blog-two__single-two wow fadeInUp" data-wow-delay="300ms">
                    <div className="blog-two__img-two">
                      <img src="assets/images/blog/blog-2-3.jpg" alt="" />
                      <div className="blog-two__tags-two">
                        <span>Poultry Farming</span>
                      </div>
                    </div>
                    <div className="blog-two__content-two">
                      <div className="blog-two__user-two  blog-two__user-three">
                        <div className="blog-two__user-two-img">
                          <img src="assets/images/blog/blog-two-user-3.jpg" alt="" />
                        </div>
                        <p className="blog-two__user-two-title">Jerin jara</p>
                      </div>
                      <ul className="blog-two__meta-two list-unstyled">
                        <li>
                          <a href="/blog"><span className="far fa-calendar-alt" />May 19,
                            2025</a>
                        </li>
                        <li>
                          <a href="/blog"><span className="fal fa-comments" />15
                            Comments</a>
                        </li>
                      </ul>
                      <h3 className="blog-two__title-two"><a href="/blog">Free-Range Poultry Farming
                          Explained.</a></h3>
                      <p className="blog-two__text-two">Practical tips for efficient feeding and disease
                        management.</p>
                      <div className="blog-two__btn-box-two">
                        <a href="/blog" className="thm-btn">Reed More
                          <i className="fal fa-long-arrow-right" />
                          <span className="hover-btn hover-bx" />
                          <span className="hover-btn hover-bx2" />
                          <span className="hover-btn hover-bx3" />
                          <span className="hover-btn hover-bx4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Blog Two Single Two End */}
                </div>
              </div>
            </div>
          </section>
          {/* Blog Two End */}
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
                  <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate="novalidate">
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
                        <a href="/about#"><i className="fab fa-facebook-f" /></a>
                        <a href="/about#"><i className="fab fa-twitter" /></a>
                        <a href="/about#"><i className="fab fa-instagram" /></a>
                        <a href="/about#"><i className="fab fa-pinterest-p" /></a>
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
                <a href="/about#" className="fab fa-twitter" />
                <a href="/about#" className="fab fa-facebook-square" />
                <a href="/about#" className="fab fa-pinterest-p" />
                <a href="/about#" className="fab fa-instagram" />
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
        <a href="/about#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> Go Back Top</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
