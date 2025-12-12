"use client";

import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function ProductsContent() {
  const t = useTranslations();
  return (
    <>
      <NavHighlighter />
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
              <p>{t('sidebar.pleaseFillForm')}</p>
              <form action="https://dreamlayout.mnsithub.com/html/farmology/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                <div className="form-group">
                  <input type="text" name="name" placeholder={t('contact.yourName')} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder={t('contact.yourEmail')} required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder={t('contact.yourText')} required defaultValue={""} />
                </div>
                <div className="form-group message-btn">
                  <button type="submit" className="thm-btn"> {t('common.submitNow')}
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
                  </ul>
                  <div className="main-menu-two__top-right">
                    <div className="main-menu-two__top-time">
                      <div className="main-menu-two__top-time-icon">
                        <span className="fas fa-clock" />
                      </div>
                      <p className="main-menu-two__top-text">{t('common.businessHours')}</p>
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
                        <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                      </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                      <a href="/products#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
                      <ul className="main-menu__list">
                        <li>
                          <Link href="/">{t('nav.home')}</Link>
                        </li>
                          <li>
                            <Link href="/about">{t('nav.about')}</Link>
                          </li>
                          <li className="dropdown">
                            <a href="/products#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                            <ul className="shadow-box">
                              <li><Link href="/services">{t('nav.services')}</Link></li>
                              <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                            </ul>
                          </li>
                        <li className="dropdown">
                          <a href="/products#" onClick={(e) => e.preventDefault()}>{t('nav.shop')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/products">{t('nav.products')}</Link></li>
                            <li><Link href="/products">{t('nav.productDetails')}</Link></li>
                            <li><Link href="/products">{t('nav.cart')}</Link></li>
                            <li><Link href="/products">{t('nav.checkout')}</Link></li>
                            <li><Link href="/products">{t('nav.wishlist')}</Link></li>
                            <li><Link href="/contact">{t('nav.signUp')}</Link></li>
                            <li><Link href="/contact">{t('nav.login')}</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/products#" onClick={(e) => e.preventDefault()}>{t('nav.blog')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/blog">{t('nav.blog')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogStandard')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogLeftSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogRightSidebar')}</Link></li>
                            <li><Link href="/blog">{t('nav.blogDetails')}</Link></li>
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
                        <Link href="/contact"><span className="far fa-users" /></Link>
                      </div>
                      <div className="main-menu-two__btn-box">
                        <Link className="thm-btn" href="/contact">{t('common.getAQuote')}
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
            <div className="sticky-header__content" />{/* /.sticky-header__content */}
          </div>{/* /.stricky-header */}
          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>{t('products.pageTitle')}</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><Link href="/">{t('nav.home')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>{t('products.pageTitle')}</li>
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
                            <p className="product__showing-text">{t('products.showingResults')}</p>
                          </div>
                          <div className="product__showing-sort">
                            <div className="select-box">
                              <select className="wide">
                                <option data-display={t('products.sortByPopular')}>{t('products.sortByPopular')}</option>
                                <option value={1}>{t('products.sortByPopular')}</option>
                                <option value={2}>{t('products.sortByPrice')}</option>
                                <option value={3}>{t('products.sortByRatings')}</option>
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
                                        <img src="/assets/images/shop/shop-product-1-1.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-1.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-2.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-2.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-3.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-3.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-4.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-4.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-5.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-5.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-6.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-6.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-7.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-7.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-8.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-8.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-9.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-9.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-10.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-10.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-11.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-11.jpg" alt="" />
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
                                            <a href="/products">
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
                                        <img src="/assets/images/shop/shop-product-1-12.jpg" alt="" />
                                        <img src="/assets/images/shop/shop-product-1-12.jpg" alt="" />
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
                                            <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-1.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-2.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-2.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-3.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-3.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-4.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-4.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-5.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-5.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-6.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-6.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-7.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-7.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-8.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-8.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-9.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-9.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-10.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-10.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-11.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-11.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-12.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-12.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-1.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-1.jpg" alt="" />
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
                                                <a href="/products">
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
                                            <img src="/assets/images/shop/shop-product-2-2.jpg" alt="" />
                                            <img src="/assets/images/shop/shop-product-2-2.jpg" alt="" />
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
                                                <a href="/products">
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
                      <form action="/products">
                        <input type="text" placeholder={t('products.search')} />
                        <button type="submit"><i className="fa fa-search" /></button>
                      </form>
                    </div>
                    <div className="product__price-ranger product__sidebar-single">
                      <h3 className="product__sidebar-title">{t('products.price')}</h3>
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
                      <h3 className="product__sidebar-title">{t('footer.categories')}</h3>
                      <ul className="list-unstyled">
                        <li><Link href="/products#">{t('products.cropCultivation')}</Link></li>
                        <li className="active"><Link href="/products#">{t('footer.tipsTricks')}</Link></li>
                        <li><Link href="/products#">{t('footer.technology')}</Link></li>
                        <li><Link href="/products#">{t('products.animalCare')}</Link></li>
                        <li><Link href="/products#">{t('footer.naturalOrganic')}</Link></li>
                      </ul>
                    </div>
                    <div className="shop-product-recent-products product__sidebar-single">
                      <h3 className="product__sidebar-title">{t('products.recentProducts')}</h3>
                      <ul className="clearfix list-unstyled">
                        <li>
                          <div className="img">
                            <img src="/assets/images/shop/product-thumb-1.jpg" alt="Product" />
                            <Link href="/products#"><i className="fa fa-link" aria-hidden="true" /></Link>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><Link href="/products#">{t('products.organicCapsicum')}</Link></h5>
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
                            <img src="/assets/images/shop/product-thumb-2.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><Link href="/products#">{t('products.naturalGreenPeas')}</Link></h5>
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
                            <img src="/assets/images/shop/product-thumb-3.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><Link href="/products#">{t('products.naturalLemon')}</Link></h5>
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
                            <img src="/assets/images/shop/product-thumb-4.jpg" alt="Product" />
                            <a href="/products#"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5><Link href="/products#">{t('products.organicMango')}</Link></h5>
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
                      <h3 className="product__sidebar-title">{t('products.productTags')}</h3>
                      <div className="shop-product__tags-list">
                        <Link href="/products#">{t('footer.tags.aggrotech')}</Link>
                        <Link href="/products#">{t('footer.tags.crop')}</Link>
                        <Link href="/products#">{t('footer.tags.grain')}</Link>
                        <Link href="/products#">{t('footer.tags.organic')}</Link>
                        <Link href="/products#">{t('products.cultivation')}</Link>
                        <Link href="/products#">{t('footer.tags.agro')}</Link>
                      </div>
                    </div>
                    {/*Start Products Style1 Single Sidear */}
                    <div className="shop-product-tags product__sidebar-single style">
                      <h3 className="product__sidebar-title">{t('footer.reviews')}</h3>
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
                  <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
                  </div>
                  <h3 className="footer-widget-two__newsletter-title" dangerouslySetInnerHTML={{ __html: t('footer.newsletter.title') }} />
                  <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                    <div className="footer-widget-two__newsletter-form-input-box">
                      <input type="email" placeholder="Enter email" name="EMAIL" />
                    </div>
                    <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">{t('common.subscribe')}
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
                          <p>{t('common.businessHoursFull')}<span>{t('common.businessHoursTime')}</span></p>
                        </li>
                        <li>
                          <p>{t('footer.openingTime.saturday')}<span>{t('footer.openingTime.saturdayHours')}</span></p>
                        </li>
                        <li>
                          <p>{t('footer.openingTime.sunday')}<span>{t('footer.openingTime.sundayHours')}</span></p>
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
                        <h3 className="footer-widget-two__title">{t('footer.quickLinks.title')}</h3>
                      </div>
                      <div className="footer-widget-two__link-box">
                        <ul className="footer-widget-two__link list-unstyled">
                          <li><span className="fas fa-wheat" /><Link href="/about">{t('footer.quickLinks.aboutUs')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/services">{t('footer.quickLinks.portfolio')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/faq">{t('footer.quickLinks.helpFaqs')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/blog">{t('footer.quickLinks.blog')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/services">{t('footer.quickLinks.services')}</Link></li>
                          <li><span className="fas fa-wheat" /><Link href="/contact">{t('footer.quickLinks.contact')}</Link></li>
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
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.freshProduce')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.livestockProducts')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.organicFarming')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.cropsGrains')}</Link></li>
                        <li><span className="fas fa-wheat" /><Link href="/products">{t('footer.ourProducts.poultry')}</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget-two__logo">
                  <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="site-footer-two__bottom">
              <div className="container">
                <div className="site-footer-two__bottom-inner">
                  <p className="site-footer-two__bottom-text">© Copyright 2023 by <a href="https://ajeetseed.co.in" target="_blank" rel="noopener noreferrer">ajeetseed.co.in</a></p>
                  <ul className="list-unstyled site-footer-two__bottom-menu">
                    <li><Link href="/contact">{t('footer.support')}</Link></li>
                    <li><Link href="/about">{t('footer.termsAndCondition')}</Link></li>
                    <li><Link href="/about">{t('footer.privacyAndPolicy')}</Link></li>
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
              <Link href="/" aria-label="logo image"><img src="/assets/images/resources/logo-1.png" width={150} alt="" /></Link>
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
          <form method="post" action="/blog">
            <div className="form-group">
              <input type="search" name="search-field" defaultValue="" placeholder={t('common.searchHere')} required />
              <button type="submit"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* End Search Popup */}
        <Link href="/products#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </Link>
        {/* template js */}
      </div>

    </>
  );
}
