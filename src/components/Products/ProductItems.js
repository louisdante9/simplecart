export default function ProductItems({
  id,
  image_url,
  price,
  title,
  openCart,
  defaultCurrency,
}) {
  return (
    <div className="flex flex-fd-c flex-ai-c item ">
      <div className="image">
        <img src={image_url} alt="" />
        <h2>{title}</h2>
      </div>
      <div className="price">
        <span>From: </span>
        <span>
          {defaultCurrency} {price}
        </span>
      </div>
      <button
        onClick={() => openCart({ id, units: 1 })}>
        Add to Cart
      </button>
    </div>
  );
}
