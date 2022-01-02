import React from "react";

import { ReactComponent as ArrowLeft } from "../../assets/angle-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/angle-right.svg";
import { ReactComponent as Cross } from "../../assets/cross-svgrepo-com.svg";

import "./CheckoutItem.scss";

function CheckoutItem(props) {
  return (
    <div className="checkout__item__wrapper">
      <div
        style={{ backgroundImage: `url(${props.itemImg})` }}
        className="item__img"
      ></div>
      <div className="item__name">{props.itemName}</div>
      <div className="item__qty__wrapper">
        <ArrowLeft className="arrow__left" />
        <div>{props.itemQty}</div>
        <ArrowRight className="arrow__right" />
      </div>
      <div className="item__price">{props.itemPrice}$</div>
      <Cross className="item__remove" />
    </div>
  );
}

export default CheckoutItem;
