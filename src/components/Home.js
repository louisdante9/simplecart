import logo from "assests/images/logo.png";
import cart from "assests/images/carts.png";
import arrowRight from "assests/images/arrow-right.png";
import productOne from "assests/images/product_1024x1024.png";
import productTwo from "assests/images/product_2_1024x1024.png";
import Header from 'components/UI/Header'
import PageHeader from "components/PageHeader";
import Main from 'components/UI/Main'
import Products from "components/Products";
import Blog from "components/Blog";
import Footer from "components/Footer";
import Cart from "./cart";

function Home() {
  return (
    <>
      <Header image={{ logo, cart }} />
      <Main>
        <PageHeader />
        <Products image={{ productOne, productTwo }} />
        <Blog image={arrowRight}/>
        <Footer/>
        <Cart image={productOne}/>
      </Main>
      
    </>
  );
}
export default Home;
