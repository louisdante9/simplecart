import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import Items from "./CartItems";
import { removeFromCart, updateCartUnits } from "reduxlib/actions";
import { LOAD_CURRENCY } from "graphlib/queries";
import Cartheader from "components/cart/ui/CartHeader"
import CartBody from "components/cart/ui/CartBody";
import CartFooter from "components/cart/ui/CartFoooter";
import SelectField from 'components/Commons/SelectField'

export default function Cart({
  cartState,
  closeCart,
  cartItems,
  defaultCurrency,
  setCurrency,
}) {
  const dispatch = useDispatch();
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
        <Cartheader onclick={closeCart} />
        <div className="currency-select">
          <SelectField
            name="currecy"
            value={defaultCurrency}
            onChange={(e) => setCurrency(e.target.value)}>
            {data?.currency.map((curr) => {
              return (
                <option value={curr} key={curr}>
                  {curr}
                </option>
              );
            })}
          </SelectField>
        </div>
        <CartBody>
          {cartItems.length ? (
            cartItems.map((item) => {
              return (
                <Items
                  {...item}
                  title={item.product.title}
                  image={item.product.image_url}
                  itemPrice={item.product.price}
                  updateUnit={updateUnit}
                  key={item.id}
                  removeItem={removeItem}
                  defaultCurrency={defaultCurrency}
                />
              );
            })
          ) : (
            <p className="cart-empty">There are no items in your cart.</p>
          )}
        </CartBody>
        <CartFooter defaultCurrency={defaultCurrency} cartTotal={cartTotal} />
      </div>
    </span>
  );
}
