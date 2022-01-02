import { useSelector } from "react-redux";

import CheckoutItem from "./CheckoutItem";

import "./Checkout.scss";

function Checkout(props) {
  const cartItems = useSelector((state) => state.cart);

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
    </div>
  );
}

export default Checkout;
