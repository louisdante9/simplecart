import { combineReducers } from "redux";
import cartReducer from './cart_reducer'

const reducer = combineReducers({
    cart: cartReducer
})
export default reducer