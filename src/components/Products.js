export default function Products ({image: {productOne, productTwo}}) {
    return (
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
    )
}