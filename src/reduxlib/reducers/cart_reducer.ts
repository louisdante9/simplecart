import {
  ADD_TO_CART,
  UPDATE_CART_UNITS,
  REMOVE_CART_UNIT,
} from "reduxlib/actions";
const cartReducer = (state: [] = [], action: {[key: string]: any}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;
      const existingProductIndex = findProductIndex(cart, product.id);
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnit(cart, product, existingProductIndex)
          : [...cart, product];
      return updatedCart;
    }

    case UPDATE_CART_UNITS: {
      const { payload } = action;
      const cart: any[] = state;
      const existingProductIndex = findProductIndex(cart, payload.id);
      if (existingProductIndex >= 0) {
        cart[existingProductIndex] = {
          ...cart[existingProductIndex],
          ...payload,
        };
      }
      return [...cart];
    }

    case REMOVE_CART_UNIT:
      const productId = action.payload;
      const productIndex = findProductIndex(state, productId);
      return [
        ...state.slice(0, productIndex),
        ...state.slice(productIndex + 1),
      ];

    default:
      return state;
  }
};

const findProductIndex = (items: any[], productId: number) => {
  return items.findIndex((p: {id: number}) => p.id === productId);
};


const updateProductUnit = (
  items: any[],
  product: { [key: string]: number },
  productIndex: number
) => {
  const cartProducts:any[] = [...items];
  const existingProduct: { [key: string]: number } = cartProducts[productIndex];
  const updatedExistingProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units,
  };
  cartProducts[productIndex] = updatedExistingProduct;
  return cartProducts;
};

export default cartReducer;
