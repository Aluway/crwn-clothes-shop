import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/actions/cartAction";

import { ReactComponent as Cross } from "../../assets/cross-svgrepo-com.svg";

import "./CartItem.scss";

function CartItem(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem(props.itemId));
  };

  return (
    <div className="cart__item_wrapper">
      <div className="cart__img_wrapper">
        <img className="cart__img" src={`${props.itemImg}`} alt="jacket" />
      </div>
      <div className="item__name">{props.itemName}</div>
      <div className="item__qtty">
        {props.itemQty} x {props.itemPrice}$
      </div>
      <Cross onClick={handleClick} className="item__cross" />
    </div>
  );
}

export default CartItem;
