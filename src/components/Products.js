import logo from "assests/images/logo.png";
import cart from "assests/images/carts.png";
import arrowRight from "assests/images/arrow-right.png";
import productOne from "assests/images/product_1024x1024.png";
import productTwo from "assests/images/product_2_1024x1024.png";
import Header from 'components/UI/Header'

function Product() {
  return (
    <>
      <Header image={{logo, cart}}/>
      <main className="main flex flex-fd-c">
        <section className="page mobile-wrapper">
          <div className="flex flex-ai-c flex-jc-sb page__wrapper">
            <div className="description">
              <h1>All Products</h1>
              <p>A 360° look at Lumin</p>
            </div>
            <div className="product__select">
              <select>
                <option value="" disabled="">
                  Filter By
                </option>
                <option selected="" value="all-products">
                  All Products
                </option>
                <option value="new-products">New Products</option>
                <option value="sets">Sets</option>
                <option value="skincare">Skincare</option>
                <option value="hair-and-body">Hair &amp; Body Care</option>
                <option value="accesories">Accesories</option>
              </select>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="flex flex-fw-w products__wrapper mobile-items">
            <div className="flex flex-fd-c flex-ai-c item ">
              <div className="image">
                <img src={productOne} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-fd-c flex-ai-c item">
              <div className="image">
                <img src={productTwo} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button onclick="openNav()">Add to Cart</button>
            </div>
            <div className="flex flex-fd-c flex-ai-c item">
              <div className="image">
                <img src={productOne} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-fd-c flex-ai-c item">
              <div className="image">
                <img src={productOne} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-fd-c flex-ai-c item">
              <div className="image">
                <img src={productTwo} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-fd-c flex-ai-c item">
              <div className="image">
                <img src={productOne} alt="" />
                <h2>Age Management Set</h2>
              </div>
              <div className="price">
                <span>From:</span>
                <span>NGN 20,000.00</span>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="blog__header mobile-blog-text">
            <a href="">Join the #ManCareMovement </a>
            <span>
              <img src={arrowRight} alt="" />{" "}
            </span>
          </div>

          <div className="blog__list mobile-img">
            <a href="#">
              <img src="https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
              <div className="overlay"></div>
            </a>
            <a href="#">
              <img src="https://i.shgcdn.com/19e25e65-d583-4357-9626-ee0f08d88c34/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
              <div className="overlay"></div>
            </a>
            <a href="#">
              <img src="https://i.shgcdn.com/c5b55791-a2d4-4659-b8bd-93ab3d0b3874/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
              <div className="overlay"></div>
            </a>
            <a href="#">
              <img src="https://i.shgcdn.com/b24d9740-8340-40dd-ab30-c5e35d755c26/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
              <div className="overlay"></div>
            </a>
            <a href="#">
              <img src="https://i.shgcdn.com/4fce0508-7701-43b0-893b-51c6fc785b5f/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
              <div className="overlay"></div>
            </a>
          </div>
        </section>
        <footer className="footer mobile-footer">
          <div className="flex wrapper">
            <div className="email__us">
              <div className="email__wrapper">
                <h2>Let’s stay in touch</h2>
                <p>
                  We’ll give you a heads up on new Lumin products, deals, and
                  events, plus tips & tricks on how to keep your skin looking
                  its damned finest.
                </p>
                <div className="email__form">
                  <input type="text" placeholder="EMAIL ADDRESS" />
                </div>
              </div>
            </div>
            <div className="flex flex-ai-fs flex-jc-sa links__wrapper">
              <div className="flex flex-fd-c links">
                <h2>Shop</h2>
                <a href="">Skin</a>
                <a href="">Hair</a>
                <a href="">Body</a>
              </div>
              <div className="flex flex-fd-c links">
                <h2>Blog</h2>
                <a href="">Blog</a>
                <a href="">How To</a>
                <a href="">Ingredients</a>
                <a href="">Reviews</a>
                <a href="">Support</a>
              </div>
              <div className="flex flex-fd-c links">
                <h2>About</h2>
                <a href="">Jobs</a>
                <a href="">Affiliate</a>
                <a href="">Wholesale</a>
                <a href="">Free Trial FAQ</a>
                <a href="">Heroes Program</a>
                <a href="">Request Personal Data</a>
              </div>
              <div className="flex socials">
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact">
            <p>Need help?</p>
            <p>
              Contact us through our <a href="">Support Concierge</a>
            </p>
            <p>
              Or email us at <a href="">support@luminskin.com</a>
            </p>
          </div>
          <div className="copyright">
            <div>© 2021, Lumin</div>
            <div></div>
          </div>
          <div className="policies">
            <a href="">Privacy Policy,</a>
            <a href="">Return Policy,</a>
            <a href="">Terms of Service,</a>
          </div>
          <div className="address">
            <p>3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</p>
          </div>
        </footer>
      </main>
      <span className="body-wrapper">
        <div id="background"></div>
        <div id="mySidenav" className="sidenav">
          <div className="flex flex-ai-c flex-jc-sb cart-top">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onclick="closeNav()">
              <div>
                <i className="fa fa-chevron-right"></i>
              </div>
            </a>
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
              <div className="cart-item">
                <span className="remove-item">X</span>
                <div className="item-description">
                  <h6>Clarifying Body Wash</h6>
                  <div className="made-for">
                    <span>MADE FOR:</span>
                    nwamadi chukwuebuka theodore louis
                  </div>
                  <div>One time purchase of Two Month supply.</div>
                  <div className="flex flex-ai-c flex-jc-sb quantity">
                    <div className="flex flex-ai-c flex-jc-sb qty_selector">
                      <span className="counter-btn">-</span>
                      <span className="counter-number">1</span>
                      <span className="counter-btn">+</span>
                    </div>
                    <div className="price">NGN 5,200.00</div>
                  </div>
                </div>
                <div className="item-image">
                  <img src={productOne} alt="" />
                </div>
              </div>
              <div className="cart-item">
                <span className="remove-item">X</span>
                <div className="item-description">
                  <h6>Clarifying Body Wash</h6>
                  <div className="made-for">
                    <span>MADE FOR:</span>
                    nwamadi chukwuebuka theodore louis
                  </div>
                  <div>One time purchase of Two Month supply.</div>
                  <div className="flex flex-ai-c flex-jc-sb quantity">
                    <div className="flex flex-ai-c flex-jc-sb qty_selector">
                      <span className="counter-btn">-</span>
                      <span className="counter-number">1</span>
                      <span className="counter-btn">+</span>
                    </div>
                    <div className="price">NGN 5,200.00</div>
                  </div>
                </div>
                <div className="item-image">
                  <img src={productOne} alt="" />
                </div>
              </div>
              <div className="cart-item">
                <span className="remove-item">X</span>
                <div className="item-description">
                  <h6>Clarifying Body Wash</h6>
                  <div className="made-for">
                    <span>MADE FOR:</span>
                    nwamadi chukwuebuka theodore louis
                  </div>
                  <div>One time purchase of Two Month supply.</div>
                  <div className="flex flex-ai-c flex-jc-sb quantity">
                    <div className="flex flex-ai-c flex-jc-sb qty_selector">
                      <span className="counter-btn">-</span>
                      <span className="counter-number">1</span>
                      <span className="counter-btn">+</span>
                    </div>
                    <div className="price">NGN 5,200.00</div>
                  </div>
                </div>
                <div className="item-image">
                  <img src={productOne} alt="" />
                </div>
              </div>
              <div className="cart-item">
                <span className="remove-item">X</span>
                <div className="item-description">
                  <h6>Clarifying Body Wash</h6>
                  <div className="made-for">
                    <span>MADE FOR:</span>
                    nwamadi chukwuebuka theodore louis
                  </div>
                  <div>One time purchase of Two Month supply.</div>
                  <div className="flex flex-ai-c flex-jc-sb quantity">
                    <div className="flex flex-ai-c flex-jc-sb qty_selector">
                      <span className="counter-btn">-</span>
                      <span className="counter-number">1</span>
                      <span className="counter-btn">+</span>
                    </div>
                    <div className="price">NGN 5,200.00</div>
                  </div>
                </div>
                <div className="item-image">
                  <img src={productOne} alt="" />
                </div>
              </div>
              <div className="cart-item">
                <span className="remove-item">X</span>
                <div className="item-description">
                  <h6>Clarifying Body Wash</h6>
                  <div className="made-for">
                    <span>MADE FOR:</span>
                    nwamadi chukwuebuka theodore louis
                  </div>
                  <div>One time purchase of Two Month supply.</div>
                  <div className="flex flex-ai-c flex-jc-sb quantity">
                    <div className="flex flex-ai-c flex-jc-sb qty_selector">
                      <span className="counter-btn">-</span>
                      <span className="counter-number">1</span>
                      <span className="counter-btn">+</span>
                    </div>
                    <div className="price">NGN 5,200.00</div>
                  </div>
                </div>
                <div className="flex flex-ai-c flex-jc-sb item-image">
                  <img src={productOne} alt="" />
                </div>
              </div>
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
    </>
  );
}
export default Product;
