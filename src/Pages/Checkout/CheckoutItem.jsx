import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
} from "../../store/actions/cartAction";

import { ReactComponent as ArrowLeft } from "../../assets/angle-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/angle-right.svg";
import { ReactComponent as Cross } from "../../assets/cross-svgrepo-com.svg";

import "./CheckoutItem.scss";

function CheckoutItem(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(props.itemId));
  };
  const handleIncrease = () => {
    dispatch(increaseQty(props.itemId));
  };
  const handleDecrease = () => {
    dispatch(decreaseQty(props.itemId));
  };

  return (
    <div className="checkout__item__wrapper">
      <div
        style={{ backgroundImage: `url(${props.itemImg})` }}
        className="item__img"
      ></div>
      <div className="item__name">{props.itemName}</div>
      <div className="item__qty__wrapper">
        <ArrowLeft
          {...(props.itemQty > 1 && { onClick: handleDecrease })}
          className="arrow__left"
        />
        <div className="item__qty">{props.itemQty}</div>
        <ArrowRight onClick={handleIncrease} className="arrow__right" />
      </div>
      <div className="item__price">{props.itemPrice}$</div>
      <Cross onClick={handleRemove} className="item__remove" />
    </div>
  );
}

export default CheckoutItem;
