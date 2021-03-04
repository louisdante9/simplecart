export default function SelectField({
  children,
  ...rest
}: {
  children: any;
  name: string;
  value: string;
  onChange: (e: any) => void;
}) {
  return <select {...rest}>{children}</select>;
}