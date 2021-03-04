export default function SelectField({children, ...rest}) {
    return (
      <select {...rest}>
       {children}
      </select>
    );
}