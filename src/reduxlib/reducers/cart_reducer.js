import {
  ADD_TO_CART,
  UPDATE_CART_UNITS,
  REMOVE_CART_UNIT,
} from "reduxlib/actions";

const cartReducer = (state = [], action) => {
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
      const cart = state;
      const existingProductIndex = findProductIndex(cart, payload.id);
      if (existingProductIndex >= 0) {
        let product = cart[existingProductIndex];
        product.units = payload.units;
        cart[existingProductIndex] = product;
      }
      return [...cart];
    }
    case REMOVE_CART_UNIT: {
      const productId = action.payload;
      const cart = [...state];
      const productIndex = findProductIndex(cart, productId);
      console.log(productIndex, "productIndex");
      if (productIndex >= 0) {
        cart.splice(productIndex, 1);
      }
      return cart;
    }

    default:
      return state;
  }
};

const findProductIndex = (items, productId) => {
  return items.findIndex((p) => p.id === productId);
};
const updateProductUnit = (items, product, productIndex) => {
  const cartProducts = [...items];
  const existingProduct = cartProducts[productIndex];
  const updatedExistingProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units,
  };
  cartProducts[productIndex] = updatedExistingProduct;
  return cartProducts;
};

export default cartReducer;
