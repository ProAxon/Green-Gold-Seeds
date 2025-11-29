export interface StrapiProduct {
  id: number;
  documentId: string;
  Name: string;
  Price: number | null;
  rating: number | null;
  Tag: string | null;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Image?: {
    data?: Array<{
      id: number;
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }>;
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  imageHover?: string;
  badge?: string;
  href: string;
}

// Map StrapiProduct to Product format
export function mapStrapiProductToProduct(strapiProduct: StrapiProduct): Product {
  // Get the first image from the Image array, or use a placeholder
  const imageUrl = strapiProduct.Image?.data?.[0]?.attributes?.url 
    ? `http://localhost:1337${strapiProduct.Image.data[0].attributes.url}`
    : '/assets/images/products/default-product.png';
  
  // Get second image as hover image if available
  const hoverImageUrl = strapiProduct.Image?.data?.[1]?.attributes?.url
    ? `http://localhost:1337${strapiProduct.Image.data[1].attributes.url}`
    : undefined;

  return {
    id: strapiProduct.id,
    name: strapiProduct.Name,
    price: strapiProduct.Price ?? 0,
    rating: strapiProduct.rating ?? 0,
    image: imageUrl,
    imageHover: hoverImageUrl,
    badge: strapiProduct.Tag ?? undefined,
    href: strapiProduct.link ?? `/products/${strapiProduct.documentId}`,
  };
}

// Fetch products from Strapi API
export async function fetchProducts(): Promise<StrapiProduct[]> {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=Image', {
      cache: 'no-store', // For development, use 'force-cache' in production
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

