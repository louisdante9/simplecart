import { combineReducers } from "redux";
import cartReducer from './cart_reducer';
import toggleReducer from './toggleReducer'
import priceReducer from './priceReducer'

const reducer = combineReducers({
    cart: cartReducer,
    toggle: toggleReducer,
    itemPrice: priceReducer
})
export default reducer