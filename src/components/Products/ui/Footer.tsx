export default function Footer() {
  return (
    <footer className="footer mobile-footer">
      <div className="flex wrapper">
        <div className="email__us">
          <div className="email__wrapper">
            <h2>Let’s stay in touch</h2>
            <p>
              We’ll give you a heads up on new Lumin products, deals, and
              events, plus tips & tricks on how to keep your skin looking its
              damned finest.
            </p>
            <div className="email__form">
              <input type="text" placeholder="EMAIL ADDRESS" />
            </div>
          </div>
        </div>
        <div className="flex flex-ai-fs flex-jc-sa links__wrapper">
          <div className="flex flex-fd-c links">
            <h2>Shop</h2>
            <a href="">Skin</a>
            <a href="">Hair</a>
            <a href="">Body</a>
          </div>
          <div className="flex flex-fd-c links">
            <h2>Blog</h2>
            <a href="">Blog</a>
            <a href="">How To</a>
            <a href="">Ingredients</a>
            <a href="">Reviews</a>
            <a href="">Support</a>
          </div>
          <div className="flex flex-fd-c links">
            <h2>About</h2>
            <a href="">Jobs</a>
            <a href="">Affiliate</a>
            <a href="">Wholesale</a>
            <a href="">Free Trial FAQ</a>
            <a href="">Heroes Program</a>
            <a href="">Request Personal Data</a>
          </div>
          <div className="flex socials">
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="contact">
        <p>Need help?</p>
        <p>
          Contact us through our <a href="">Support Concierge</a>
        </p>
        <p>
          Or email us at <a href="">support@luminskin.com</a>
        </p>
      </div>
      <div className="copyright">
        <div>© 2021, Lumin</div>
        <div></div>
      </div>
      <div className="policies">
        <a href="">Privacy Policy,</a>
        <a href="">Return Policy,</a>
        <a href="">Terms of Service,</a>
      </div>
      <div className="address">
        <p>3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</p>
      </div>
    </footer>
  );
}
