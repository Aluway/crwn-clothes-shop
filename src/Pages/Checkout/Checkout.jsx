import { useMemo } from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "./CheckoutItem";

import "./Checkout.scss";

function Checkout(props) {
  const cartItems = useSelector((state) => state.cart);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((amount, item) => {
      return amount + item.price * item.qty;
    }, 0);
  }, [cartItems]);

  return (
    <div className="checkout__container">
      <div className="checkout__header">
        <div className="header__product">Product</div>
        <div className="header__qty">Quantity</div>
        <div className="header__price">Price</div>
        <div className="header__remove">Remove</div>
      </div>
      <div className="checkout__items">
        {cartItems.length === 0 ? (
          <div className="info__message">No cool clothes yet</div>
        ) : (
          cartItems.map((item) => {
            return (
              <CheckoutItem
                key={item.id}
                itemId={item.id}
                itemImg={item.imgUrl}
                itemName={item.name}
                itemPrice={item.price}
                itemQty={item.qty}
              />
            );
          })
        )}
      </div>
      <div className="checkout__footer">
        <div className="footer__total_wrapper">
          <div className="footer__total">TOTAL:</div>
          <div className="footer__price">{totalPrice} $</div>
        </div>
        <div className="footer__button">
          Payment button to be added once Stripe is implemented into this
          project.
        </div>
      </div>
    </div>
  );
}

export default Checkout;
