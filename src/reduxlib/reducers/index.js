import { combineReducers } from "redux";
import cartReducer from './cart_reducer';
import toggleReducer from './toggleReducer'
import priceReducer from './priceReducer'
import productReducer from "./productReducer";

const reducer = combineReducers({
    cart: cartReducer,
    toggle: toggleReducer,
    itemPrice: priceReducer,
    products: productReducer
})
export default reducer