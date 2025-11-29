import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="single-product-style1">
      <div className="single-product-style1__img">
        <img src={product.image} alt={product.name} />
        {product.imageHover && <img src={product.imageHover} alt={product.name} />}
        {product.badge && (
          <ul className="single-product-style1__overlay">
            <li>
              <p>{product.badge}</p>
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
            <Link href={product.href}>{product.name}</Link>
          </h4>
          <p>
            {product.originalPrice ? (
              <>
                <del>${product.originalPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
              </>
            ) : (
              `$${product.price.toFixed(2)}`
            )}
          </p>
        </div>
        <div className="single-product-style1__content-right">
          <div className="single-product-style1__review">
            <i className="fa fa-star" />
            <p>{product.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

