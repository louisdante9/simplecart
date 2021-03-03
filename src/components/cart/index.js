import CartItems from "./CartItems";
import {useDispatch} from 'react-redux';
import {removeFromCart} from 'reduxlib/actions'

export default function Cart({ cartState, closeCart, cartItems, updateUnit }) {
  const dispatch = useDispatch()
  const removeItem = (id) => {
    console.log(id, 'item id')
    dispatch(removeFromCart(id));
  }
  return (
    <span className="body-wrapper">
      <div id="background" className={`${cartState ? "blur" : ""}`}></div>
      <div id="mySidenav" className={`sidenav ${cartState ? "slide" : ""}`}>
        <div className="flex flex-ai-c flex-jc-sb cart-top">
          <div className="closebtn">
            <div onClick={closeCart}>
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
          <div className="cart-title">YOUR CART</div>
        </div>
        <div className="currency-select">
          <select name="" id="">
            <option selected="" value="NGN">
              NGN
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="cart-body">
          <div className="cart-items-list">
            {cartItems.length ?
              cartItems.map((item) => {
                return (
                  <CartItems
                    {...item}
                    updateUnit={updateUnit}
                    key={item.id}
                    removeItem={removeItem}
                  />
                );
              })
              : <p className="cart-empty">
                There are no items in your cart.
              </p>
              }
          </div>
        </div>
        <div className="cart-footer">
          <div className="flex flex-ai-c flex-jc-sb cart-subtotal">
            <span>Subtotal</span>
            <span>NGN 55,200.00</span>
          </div>
          <button className="sub-button">
            MAKE THIS A SUBSCRIPTION (SAVE 20%)
          </button>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </span>
  );
}
