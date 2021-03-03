

export default function ProductList({ children }) {

  return (
    <section className="products">
      <div className="flex flex-fw-w products__wrapper mobile-items">
        {children}
      </div>
    </section>
  );
}
