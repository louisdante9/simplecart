import {useDispatch} from 'react-redux';
import ProductItems from "components/Products/ProductItems";
import { addToCart, getItemPrice, toggleCart } from "reduxlib/actions";


export default function ProductList({
  data: { products },
  toggle,
  loading,
  defaultCurrency
}: {data: {products: []}, toggle: {toggleState: boolean}, loading: boolean, defaultCurrency: string}) {
  const dispatch = useDispatch();
  const addItemToCart = (product: {}) => {
    dispatch(toggleCart(!toggle.toggleState));
    dispatch(addToCart(product));
    dispatch(getItemPrice(product));
  };
  return (
    <section className="products">
      <div className="flex flex-fw-w products__wrapper mobile-items">
        {loading ? (
          <>loading....</>
        ) : (
          products?.map(
            (product: { id: number; image_url: string; price: number, title: string }) => (
              <ProductItems
                id={product.id}
                key={product.id}
                image_url={product.image_url}
                price={product.price}
                title={product.title}
                openCart={addItemToCart}
                defaultCurrency={defaultCurrency}
                // {...product}
              />
            )
          )
        )}
      </div>
    </section>
  );
}
