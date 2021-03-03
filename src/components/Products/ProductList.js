import {useDispatch} from 'react-redux';
import ProductItems from "components/Products/ProductItems";
import {addToCart, toggleCart} from 'reduxlib/actions'


export default function ProductList({ data, toggle }) {
  const dispatch = useDispatch()
    const openCart = (product) => {
      dispatch(toggleCart(!toggle.toggleState));
      dispatch(addToCart(product));
    };
  return (
    <section className="products">
      <div className="flex flex-fw-w products__wrapper mobile-items">
        {!data ? (
          <>sorry no products yet</>
        ) : (
          data?.products.map((product) => (
            <ProductItems key={product.id} openCart={openCart} {...product} />
          ))
        )}
      </div>
    </section>
  );
}
