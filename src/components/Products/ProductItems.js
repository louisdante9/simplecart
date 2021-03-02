export default function ProductItems({ id, image_url, price, title, openCart }) {
  return (
    <div className="flex flex-fd-c flex-ai-c item ">
      <div className="image">
        <img src={image_url} alt="" />
        <h2>{title}</h2>
      </div>
      <div className="price">
        <span>From:</span>
        <span>NGN {price}</span>
      </div>
      <button onClick={() => openCart({ id, image_url, price, title })}>
        Add to Cart
      </button>
    </div>
  );
}
