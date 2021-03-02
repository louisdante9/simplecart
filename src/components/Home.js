import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import logo from "assests/images/logo.png";
import cart from "assests/images/carts.png";
import arrowRight from "assests/images/arrow-right.png";
import productOne from "assests/images/product_1024x1024.png";
import Header from "components/UI/Header";
import PageHeader from "components/PageHeader";
import Main from "components/UI/Main";
import ProductList from 'components/Products/ProductList'
import ProductItems from "components/Products/ProductItems";
import Blog from "components/Blog";
import Footer from "components/Footer";
import Cart from "./cart";
import { LOAD_PRODUCTS } from "graphql/queries";

function Home() {
  const [cartState, setCartState] = useState(false);
  const[cartItems, setCartItems] = useState([])
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
useEffect(() => {
  cartState
    ? document.body.classList.add("body-scroll")
    : document.body.classList.remove("body-scroll");
  
}, [cartState])
  const openCart = (product) => {
    // e.preventDefault();
    setCartState((x) => !x);
    setCartItems([...cartItems, {...product, units: 1}, ])
    console.log(product)
  };

  const closeCart = () => {
    setCartState((x) => !x);
  };

  console.log(cartItems, "overflow");

  return (
    <>
      <Header image={{ logo, cart }} />
      <Main>
        <PageHeader />
        <ProductList>
          {!data ? (
            <>sorry no products yet</>
          ) : (
            data?.products.map((product) => (
              <ProductItems key={product.id} openCart={openCart} {...product} />
            ))
          )}
        </ProductList>
        <Blog image={arrowRight} />
        <Footer />
        <Cart
          image={productOne}
          cartState={cartState}
          closeCart={closeCart}
          cartItems={cartItems}
        />
      </Main>
    </>
  );
}
export default Home;
