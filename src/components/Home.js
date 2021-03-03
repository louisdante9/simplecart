import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import logo from "assests/images/logo.png";
import cartImg from "assests/images/carts.png";
import arrowRight from "assests/images/arrow-right.png";
import productOne from "assests/images/product_1024x1024.png";
import Header from "components/UI/Header";
import PageHeader from "components/PageHeader";
import Main from "components/UI/Main";
import ProductList from "components/Products/ProductList";
import Blog from "components/Blog";
import Footer from "components/Footer";
import Cart from "./cart";
import { LOAD_PRODUCTS } from "graphlib/queries";
import { toggleCart } from "reduxlib/actions";

function Home() {
  const dispatch = useDispatch();
  const { cart, toggle } = useSelector((state) => state);
  const [defaultCurrency, setDefaultCurrency] = useState("NGN");

  const { error, loading, data } = useQuery(LOAD_PRODUCTS, {
    variables: { currency: defaultCurrency },
  });
console.log(defaultCurrency, "data");
  useEffect(() => {
    toggle.toggleState
      ? document.body.classList.add("body-scroll")
      : document.body.classList.remove("body-scroll");
  }, [toggle.toggleState]);


  const viewCart = () => {
    dispatch(toggleCart(!toggle.toggleState));
  };

  return (
    <>
      <Header
        image={{ logo, cartImg }}
        itemCount={cart.length}
        viewCart={viewCart}
      />
      <Main>
        <PageHeader />
        <ProductList data={data} toggle={toggle} loading={loading} />
        <Blog image={arrowRight} />
        <Footer />
        <Cart
          image={productOne}
          cartState={toggle.toggleState}
          closeCart={viewCart}
          cartItems={cart}
          defaultCurrency={defaultCurrency}
          setCurrency={setDefaultCurrency}
        />
      </Main>
    </>
  );
}
export default Home;
