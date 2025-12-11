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
                        <a href="/"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                      </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                      <a href="/about#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li className="dropdown">
                          <a href="/about#">services</a>
                          <ul className="shadow-box">
                            <li><a href="/services">Services</a></li>
                            <li><a href="/diagnostics-test">Diagnostic Test</a></li>
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
                        <h6 className="section-title__tagline">Our Story</h6>
                        <div className="section-title__shape-1">
                          <img src="assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
                        </div>
                      </div>
                      <h3 className="section-title__title title-animation">Growing with Indian farmers</h3>
                    </div>
                    <p className="about-one__text">
                      Since 1992, Ajeet Seeds has focused on dependable hybrid seeds for Indian farms—starting
                      with Ajeet-11/33 cotton and growing into 22 crops and 55 hybrids that balance quality and
                      affordability.
                    </p>
                    <p className="about-one__text">
                      Our Plant Biotechnology Research Center (est. 2003) and in-house labs keep innovation
                      close to the field, from early Bt cotton work to today’s farmer-first genetics and
                      agronomy support.
                    </p>
                    <h4 className="about-one__title-1">Highlights at a glance</h4>
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
                    <div className="author-one__img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="assets/images/board_member/sameer-mulay.jpg" alt="author-one-img-1" style={{ borderRadius: '20px', width: '352px', height: '426px', objectFit: 'cover' }} />
                    </div>
                    <div className="author-one__text-box">
                      <p className="author-one__text">Agriculture Matters to the<br />Future of Development</p>
                      <div className="author-one__info">
                        <h4>Sameer Mulay</h4>
                        <p>Managing Director</p>
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
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="assets/images/board_member/padmakar_mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="assets/images/board_member/sameer-mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <div className="team-one__img-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="team-one__img" style={{ width: '100%', maxWidth: '370px', height: '448px', overflow: 'hidden', borderRadius: '10px' }}>
                        <img src="assets/images/board_member/ranjeet-mulay.jpg" alt="team-one__img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
