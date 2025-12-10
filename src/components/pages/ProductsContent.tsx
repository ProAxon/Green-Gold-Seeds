export function ProductsContent() {
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
                      <a href="/products#"><i className="fab fa-twitter" /></a>
                      <a href="/products#"><i className="fab fa-facebook-f" /></a>
                      <a href="/products#"><i className="fab fa-pinterest-p" /></a>
                      <a href="/products#"><i className="fab fa-instagram" /></a>
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
                      <a href="/products#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li className="dropdown">
                          <a href="/products#">About</a>
                          <ul className="shadow-box">
                            <li><a href="/about">About</a></li>
                            <li><a href="history.html">History</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/products#">Pages</a>
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
                          <a href="/products#">services</a>
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
                          <a href="/products#">Shop</a>
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
                          <a href="/products#">Blog</a>
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
                <h3>Porducts </h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>Porducts </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}
          {/*Product Start*/}
          <section className="product">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-12">
                  <div className="product__items">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="product__showing-result">
                          <div className="product__showing-text-box">
                            <p className="product__showing-text">Showing 1–12/14 of 14 results</p>
                          </div>
                          <div className="product__showing-sort">
                            <div className="select-box">
                              <select className="wide">
                                <option data-display="Sort by popular">Sort by popular</option>
                                <option value={1}>Sort by popular</option>
                                <option value={2}>Sort by Price</option>
                                <option value={3}>Sort by Ratings</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__all">
                      <div className="product__all-tab">
                        <div className="product__all-tab-button">
                          <ul className="tabs-button-box clearfix">
                            <li data-tab="#grid" className="tab-btn-item active-btn-item">
                              <div className="product__all-tab-button-icon one">
                                <i className="fa fa-solid fa-bars" />
                              </div>
                            </li>
                            <li data-tab="#list" className="tab-btn-item">
                              <div className="product__all-tab-button-icon">
                                <i className="fa fa-solid fa-list-ul" />
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/*Start Tabs Content Box*/}
                        <div className="tabs-content-box">
                          {/*Start Tab*/}
                          <div className="tab-content-box-item tab-content-box-item-active" id="grid">
                            <div className="product__all-tab-content-box-item">
                              <div className="product__all-tab-single">
                                <div className="row">
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-1.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-1.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>New</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Chicken Eggs (12P)
                                            </a>
                                          </h4>
                                          <p>$33.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.9</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-2.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-2.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Golden Ginger
                                            </a>
                                          </h4>
                                          <p>$50.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>5.0</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-3.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-3.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>5% Off</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Sweet Orange
                                            </a>
                                          </h4>
                                          <p><del>$33.00</del> $28.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.5</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-4.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-4.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Cow Fresh Milk (1L)
                                            </a>
                                          </h4>
                                          <p>$40.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.8</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-5.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-5.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>5% Off</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Crunchy Almonds
                                            </a>
                                          </h4>
                                          <p><del>$25.00</del>$20.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.9</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-6.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-6.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Organic Honey
                                            </a>
                                          </h4>
                                          <p>$35.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.7</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-7.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-7.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>New</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Fresh Broccoli
                                            </a>
                                          </h4>
                                          <p>$27.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.6</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-8.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-8.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Fresh Strawberries
                                            </a>
                                          </h4>
                                          <p>$44.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>5.0</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-9.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-9.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>3% Off</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Sweet Corn
                                            </a>
                                          </h4>
                                          <p><del>$49.00</del>$52.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.9</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-10.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-10.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Wheat Flour (12KG)
                                            </a>
                                          </h4>
                                          <p>$25.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.7</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-11.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-11.jpg" alt="" />
                                        <ul className="single-product-style1__overlay">
                                          <li>
                                            <p>New</p>
                                          </li>
                                          <li>
                                            <p>7% Off</p>
                                          </li>
                                        </ul>
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Crisp Carrots
                                            </a>
                                          </h4>
                                          <p><del>$36.00</del>$43.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.9</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                      <div className="single-product-style1__img">
                                        <img src="assets/images/shop/shop-product-1-12.jpg" alt="" />
                                        <img src="assets/images/shop/shop-product-1-12.jpg" alt="" />
                                        <ul className="single-product-style1__info">
                                          <li>
                                            <a href="/products#" title="Add to Wishlist">
                                              <i className="fa fa-regular fa-heart" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Add to cart">
                                              <i className="fa fa-solid fa-cart-plus" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Quick View">
                                              <i className="fa fa-regular fa-eye" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/products#" title="Compare">
                                              <i className="fa fa-solid fa-repeat" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="single-product-style1__content">
                                        <div className="single-product-style1__content-left">
                                          <h4>
                                            <a href="product-details.html">
                                              Organic Beetroot
                                            </a>
                                          </h4>
                                          <p>$28.00</p>
                                        </div>
                                        <div className="single-product-style1__content-right">
                                          <div className="single-product-style1__review">
                                            <i className="fa fa-star" />
                                            <p>4.6</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single End*/}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*End Tab*/}
                          {/*Start Tab*/}
                          <div className="tab-content-box-item" id="list">
                            <div className="product__all-tab-content-box-item">
                              <div className="product__all-tab-single">
                                <div className="row">
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <ul className="single-product-style1__overlay">
                                              <li>
                                                <p>New</p>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Chicken Eggs (12P)
                                                </a>
                                              </h4>
                                              <p>$33.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-2.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-2.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Golden Ginger
                                                </a>
                                              </h4>
                                              <p>$50.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-3.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-3.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Sweet Orange
                                                </a>
                                              </h4>
                                              <p>$40.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-4.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-4.jpg" alt="" />
                                          </div>
                                          <ul className="single-product-style1__overlay">
                                            <li>
                                              <p>5% Off</p>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Cow Fresh Milk (1L)
                                                </a>
                                              </h4>
                                              <p><del>$33.00</del>$28.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-5.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-5.jpg" alt="" />
                                          </div>
                                          <ul className="single-product-style1__overlay">
                                            <li>
                                              <p>5% Off</p>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Crunchy Almonds
                                                </a>
                                              </h4>
                                              <p><del>$25.00</del>$20.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-6.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-6.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Organic Honey
                                                </a>
                                              </h4>
                                              <p>$35.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-7.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-7.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Fresh Broccoli
                                                </a>
                                              </h4>
                                              <p>$44.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-8.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-8.jpg" alt="" />
                                            <ul className="single-product-style1__overlay">
                                              <li>
                                                <p>New</p>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Fresh Strawberries
                                                </a>
                                              </h4>
                                              <p>$27.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-9.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-9.jpg" alt="" />
                                            <ul className="single-product-style1__overlay">
                                              <li>
                                                <p>3% Off</p>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Sweet Corn
                                                </a>
                                              </h4>
                                              <p><del>$49.00</del>$52.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-10.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-10.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Wheat Flour (12KG)
                                                </a>
                                              </h4>
                                              <p><del>$33.00</del>$28.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-11.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-11.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Crisp Carrots
                                                </a>
                                              </h4>
                                              <p>$40.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-12.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-12.jpg" alt="" />
                                          </div>
                                          <ul className="single-product-style1__overlay">
                                            <li>
                                              <p>New</p>
                                            </li>
                                            <li>
                                              <p>7% Off</p>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Organic Beetroot
                                                </a>
                                              </h4>
                                              <p><del>$36.00</del>$43.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <ul className="single-product-style1__overlay">
                                              <li>
                                                <p>New</p>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Chicken Eggs (12P)
                                                </a>
                                              </h4>
                                              <p>$55.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                  {/*Product All Single Start*/}
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="single-product-style2">
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__img">
                                            <img src="assets/images/shop/shop-product-2-2.jpg" alt="" />
                                            <img src="assets/images/shop/shop-product-2-2.jpg" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="single-product-style2__content">
                                            <div className="single-product-style2__review">
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                              <i className="fa fa-star" />
                                            </div>
                                            <div className="single-product-style2__text">
                                              <h4>
                                                <a href="product-details.html">
                                                  Golden Ginger
                                                </a>
                                              </h4>
                                              <p>$80.00</p>
                                            </div>
                                            <ul className="single-product-style2__info">
                                              <li>
                                                <a href="/products#" title="Add to Wishlist">
                                                  <i className="fa fa-regular fa-heart">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Add to cart">
                                                  <i className="fa fa-solid fa-cart-plus">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Quick View">
                                                  <i className="fa fa-regular fa-eye">
                                                  </i>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/products#" title="Compare">
                                                  <i className="fa fa-solid fa-repeat">
                                                  </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Product All Single Start*/}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*End Tab*/}
                        </div>
                        {/*End Tabs Content Box*/}
                      </div>
                      <ul className="styled-pagination text-center clearfix list-unstyled">
                        <li className="arrow prev active">
                          <a href="/products#">
                            <span className="fas fa-angle-left" />
                          </a>
                        </li>
                        <li><a href="/products#">1</a></li>
                        <li><a href="/products#">2</a></li>
                        <li><a href="/products#">3</a></li>
                        <li className="arrow next">
                          <a href="/products#">
                            <span className="fas fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-12">
                  <div className="product__sidebar">
                    <div className="shop-search product__sidebar-single">
                      <form action="products.html#">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i className="fa fa-search" /></button>
                      </form>
                    </div>
                    <div className="product__price-ranger product__sidebar-single">
                      <h3 className="product__sidebar-title">Price</h3>
                      <div className="price-ranger">
                        <div id="slider-range" />
                        <div className="ranger-min-max-block">
                          <input type="text" readOnly className="min" />
                          <span>-</span>
                          <input type="text" readOnly className="max" />
                          <input type="submit" defaultValue="Filter" />
                        </div>
                      </div>
                    </div>
                    <div className="shop-category product__sidebar-single">
                      <h3 className="product__sidebar-title">Categories</h3>
                      <ul className="list-unstyled">
                        <li><a href="/products#">Crop Cultivation</a></li>
                        <li className="active"><a href="/products#">Tips &amp; Tricks</a></li>
                        <li><a href="/products#">Technology</a></li>
                        <li><a href="/products#">Animal care</a></li>
                        <li><a href="/products#">Natural &amp; Organic</a></li>
                      </ul>
                    </div>
                    <div className="shop-product-recent-products product__sidebar-single">
                      <h3 className="product__sidebar-title">Recent Products</h3>
                      <ul className="clearfix list-unstyled">
                        <li>
                          <div className="img">
                            <img src="assets/images/shop/product-thumb-1.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><a href="/products#">Organic Capsicum</a></h5>
                            </div>
                            <div className="price">
                              <p>$33.00</p>
                            </div>
                            <div className="review">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star color" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="img">
                            <img src="assets/images/shop/product-thumb-2.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><a href="/products#">Natural Green Peas</a></h5>
                            </div>
                            <div className="price">
                              <p>$39.00</p>
                            </div>
                            <div className="review">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star color" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="img">
                            <img src="assets/images/shop/product-thumb-3.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><a href="/products#">Natural Lemon</a></h5>
                            </div>
                            <div className="price">
                              <p>$54.00</p>
                            </div>
                            <div className="review">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star color" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="img">
                            <img src="assets/images/shop/product-thumb-4.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><a href="/products#">Organic Mango</a></h5>
                            </div>
                            <div className="price">
                              <p>$44.00</p>
                            </div>
                            <div className="review">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star color" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-product-tags product__sidebar-single">
                      <h3 className="product__sidebar-title">Product Tags</h3>
                      <div className="shop-product__tags-list">
                        <a href="/products#">Aggrotech</a>
                        <a href="/products#">Crop</a>
                        <a href="/products#">Grain</a>
                        <a href="/products#">Organic</a>
                        <a href="/products#">Cultivation</a>
                        <a href="/products#">Agro</a>
                      </div>
                    </div>
                    {/*Start Products Style1 Single Sidear */}
                    <div className="shop-product-tags product__sidebar-single style">
                      <h3 className="product__sidebar-title">Reviews</h3>
                      <div className="sidebar-rating-box sidebar-rating-box--style2">
                        <ul className="list-unstyled">
                          <li>
                            <input type="radio" id="fivestar" name="rating" defaultChecked />
                            <label htmlFor="fivestar">
                              <i />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="fourstar" name="rating" />
                            <label htmlFor="fourstar">
                              <i />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star gray" />
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="threestar" name="rating" />
                            <label htmlFor="threestar">
                              <i />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="twostar" name="rating" />
                            <label htmlFor="twostar">
                              <i />
                              <span className="fas fa-star" />
                              <span className="fas fa-star" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="onestar" name="rating" />
                            <label htmlFor="onestar">
                              <i />
                              <span className="fas fa-star" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                              <span className="fas fa-star gray" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*End Products Style1 Single Sidear */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Product End*/}
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
                        <a href="/products#"><i className="fab fa-facebook-f" /></a>
                        <a href="/products#"><i className="fab fa-twitter" /></a>
                        <a href="/products#"><i className="fab fa-instagram" /></a>
                        <a href="/products#"><i className="fab fa-pinterest-p" /></a>
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
                <a href="/products#" className="fab fa-twitter" />
                <a href="/products#" className="fab fa-facebook-square" />
                <a href="/products#" className="fab fa-pinterest-p" />
                <a href="/products#" className="fab fa-instagram" />
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
        <a href="/products#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> Go Back Top</span>
        </a>
        {/* template js */}
      </div>

    </>
  );
}
