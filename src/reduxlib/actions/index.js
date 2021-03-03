export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART_UNITS = "UPDATE_CART_UNITS";
export const REMOVE_CART_UNIT = "REMOVE_CART_UNIT";
export const TOGGLE = 'TOGGLE'
export const ITEM_PRICE = 'ITEM_PRICE'

export function addToCart (product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function updateCartUnits ({id, units, price}) {
    return {
      type: UPDATE_CART_UNITS,
      payload: {id, units, price},
    };
}
export function removeFromCart (id) {
    return {
      type: REMOVE_CART_UNIT,
      payload: id,
    };
}

export function toggleCart (status) {
    return {
        type: TOGGLE,
        payload: status
    }
}

export function getItemPrice(product) {
    return {
        type: 'ITEM_PRICE',
        payload: product.price
      }
}