function PageHeader() {
  return (
    <section className="page mobile-wrapper">
      <div className="flex flex-ai-c flex-jc-sb page__wrapper">
        <div className="description">
          <h1>All Products</h1>
          <p>A 360° look at Lumin</p>
        </div>
        <div className="product__select">
          <select defaultValue="">
            <option value="">
              Filter By
            </option>
            <option  value="all-products">
              All Products
            </option>
            <option value="new-products">New Products</option>
            <option value="sets">Sets</option>
            <option value="skincare">Skincare</option>
            <option value="hair-and-body">Hair &amp; Body Care</option>
            <option value="accesories">Accesories</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
