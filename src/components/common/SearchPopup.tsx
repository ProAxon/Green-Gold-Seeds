export function SearchPopup() {
  return (
    <div className="search-popup">
      <div className="color-layer" />
      <button className="close-search">
        <span className="far fa-times fa-fw" />
      </button>
      <form method="post" action="blog.html">
        <div className="form-group">
          <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
}

