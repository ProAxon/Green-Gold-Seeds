"use client";

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { PageLayout } from '@/components/layout/PageLayout';
import { IMAGE_PATHS } from '@/config/images';

// ===== TYPES =====
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
      setPagination(data.meta.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, currentPage]);

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
    <PageLayout variant="two" currentPage="/products">
      {/* ===== PAGE HEADER ===== */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url(${IMAGE_PATHS.pageHeaderBg})` }}>
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
    </PageLayout>
  );
}
