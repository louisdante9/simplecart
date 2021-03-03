function Header({ image: { logo, cartImg }, itemCount, viewCart }) {
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
          <a href="#">Shop</a>
          <a href="#">Help</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-jc-c flex-ai-c header__right">
          <a href="#">Account</a>
          <a  onClick={viewCart}>
            <img src={cartImg} alt="" />
            <span>{itemCount}</span>
          </a>
          <div className="lang">
            <select className="">
              <option value="ar">AR</option>
              <option value="fr">FR</option>
              <option selected="" value="en">
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
