export function ProductSidebar() {
  return (
    <div className="col-xl-3 col-lg-12">
      <div className="product__sidebar">
        {/* Product Search */}
        <div className="product__sidebar-single">
          <h3 className="product__sidebar-title">Search</h3>
          <form className="product__sidebar-search-form">
            <input type="text" placeholder="Search here..." />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>

        {/* Product Categories */}
        <div className="product__sidebar-single">
          <h3 className="product__sidebar-title">Categories</h3>
          <ul className="product__sidebar-categories list-unstyled">
            <li>
              <a href="/products#">
                Fresh Produce <span>(12)</span>
              </a>
            </li>
            <li>
              <a href="/products#">
                Dairy Products <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="/products#">
                Livestock <span>(6)</span>
              </a>
            </li>
            <li>
              <a href="/products#">
                Organic Fruits <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="/products#">
                Grains & Cereals <span>(15)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div className="product__sidebar-single">
          <h3 className="product__sidebar-title">Price</h3>
          <div className="product__sidebar-price">
            <div className="price-ranger">
              <input type="text" className="js-range-of" readOnly />
            </div>
            <div className="ranger-min-max-block">
              <input type="text" className="min-block" defaultValue="$10" />
              <span className="devider">-</span>
              <input type="text" className="max-block" defaultValue="$100" />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="product__sidebar-single">
          <h3 className="product__sidebar-title">Rating</h3>
          <ul className="product__sidebar-rating list-unstyled">
            <li>
              <input type="radio" id="fivestar" name="rating" />
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
    </div>
  );
}

