/* eslint-disable jsx-a11y/anchor-is-valid */

const DummyLink = ({ onClick, children, ...props }) => (
  <a
    href="#"
    onClick={(evt) => {
      evt.preventDefault();
      onClick && onClick();
    }}
    {...props}>
    {children}
  </a>
);

export default DummyLink;
