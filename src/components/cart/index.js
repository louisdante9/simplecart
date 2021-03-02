import CartItems from "./CartItems";

export default function Cart({ productOne, cartState, closeCart, cartItems }) {
  console.log(cartItems, 'array')
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
            {/* hello there */}
            {cartItems && cartItems.map(item => {
              return <CartItems key={item.id} {...item} />;
            })}
            {/* <CartItems productOne={productOne} />
            <CartItems productOne={productOne} />
            <CartItems productOne={productOne} />
            <CartItems productOne={productOne} />
            <CartItems productOne={productOne} /> */}
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
