export default function CartBody({ children }) {
  return (
    <div className="cart-body">
      <div className="cart-items-list">{children}</div>
    </div>
  );
}
