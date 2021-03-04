import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import logo from "assests/images/logo.png";
import cartImg from "assests/images/carts.png";
import arrowRight from "assests/images/arrow-right.png";
import Header from "components/Products/ui/Header";
import PageHeader from "components/Products/ui/PageHeader";
import Main from "components/Products/ui/Main";
import ProductList from "components/Products/ProductList";
import Blog from "components/Products/ui/Blog";
import Footer from "components/Products/ui/Footer";
import Cart from "./cart/CartList";
import { LOAD_PRODUCTS } from "graphlib/queries";
import { toggleCart, getAllProducts } from "reduxlib/actions";

function Home() {
  const dispatch = useDispatch();
  const { cart, toggle, products } = useSelector(
    (state: {
      cart: [];
      toggle: { toggleState: boolean };
      products: { products: [] };
    }) => state
  );
  const [defaultCurrency, setDefaultCurrency] = useState("NGN");

  const { loading } = useQuery(LOAD_PRODUCTS, {
    variables: { currency: defaultCurrency },
    onCompleted: (data) => dispatch(getAllProducts(data)),
  });

  useEffect(() => {
    toggle.toggleState
      ? document.body.classList.add("body-scroll")
      : document.body.classList.remove("body-scroll");
  }, [toggle.toggleState]);

  const getCartProduct = (): any[] => {
    return cart?.map((c:{id:number, units: number}) => {
       const product: any | { price: number }= products.products.find(
        (p: { id: number }) => p.id === c.id
      );
      return { ...c, product: product, price: product.price * c.units };
    })
  }

  const viewCart: () => void = () => {
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
        <ProductList
          data={products}
          toggle={toggle}
          loading={loading}
          defaultCurrency={defaultCurrency}
        />
        <Blog arrowRight={arrowRight} />
        <Footer />
        <Cart
          cartState={toggle.toggleState}
          closeCart={viewCart}
          cartItems={getCartProduct()}
          defaultCurrency={defaultCurrency}
          setCurrency={setDefaultCurrency}
        />
      </Main>
    </>
  );
}
export default Home;
