import { combineReducers } from "redux";
import cartReducer from './cart_reducer';
import toggleReducer from './toggleReducer'

const reducer = combineReducers({
    cart: cartReducer,
    toggle: toggleReducer
})
export default reducer