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
            <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }}>
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
          <section id="our-history" className="about-one about-five">
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
                    <div className="about-one__points-box-and-since">
                      <ul className="about-one__points list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>Ajeet-11 &amp; Ajeet-33 set the benchmark<br />for resilient cotton hybrids.</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>India's first private wheat variety<br />Ajeet-102 pioneered diversification.</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-wheat" />
                          </div>
                          <p>22 crops &amp; 55 hybrids support<br />farm prosperity nationwide.</p>
                        </li>
                      </ul>
                      <div className="about-one__since-box">
                        <div className="about-one__since-icon">
                          <span className="icon-harvester" />
                        </div>
                        <h5 className="about-one__since-title">Progress since</h5>
                        <h4 className="about-one__since-year">1992</h4>
                      </div>
                    </div>
                    <div className="about-one__btn-and-video">
                      <div className="about-one__btn-box">
                        <a className="thm-btn" href="/about#our-history">Explore Our Journey
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
                          Research in Action</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About One End */}
          {/*Leaders Overview Start */}
          <section className="services-three leaders-overview">
            <div className="container">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Agriculture Professional Leaders</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Trading Activity</h3>
              </div>
              <div className="leaders-overview__text wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <p>Our leadership team combines decades of experience with an unwavering commitment to
                  innovation in Indian agriculture.</p>
              </div>
            </div>
          </section>
          {/*Leaders Overview End */}
          {/*Author One Start */}
          <section className="author-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-3">
                  <div className="author-one__Vission-mission">
                    <h4 className="author-one__Vission-mission-title">Our Vision </h4>
                    <ul className="author-one__Vission-mission-point list-unstyled">
                      <li>
                        <p>To acquire and apply the latest technologies to enhance crop productivity.</p>
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
                      <p className="author-one__text">The Plant Biotechnology Research Center guides our scientific
                        rigor, ensuring every hybrid seed delivers on performance, resilience, and farmer prosperity.</p>
                      <div className="author-one__info">
                        <h4>Padmakar Mulay</h4>
                        <p>Chairman</p>
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
                        <p>To provide high-quality seeds with the right genotype, at the right time, and at an affordable price.</p>
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
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">What we're doing</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Our Departments</h3>
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
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-plant-1" />
                        </div>
                        <h3 className="services-two__title"><a href="/services">R &amp; D</a></h3>
                        <p className="services-two__text">Genetic research and hybrid development led by the Plant Biotechnology Research Center.</p>
                        <div className="services-two__read-more">
                          <a href="/services">Learn More<span className="fas fa-arrow-right" /></a>
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
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-harvester-1" />
                        </div>
                        <h3 className="services-two__title"><a href="/services">Production</a></h3>
                        <p className="services-two__text">Seed multiplication and large-scale production adhering to strict agronomic protocols.</p>
                        <div className="services-two__read-more">
                          <a href="/services">Learn More<span className="fas fa-arrow-right" /></a>
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
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-precision-agriculture" />
                        </div>
                        <h3 className="services-two__title"><a href="/services">Quality Control</a></h3>
                        <p className="services-two__text">Multi-stage lab and field testing to guarantee purity, vigor, and farmer-ready performance.</p>
                        <div className="services-two__read-more">
                          <a href="/services">Learn More<span className="fas fa-arrow-right" /></a>
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
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-supply-chain" />
                        </div>
                        <h3 className="services-two__title"><a href="/services">Processing</a></h3>
                        <p className="services-two__text">State-of-the-art conditioning ensures clean, graded, and well-packed seed lots.</p>
                        <div className="services-two__read-more">
                          <a href="/services">Learn More<span className="fas fa-arrow-right" /></a>
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
                        <div className="services-two__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/services-two-content-bg-shape.png)' }}>
                        </div>
                        <div className="services-two__icon">
                          <span className="icon-farming" />
                        </div>
                        <h3 className="services-two__title"><a href="/services">Marketing</a></h3>
                        <p className="services-two__text">Closer farmer engagement, timely availability, and trusted advisory support.</p>
                        <div className="services-two__read-more">
                          <a href="/services">Learn More<span className="fas fa-arrow-right" /></a>
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
                    <img src="assets/images/resources/section-title-shape-1.png" alt="" />
                  </div>
                  <h6 className="section-title__tagline">Professional People</h6>
                  <div className="section-title__shape-1">
                    <img src="assets/images/resources/section-title-shape-2.png" alt="" />
                  </div>
                </div>
                <h3 className="section-title__title title-animation">Board of Directors</h3>
              </div>
              <div className="row">
                {/*Team One Single Start*/}
                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-1.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
                      </div>
                      <h3 className="team-one__title"><a href="/about#team">Padmakar Mulay</a></h3>
                      <p className="team-one__sub-title">Chairman</p>
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
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-2.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
                      </div>
                      <h3 className="team-one__title"><a href="/about#team">Sameer Mulay</a></h3>
                      <p className="team-one__sub-title">Managing Director</p>
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
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src="assets/images/team/team-1-3.jpg" alt="team-one__img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__content-bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-one-content-bg-shape.png)' }}>
                      </div>
                      <h3 className="team-one__title"><a href="/about#team">Ranjeet Mulay</a></h3>
                      <p className="team-one__sub-title">Director</p>
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
                <h3>Ajeet Seeds Pvt. Ltd.</h3>
                <p>A company with excellence and earnestly dedicated to agriculture farming.</p>
              </div>
            </div>
          </section>
          {/*Closing Statement End*/}

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
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search Here"
                required
              />
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
