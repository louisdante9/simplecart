export default function Cartheader ({ onclick}) {
    return (
      <div className="flex flex-ai-c flex-jc-sb cart-top">
        <div className="closebtn">
          <div onClick={onclick}>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
        <div className="cart-title">YOUR CART</div>
      </div>
    );
}