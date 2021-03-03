import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import Items from "./CartItems";
import { removeFromCart, updateCartUnits } from "reduxlib/actions";
import { LOAD_CURRENCY } from "graphlib/queries";

export default function Cart({
  cartState,
  closeCart,
  cartItems,
  defaultCurrency,
  setCurrency,
}) {
  const dispatch = useDispatch();
  const { itemPrice } = useSelector((state) => state);
  const [cartTotal, setCartTotal] = useState(0);
  const { data } = useQuery(LOAD_CURRENCY);

  useEffect(() => {
    if (cartItems.length) {
      subTotal(cartItems);
    }
  }, [cartItems]);

  const subTotal = (items) => {
    const result = items.map((item) => item.price).reduce((a, b) => a + b);
    return setCartTotal(result);
  };

  const updateUnit = (product) => {
    if (product.units < 1) {
      return dispatch(removeFromCart(product.id));
    }
    dispatch(updateCartUnits(product));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };
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
          <select name="" id="" value={defaultCurrency} onChange={(e)=> setCurrency(e.target.value)}>
            {data?.currency.map((curr) => {
              return (
                <option value={curr} key={curr}>
                  {curr}
                </option>
              );
            })}
            {/* <option selected="" value="NGN">
              NGN
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option> */}
          </select>
        </div>
        <div className="cart-body">
          <div className="cart-items-list">
            {cartItems.length ? (
              cartItems.map((item) => {
                return (
                  <Items
                    {...item}
                    itemPrice={itemPrice.price}
                    updateUnit={updateUnit}
                    key={item.id}
                    removeItem={removeItem}
                  />
                );
              })
            ) : (
              <p className="cart-empty">There are no items in your cart.</p>
            )}
          </div>
        </div>
        <div className="cart-footer">
          <div className="flex flex-ai-c flex-jc-sb cart-subtotal">
            <span>Subtotal</span>
            <span>NGN {cartTotal}</span>
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
