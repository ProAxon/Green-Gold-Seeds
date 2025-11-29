export function ProductFilters() {
  return (
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
  );
}

