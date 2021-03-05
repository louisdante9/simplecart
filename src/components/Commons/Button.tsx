export default function Button({
  className,
  children,
  onClick,
}: {
  className?: string,
  children: string,
  onClick?: () => void,
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
