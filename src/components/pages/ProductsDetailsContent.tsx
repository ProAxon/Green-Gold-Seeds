"use client";

import React, { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { PageLayout } from '@/components/layout/PageLayout';
import { IMAGE_PATHS } from '@/config/images';

// Function to format description with bullet points
const formatDescription = (description: string | null | undefined): React.JSX.Element | null => {
  if (!description) return null;
  
  // Handle escape characters and normalize line breaks
  let normalizedDesc = description
    .replace(/\\n/g, '\n')      // Convert \n to actual newline
    .replace(/\\r/g, '\r')      // Convert \r to carriage return
    .replace(/\\t/g, '\t');     // Convert \t to tab
  
  // Split by lines and process
  const lines = normalizedDesc.split(/\r?\n/).filter(line => line.trim());
  const formattedContent: React.JSX.Element[] = [];
  let currentList: string[] = [];
  
  const flushList = () => {
    if (currentList.length > 0) {
      formattedContent.push(
        <ul key={`list-${formattedContent.length}`} className="product-details__features-list" style={{ 
          listStyle: 'none', 
          paddingLeft: '0',
          marginTop: '15px',
          marginBottom: '15px'
        }}>
          {currentList.map((item, index) => (
            <li key={index} style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative',
              lineHeight: '1.6'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#f5cb4b',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>•</span>
              {item.trim()}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Check if line starts with bullet point (• or -)
    if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
      // Remove the bullet and add to current list
      const itemText = trimmedLine.replace(/^[•\-]\s*/, '').trim();
      if (itemText) {
        currentList.push(itemText);
      }
    } else if (trimmedLine.includes(':') && trimmedLine.length < 100 && !trimmedLine.startsWith('•') && !trimmedLine.startsWith('-')) {
      // This might be a section heading (e.g., "Special Features :")
      flushList();
      if (trimmedLine.endsWith(':')) {
        formattedContent.push(
          <p key={`heading-${index}`} style={{ 
            marginTop: '20px',
            marginBottom: '10px',
            fontSize: '18px',
            lineHeight: '1.6'
          }}>
            {trimmedLine}
          </p>
        );
      } else {
        // Regular text line
        if (currentList.length > 0) {
          flushList();
        }
        formattedContent.push(
          <p key={`text-${index}`} style={{ marginBottom: '10px', lineHeight: '1.6' }}>
            {trimmedLine}
          </p>
        );
      }
    } else if (trimmedLine) {
      // Regular text line
      if (currentList.length > 0) {
        flushList();
      }
      formattedContent.push(
        <p key={`text-${index}`} style={{ marginBottom: '10px', lineHeight: '1.6' }}>
          {trimmedLine}
        </p>
      );
    }
  });
  
  // Flush any remaining list items
  flushList();
  
  return formattedContent.length > 0 ? <div>{formattedContent}</div> : null;
};

interface Product {
  id: number;
  documentId: string;
  locale: string;
  Name: string;
  Description: string;
  Variety_Name: string;
  Image: any;
}

// ===== MAIN COMPONENT =====
export function ProductsDetailsContent() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const productId = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [relatedError, setRelatedError] = useState<string | null>(null);

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
        
        console.log('[ProductDetails] Fetching product', {
          productId,
          locale,
          apiUrl,
        });

        const response = await fetch(apiUrl, {
          headers,
        });
        
        if (!response.ok) {
          // If documentId doesn't work, try fetching by id
          const apiUrlById = `/strapi/api/products/${productId}?locale=${locale}&fields[0]=documentId&fields[1]=locale&fields[2]=Name&fields[3]=Description&fields[4]=Variety_Name&populate[Image][fields][1]=url`;
          
          console.log('[ProductDetails] Fetching product by ID fallback', {
            productId,
            locale,
            apiUrlById,
            status: response.status,
          });

          const responseById = await fetch(apiUrlById, {
            headers,
          });
          
          if (!responseById.ok) {
            throw new Error(`Failed to fetch product. Status: ${responseById.status}`);
          }
          
          const dataById = await responseById.json();
          console.log('[ProductDetails] Product by ID response', dataById);
          
          // Strictly verify the product locale matches the current locale
          if (dataById.data && dataById.data.locale !== locale) {
            // Don't set the product if locale doesn't match - show error instead
            throw new Error(`Product not available in ${locale} locale. Available in ${dataById.data.locale}.`);
          }
          
          setProduct(dataById.data);
        } else {
          const data = await response.json();
          console.log('[ProductDetails] Product by documentId response', data);
          if (data.data && data.data.length > 0) {
            // Filter to only get products that match the current locale
            const product = data.data.find((p: Product) => p.locale === locale) || data.data[0];
            
            // Strictly verify the product locale matches the current locale
            if (product.locale !== locale) {
              // Don't set the product if locale doesn't match - show error instead
              throw new Error(`Product not available in ${locale} locale. Available in ${product.locale}.`);
            }
            
            setProduct(product);
          } else {
            throw new Error('Product not found for the specified locale');
          }
        }
      } catch (err) {
        console.error('[ProductDetails] Error fetching product', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, locale]);

  useEffect(() => {
    if (!product) {
      console.log('[RelatedProducts] No product loaded yet, skipping related fetch');
      setRelatedProducts([]);
      return;
    }

    const baseName = (product.Name || product.Variety_Name || '').trim();
    console.log('[RelatedProducts] Derived baseName', {
      baseName,
      productName: product.Name,
      varietyName: product.Variety_Name,
    });
    if (!baseName) {
      setRelatedProducts([]);
      return;
    }

    fetchRelatedProducts(baseName, product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, locale]);

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

  const fetchRelatedProducts = async (baseName: string, currentProduct: Product) => {
    if (!baseName) return;

    try {
      setRelatedLoading(true);
      setRelatedError(null);

      const apiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
      const headers: HeadersInit = {};

      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }

      // Use Next.js proxy to avoid CORS issues and mixed content (HTTPS -> HTTP)
      const encodedName = encodeURIComponent(baseName);
      const relatedUrl = `/strapi/api/products?locale=${locale}&filters[Name][$eq]=${encodedName}&fields[0]=documentId&fields[1]=locale&fields[2]=Name&fields[3]=Description&fields[4]=Variety_Name&populate[Image][fields][1]=url&pagination[page]=1&pagination[pageSize]=25`;
      console.log('[RelatedProducts] Fetching related products', {
        baseName,
        encodedName,
        locale,
        relatedUrl,
        currentKey: currentProduct.documentId || String(currentProduct.id),
      });

      const response = await fetch(
        relatedUrl,
        {
          headers,
        }
      );

      if (!response.ok) {
        console.error('[RelatedProducts] Non-OK response', {
          status: response.status,
          statusText: response.statusText,
        });
        throw new Error('Failed to fetch related products');
      }

      const data = await response.json();
      const items: Product[] = data?.data ?? [];
      console.log('[RelatedProducts] Raw related items', {
        count: items.length,
        ids: items.map((p) => ({ id: p.id, documentId: p.documentId, name: p.Name })),
      });

      const currentKey = currentProduct.documentId || String(currentProduct.id);
      const filtered = items
        .filter((p) => (p.documentId || String(p.id)) !== currentKey)
        .slice(0, 4);
      console.log('[RelatedProducts] Filtered related items', {
        currentKey,
        filteredCount: filtered.length,
        filteredIds: filtered.map((p) => ({ id: p.id, documentId: p.documentId, name: p.Name })),
      });

      setRelatedProducts(filtered);
    } catch (err) {
      console.error('[RelatedProducts] Error fetching related products', err);
      setRelatedError(
        err instanceof Error
          ? err.message
          : 'An error occurred while loading related products'
      );
      setRelatedProducts([]);
    } finally {
      setRelatedLoading(false);
    }
  };


  return (
    <PageLayout variant="two" currentPage="/products">
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url(${IMAGE_PATHS.pageHeaderBg})` }}>
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
                        <div className="product-details__content-text1">
                          {formatDescription(product.Description) || (
                            <p>{t('productDetails.description')}</p>
                          )}
                        </div>
                      </div>
              </div>
              </div>
            </div>
          )}
          {!loading && !error && !relatedLoading && relatedProducts.length > 0 && (
            <section className="related-products" style={{ marginTop: '60px' }}>
              <div className="container">
                <div className="related-products__title text-center">
                  <h3 style={{ marginBottom: '10px' }}>Related Products</h3>
                  <p style={{ color: '#666' }}>You might also like these.</p>
                </div>
                <div className="row">
                  {relatedProducts.map((item, index) => {
                    const imageUrl = getProductImage(item);
                    return (
                      <div
                        key={item.id}
                        className="col-xl-3 col-lg-4 col-md-6"
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <div className="single-product-style1" style={{ maxWidth: 370, width: '100%' }}>
                          <div className="single-product-style1__img">
                            <img src={imageUrl} alt={item.Name} />
                            <img src={imageUrl} alt={item.Name} />
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
                                <Link href={`/products/${item.documentId || item.id}`}>
                                  {item.Variety_Name || item.Name}
                                </Link>
                              </h4>
                              <p>{item.Name}</p>
                            </div>
                            <div className="single-product-style1__content-right">
                              <div className="single-product-style1__review">
                                <i className="fa fa-star" />
                                <p>4.{(5 + (index % 5)).toFixed(1)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

