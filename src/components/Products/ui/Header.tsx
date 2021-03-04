import DummyLink from "components/Commons/DummyLink";

function Header({ image: { logo, cartImg }, itemCount, viewCart }: {image: {logo: string, cartImg: string },itemCount: number, viewCart:() => void}) {
  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c mobile-padding">
        <div className="header__menu hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex flex-jc-c flex-ai-c hide-for-mobile">
          <a href="/" className="">
            <div className="header__logo">
              <img src={logo} alt="shop logo" />
            </div>
          </a>
          <DummyLink href="#">Shop</DummyLink>
          <DummyLink href="#">Help</DummyLink>
          <DummyLink href="#">Blog</DummyLink>
        </div>
        <div className="flex flex-jc-c flex-ai-c header__right">
          <DummyLink href="#">Account</DummyLink>
          <a onClick={viewCart}>
            <img src={cartImg} alt="" />
            <span>{itemCount}</span>
          </a>
          <div className="lang">
            <select className="" defaultValue="en">
              <option value="ar">AR</option>
              <option value="fr">FR</option>
              <option value="en">
                EN
              </option>
              <option value="es">ES</option>
              <option value="de">DE</option>
              <option value="he">HE</option>
              <option value="id">ID</option>
              <option value="zh-TW">ZH-TW</option>
              <option value="pt">PT</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
