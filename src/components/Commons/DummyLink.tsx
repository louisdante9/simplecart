/* eslint-disable jsx-a11y/anchor-is-valid */

const DummyLink = ({  children, href="", ...rest }: {children: any, href: string}) => (
  <a {...rest}>
    {children}
  </a>
);

export default DummyLink;
