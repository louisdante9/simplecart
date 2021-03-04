export default function CartBody({ children }: {children: any}) {
  return (
    <div className="cart-body">
      <div className="cart-items-list">{children}</div>
    </div>
  );
}
