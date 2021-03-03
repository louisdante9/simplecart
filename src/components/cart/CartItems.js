export default function CartItems({
  id,
  image_url,
  price,
  title,
  units,
  updateUnit,
  removeItem,
}) {
  return (
    <div className="cart-item">
      <span className="remove-item" onClick={() => removeItem(id)}>
        X
      </span>
      <div className="item-description">
        <h6>{title}</h6>

        <div>One time purchase of Two Month supply.</div>
        <div className="flex flex-ai-c flex-jc-sb quantity">
          <div className="flex flex-ai-c flex-jc-sb qty_selector">
            <span
              className="counter-btn"
              onClick={() => updateUnit({ id, units: units - 1 })}>
              -
            </span>
            <span className="counter-number">{units}</span>
            <span
              className="counter-btn"
              onClick={() => updateUnit({ id, units: units + 1 })}>
              +
            </span>
          </div>
          <div className="price">NGN {price}</div>
        </div>
      </div>
      <div className="item-image">
        <img src={image_url} alt="" />
      </div>
    </div>
  );
}