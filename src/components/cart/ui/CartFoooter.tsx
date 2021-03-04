export default function CartFooter({
  defaultCurrency,
  cartTotal,
}: {
  defaultCurrency: string;
  cartTotal: number;
}) {
  return (
    <div className="cart-footer">
      <div className="flex flex-ai-c flex-jc-sb cart-subtotal">
        <span>Subtotal</span>
        <span>
          {defaultCurrency} {cartTotal}
        </span>
      </div>
      <button className="sub-button">
        MAKE THIS A SUBSCRIPTION (SAVE 20%)
      </button>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}