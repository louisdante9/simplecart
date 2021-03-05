
export default function SelectField({
  children,
  ...rest
}: {
  children: JSX.Element;
  name: string;
  value: string;
  onChange: (e: any) => void;
}) {
  return <select {...rest}>{children}</select>;
}