"use client";

import dynamic from 'next/dynamic';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavHighlighter = dynamic(() => import("@/components/NavHighlighter").then(mod => ({ default: mod.NavHighlighter })), { ssr: false });

interface Product {
  id: number;
  documentId: string;
  locale: string;
  Name: string;
  Description: string;
  Variety_Name: string;
  Image: any;
}

export function ProductsDetailsContent() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const productId = params?.id as string;
  const [showPreloader, setShowPreloader] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
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

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      
      try {
        setLoading(true);
        setError(null);
        const apiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
        const headers: HeadersInit = {};
        
        if (apiKey) {
          headers['Authorization'] = `Bearer ${apiKey}`;
        }
        
        // Try to fetch by documentId first, then by id
        // Include locale and fields like ProductsContent for consistency
        // Add locale filter to ensure we only get products in the requested locale
        const apiUrl = `/strapi/api/products?locale=${locale}&fields[0]=documentId&fields[1]=locale&fields[2]=Name&fields[3]=Description&fields[4]=Variety_Name&filters[documentId][$eq]=${productId}&filters[locale][$eq]=${locale}&populate[Image][fields][1]=url`;
        
        const response = await fetch(apiUrl, {
          headers,
        });
        
        if (!response.ok) {
          // If documentId doesn't work, try fetching by id
          const apiUrlById = `/strapi/api/products/${productId}?locale=${locale}&fields[0]=documentId&fields[1]=locale&fields[2]=Name&fields[3]=Description&fields[4]=Variety_Name&populate[Image][fields][1]=url`;
          
          const responseById = await fetch(apiUrlById, {
            headers,
          });
          
          if (!responseById.ok) {
            throw new Error(`Failed to fetch product. Status: ${responseById.status}`);
          }
          
          const dataById = await responseById.json();
          
          // Strictly verify the product locale matches the current locale
          if (dataById.data && dataById.data.locale !== locale) {
            console.warn(`Product locale (${dataById.data.locale}) does not match current locale (${locale}). Product may not be available in ${locale}.`);
            // Don't set the product if locale doesn't match - show error instead
            throw new Error(`Product not available in ${locale} locale. Available in ${dataById.data.locale}.`);
          }
          
          setProduct(dataById.data);
        } else {
          const data = await response.json();
          if (data.data && data.data.length > 0) {
            // Filter to only get products that match the current locale
            const product = data.data.find((p: Product) => p.locale === locale) || data.data[0];
            
            // Strictly verify the product locale matches the current locale
            if (product.locale !== locale) {
              console.warn(`Product locale (${product.locale}) does not match current locale (${locale}). Product may not be available in ${locale}.`);
              // Don't set the product if locale doesn't match - show error instead
              throw new Error(`Product not available in ${locale} locale. Available in ${product.locale}.`);
            }
            
            setProduct(product);
          } else {
            throw new Error('Product not found for the specified locale');
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching product:', err);
        console.error('Locale:', locale, 'ProductId:', productId);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, locale]);

  const getProductImage = (product: Product | null) => {
    if (!product) return '/assets/images/backgrounds/1-1.png';
    
    // Handle both populated Strapi media objects and simple media objects with url
    const nestedUrl = product.Image?.data?.attributes?.url;
    if (nestedUrl) {
      return `/strapi${nestedUrl}`;
    }

    const flatUrl = (product.Image as { url?: string } | undefined)?.url;
    if (flatUrl) {
      return `/strapi${flatUrl}`;
    }

    // Fallback to default product image (same as ProductsContent)
    return '/assets/images/backgrounds/1-1.png';
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
                      <div className="main-menu-two__search-box">
                        <span className="main-menu-two__search searcher-toggler-box fal fa-search" />
                      </div>
                      <LanguageSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="stricky-header stricked-menu main-menu main-menu-two">
            <div className="sticky-header__content" />
          </div>

          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>
            <div className="container">
              <div className="page-header__inner">
                <h3>{product ? (product.Variety_Name || product.Name) : t('productDetails.title')}</h3>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li><Link href="/">{t('nav.home')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li><Link href="/products">{t('nav.products')}</Link></li>
                    <li><span className="fas fa-angle-right" /></li>
                    <li>{product ? (product.Variety_Name || product.Name) : t('productDetails.title')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}

          {/*Start Product Details*/}
          <section className="product-details">
            <div className="container">
              {loading && (
                <div className="text-center" style={{ padding: '50px' }}>
                  <p>{t('common.loading')}</p>
                </div>
              )}
              {error && !loading && (
                <div className="text-center" style={{ padding: '50px' }}>
                  <p>{error}</p>
                  <Link href="/products" className="thm-btn">{t('nav.products')}</Link>
                </div>
              )}
              {product && !loading && !error && (
                <div className="row">
                  <div className="col-lg-6 col-xl-6">
                    <div className="product-details__left">
                      <div className="product-details__left-inner">
                        <div className="product-details__content-box">
                          <div className="swiper-container" id="shop-details-one__carousel">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="product-details__img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="product-details__img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="product-details__img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-details__nav">
                            <div className="swiper-button-next" id="product-details__swiper-button-prev">
                              <i className="fal fa-long-arrow-left" />
                            </div>
                            <div className="swiper-button-prev" id="product-details__swiper-button-next">
                              <i className="fal fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                        <div className="product-details__thumb-box">
                          <div className="swiper-container" id="shop-details-one__thumb">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="product-details__thumb-img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="product-details__thumb-img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="product-details__thumb-img">
                                  <img src={getProductImage(product)} alt={product.Name} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-xl-6">
                    <div className="product-details__right">
                      <div className="product-details__top">
                        <h3 className="product-details__title">
                          {product.Variety_Name || product.Name}
                        </h3>
                        {product.Variety_Name && product.Name && product.Variety_Name !== product.Name && (
                          <p className="product-details__subtitle" style={{ marginTop: '10px', fontSize: '18px', color: '#666', fontWeight: 'bold' }}>
                            {product.Name}
                          </p>
                        )}
                      </div>
                      <div className="product-details__content">
                        <p className="product-details__content-text1">
                          {product.Description || t('productDetails.description')}
                        </p>
                      </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          {/*End Product Details*/}

          {/*Site Footer Start*/}
          <footer className="site-footer">
            <div className="site-footer__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/site-footer-bg.jpg)' }}>
            </div>
            <div className="site-footer__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__copyright">
                        <p className="site-footer__copyright-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*Site Footer End*/}
        </div>
        {/* /.page-wrapper */}
      </div>
    </>
  );
}

