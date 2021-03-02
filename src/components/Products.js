export default function Products ({products: {products}, openCart}) {
console.log(products)
    return (
        <section className="products">
          <div className="flex flex-fw-w products__wrapper mobile-items">
           {products && products.map(({image_url, price, title, id})=> {
               return (
                 <div className="flex flex-fd-c flex-ai-c item " key={id}>
                   <div className="image">
                     <img src={image_url} alt="" />
                     <h2>{title}</h2>
                   </div>
                   <div className="price">
                     <span>From:</span>
                     <span>NGN {price}</span>
                   </div>
                   <button onClick={openCart}>Add to Cart</button>
                 </div>
               );
           })}
          </div>
        </section>
    )
}