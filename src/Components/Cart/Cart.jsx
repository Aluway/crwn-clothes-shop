import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Cart.scss";

import CartItem from "./CartItem";
import CustomButton from "../Button/CustomButton";

function Cart(props) {
  const cartItems = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <div style={props.style} className="cart__container">
      <div className="cart__items__wrapper">
        {cartItems.length === 0 ? (
          <div className="cart__empty">Your cart is empty</div>
        ) : (
          cartItems.map((item) => {
            return (
              <CartItem
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
      <CustomButton
        type={"button"}
        buttonClassname={"cart__button"}
        handleClick={() => navigate("/checkout")}
      >
        Checkout
      </CustomButton>
    </div>
  );
}

export default Cart;
