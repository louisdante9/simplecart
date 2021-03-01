export default function Cart({ productOne }) {
  return (
    <span className="body-wrapper">
      <div id="background" className=""></div>
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
  );
}