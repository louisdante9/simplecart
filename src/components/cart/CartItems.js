export default function CartItems({
  id,
  image,
  price,
  title,
  units,
  updateUnit,
  removeItem,
  itemPrice,
  defaultCurrency,
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
              onClick={() =>
                updateUnit({ id, units: units - 1, price: price / units })
              }>
              -
            </span>
            <span className="counter-number">{units}</span>
            <span
              className="counter-btn"
              onClick={() =>
                updateUnit({ id, units: units + 1, price: price * units })
              }>
              +
            </span>
          </div>
          <div className="price">
            {defaultCurrency} {price}
          </div>
        </div>
      </div>
      <div className="item-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}