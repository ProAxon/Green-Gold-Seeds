"use client";

import { useState } from "react";
import { StrapiProduct, mapStrapiProductToProduct } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: StrapiProduct[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  if (!products || products.length === 0) {
    return (
      <div className="product__all">
        <div className="product__all-tab">
          <p>No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product__all">
      <div className="product__all-tab">
        <div className="product__all-tab-button">
          <ul className="tabs-button-box clearfix">
            <li
              data-tab="#grid"
              className={`tab-btn-item ${viewMode === "grid" ? "active-btn-item" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <div className="product__all-tab-button-icon one">
                <i className="fa fa-solid fa-bars" />
              </div>
            </li>
            <li
              data-tab="#list"
              className={`tab-btn-item ${viewMode === "list" ? "active-btn-item" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <div className="product__all-tab-button-icon">
                <i className="fa fa-solid fa-list-ul" />
              </div>
            </li>
          </ul>
        </div>
        <div className="tabs-content-box">
          <div
            className={`tab-content-box-item ${viewMode === "grid" ? "tab-content-box-item-active" : ""}`}
            id="grid"
          >
            <div className="product__all-tab-content-box-item">
              <div className="product__all-tab-single">
                <div className="row">
                  {products.map((strapiProduct) => {
                    const product = mapStrapiProductToProduct(strapiProduct);
                    return (
                      <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-content-box-item ${viewMode === "list" ? "tab-content-box-item-active" : ""}`}
            id="list"
          >
            <div className="product__all-tab-content-box-item">
              <div className="product__all-tab-single">
                <div className="row">
                  {products.map((strapiProduct) => {
                    const product = mapStrapiProductToProduct(strapiProduct);
                    return (
                      <div key={product.id} className="col-xl-12">
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

