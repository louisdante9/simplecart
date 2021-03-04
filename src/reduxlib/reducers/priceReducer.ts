import { ITEM_PRICE } from "reduxlib/actions";

const priceReducer = (state = { price: 0 }, action: { [key: string]: any }) => {
  switch (action.type) {
    case ITEM_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
