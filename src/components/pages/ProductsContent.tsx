"use client";

import dynamic from 'next/dynamic';
const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  documentId: string;
  locale: string;
  Name: string;
  Description: string;
  Variety_Name: string;
  Image: any;
}

interface ProductsResponse {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export function ProductsContent() {
  const t = useTranslations();
  const locale = useLocale();
  const [showPreloader, setShowPreloader] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0
  });
  
  const fetchProducts = async (page: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      const apiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
      const headers: HeadersInit = {};
      
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }
      
      const response = await fetch(
        `${baseUrl}/api/products?locale=${locale}&fields[0]=documentId&fields[1]=locale&fields[2]=Name&fields[3]=Description&fields[4]=Variety_Name&populate[Image][fields][1]=url&pagination[page]=${page}&pagination[pageSize]=25`,
        {
          headers,
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data: ProductsResponse = await response.json();
      setProducts(data.data);
      console.log(data.data);
      setPagination(data.meta.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, currentPage]);

  useEffect(() => {
    // Hide preloader after component mounts
    const hidePreloader = () => {
      setShowPreloader(false);
    };
    
    // Hide immediately if DOM is ready
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 300));
      // Fallback timeout
      setTimeout(hidePreloader, 1000);
    }
  }, []);

  const getProductImage = (product: Product) => {
    // Handle both populated Strapi media objects and simple media objects with url
    const nestedUrl = product.Image?.data?.attributes?.url;
    if (nestedUrl) {
      return `/strapi${nestedUrl}`;
    }

    const flatUrl = (product.Image as { url?: string } | undefined)?.url;
    if (flatUrl) {
      return `/strapi${flatUrl}`;
    }

    // Fallback to default product image
    return '/assets/images/backgrounds/1-1.png';
  };

  const renderGridProduct = (product: Product, index: number) => {
    const imageUrl = getProductImage(product);
    const imageIndex = (index % 12) + 1;
    
    return (
      <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
        <div className="single-product-style1">
          <div className="single-product-style1__img">
            <img src={imageUrl} alt={product.Name} />
            <img src={imageUrl} alt={product.Name} />
            {index % 3 === 0 && (
              <ul className="single-product-style1__overlay">
                <li>
                  <p>New</p>
                </li>
              </ul>
            )}
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
                <Link href={`/products/${product.documentId || product.id}`}>
                  {product.Variety_Name || product.Name}
                </Link>
              </h4>
              <p>{product.Name}</p>
            </div>
            <div className="single-product-style1__content-right">
              <div className="single-product-style1__review">
                <i className="fa fa-star" />
                <p>4.{(5 + index % 5).toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderListProduct = (product: Product, index: number) => {
    const imageUrl = getProductImage(product);
    const imageIndex = (index % 12) + 1;
    
    return (
      <div key={product.id} className="col-xl-6 col-lg-6">
        <div className="single-product-style2">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="single-product-style2__img">
                <img src={imageUrl} alt={product.Name} />
                <img src={imageUrl} alt={product.Name} />
                {index % 3 === 0 && (
                  <ul className="single-product-style1__overlay">
                    <li>
                      <p>New</p>
                    </li>
                  </ul>
                )}
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
                    <Link href={`/products/${product.documentId || product.id}`}>
                      {product.Variety_Name || product.Name}
                    </Link>
                  </h4>
                  <p>{product.Name}</p>
                </div>
                <ul className="single-product-style2__info">
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
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <NavHighlighter />
      <div>
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />
        {/*Start Preloader*/}
        <div 
          id="preloader" 
          suppressHydrationWarning
          style={{ 
            opacity: showPreloader ? 1 : 0, 
            transition: 'opacity 0.5s ease',
            pointerEvents: showPreloader ? 'auto' : 'none',
            display: showPreloader ? 'block' : 'none'
          }}
        >
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
                        <p><a href="tel:+918888866031">+91 88888 66031</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-email" />
                      </div>
                      <div className="text">
                        <p><a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
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
                      <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
                      <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
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
                          {/* Services dropdown commented out - temporarily disabled
                        <li className="dropdown">
                            <a href="/products#" onClick={(e) => e.preventDefault()}>{t('nav.services')}</a>
                          <ul className="shadow-box">
                              <li><Link href="/services">{t('nav.services')}</Link></li>
                              <li><Link href="/diagnostics-test">{t('nav.diagnosticTest')}</Link></li>
                          </ul>
                        </li>
                          */}
                        <li className="dropdown">
                          <a href="/products#" onClick={(e) => e.preventDefault()}>{t('nav.products')}</a>
                          <ul className="shadow-box">
                            <li><Link href="/products">{t('nav.productCategories.allProducts')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.cottonSeeds')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.wheatSeeds')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.vegetableSeeds')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.oilseeds')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.pulses')}</Link></li>
                            <li><Link href="/products">{t('nav.productCategories.cereals')}</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/blog">{t('nav.blog')}</Link>
                        </li>
                        <li>
                          <Link href="/contact">{t('nav.contact')}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu-two__right">
                      <LanguageSwitcher />
                      {/* Search, Cart, and Get A Quote components removed */}
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
                            <li 
                              data-tab="#grid" 
                              className={`tab-btn-item ${viewMode === 'grid' ? 'active-btn-item' : ''}`}
                              onClick={() => setViewMode('grid')}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="product__all-tab-button-icon one">
                                <i className="fa fa-solid fa-bars" />
                              </div>
                            </li>
                            <li 
                              data-tab="#list" 
                              className={`tab-btn-item ${viewMode === 'list' ? 'active-btn-item' : ''}`}
                              onClick={() => setViewMode('list')}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="product__all-tab-button-icon">
                                <i className="fa fa-solid fa-list-ul" />
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/*Start Tabs Content Box*/}
                        <div className="tabs-content-box">
                          {/*Start Tab*/}
                          <div className={`tab-content-box-item ${viewMode === 'grid' ? 'tab-content-box-item-active' : ''}`} id="grid">
                            <div className="product__all-tab-content-box-item">
                              <div className="product__all-tab-single">
                                {loading ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p>{t('common.loading') || 'Loading...'}</p>
                                      </div>
                                ) : error ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p style={{ color: 'red' }}>{error}</p>
                                        </div>
                                ) : products.length === 0 ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p>{t('products.noProducts') || 'No products found'}</p>
                                          </div>
                                ) : (
                                  <div className="row">
                                    {products.map((product, index) => renderGridProduct(product, index))}
                                        </div>
                                )}
                              </div>
                            </div>
                          </div>
                          {/*End Tab*/}
                          {/*Start Tab*/}
                          <div className={`tab-content-box-item ${viewMode === 'list' ? 'tab-content-box-item-active' : ''}`} id="list">
                            <div className="product__all-tab-content-box-item">
                              <div className="product__all-tab-single">
                                {loading ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p>{t('common.loading') || 'Loading...'}</p>
                                          </div>
                                ) : error ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p style={{ color: 'red' }}>{error}</p>
                                        </div>
                                ) : products.length === 0 ? (
                                  <div className="text-center" style={{ padding: '50px' }}>
                                    <p>{t('products.noProducts') || 'No products found'}</p>
                                            </div>
                                ) : (
                                      <div className="row">
                                    {products.map((product, index) => renderListProduct(product, index))}
                                          </div>
                                )}
                                        </div>
                            </div>
                          </div>
                          {/*End Tab*/}
                        </div>
                        {/*End Tabs Content Box*/}
                      </div>
                      <ul className="styled-pagination text-center clearfix list-unstyled">
                        <li className={`arrow prev ${currentPage === 1 ? 'active' : ''}`}>
                          <a 
                            href="/products#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                              }
                            }}
                          >
                            <span className="fas fa-angle-left" />
                          </a>
                        </li>
                        {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map((page) => (
                          <li key={page}>
                            <a 
                              href="/products#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                              }}
                              style={{ 
                                fontWeight: currentPage === page ? 'bold' : 'normal',
                                color: currentPage === page ? '#ff6b35' : 'inherit'
                              }}
                            >
                              {page}
                            </a>
                          </li>
                        ))}
                        <li className={`arrow next ${currentPage === pagination.pageCount ? 'active' : ''}`}>
                          <a 
                            href="/products#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < pagination.pageCount) {
                                setCurrentPage(currentPage + 1);
                              }
                            }}
                          >
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
                        {products.slice(0, 4).map((product, index) => {
                          const imageUrl = getProductImage(product);
                          return (
                            <li key={product.id}>
                          <div className="img">
                                <img src={imageUrl} alt={product.Name} />
                                <Link href={`/products/${product.documentId || product.id}`}><i className="fa fa-link" aria-hidden="true" /></Link>
                          </div>
                          <div className="content">
                            <div className="title">
                                  <h5><Link href={`/products/${product.documentId || product.id}`}>{product.Variety_Name || product.Name}</Link></h5>
                            </div>
                            <div className="price">
                                  <p>{product.Name}</p>
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
                          );
                        })}
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
            {/* site-footer-two__middle section removed */}
            <div className="site-footer-two__bottom">
              <div className="container">
                <div className="site-footer-two__bottom-inner">
                  <p className="site-footer-two__bottom-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
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
                <a href="mailto:greengoldseeds@rediffmail.com">greengoldseeds@rediffmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:+918888866031">+91 88888 66031</a>
              </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="https://www.youtube.com/channel/UCuKrb0ndVNn2LeV5Mawb0OQ/featured" target="_blank" rel="noopener noreferrer" className="fab fa-youtube" />
                <a href="https://www.facebook.com/GreenGoldSeedsAurangabad" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square" />
                <a href="https://www.instagram.com/greegoldseeds/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
              </div>{/* /.mobile-nav__social */}
            </div>{/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        {/* Search Popup */}
        {/* Search Popup removed */}
        <Link href="/products#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
          <span className="scroll-to-top__text"> {t('common.goBackTop')}</span>
        </Link>
        {/* template js */}
      </div>

    </>
  );
}
