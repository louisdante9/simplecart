export default function CartItems({
  id,
  image,
  price,
  title,
  units,
  updateUnit,
  removeItem,
  defaultCurrency,
}: {
  id: number;
  image: string;
  price: number;
  title: string;
  units: number;
  updateUnit: ({}) => void;
  removeItem: (id: number) => void;
  defaultCurrency: string;
}) {
  const reduceItem = { id, units: units - 1, price: price / units };
  const increaseItem = { id, units: units + 1, price: price * units };
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
                updateUnit(reduceItem)
              }>
              -
            </span>
            <span className="counter-number">{units}</span>
            <span
              className="counter-btn"
              onClick={() =>
                updateUnit(increaseItem)
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