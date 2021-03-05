import Button from "components/Commons/Button";

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
      <Button className="sub-button">
        MAKE THIS A SUBSCRIPTION (SAVE 20%)
      </Button>
      <Button>PROCEED TO CHECKOUT</Button>
    </div>
  );
}