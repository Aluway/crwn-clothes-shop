import React from "react";
import CutstomButton from "../../Components/Button/CustomButton";

import "./CatalogCard.scss";

function CatalogCard(props) {
  return (
    <div className="catalog__card_container">
      <div className="price__container">
        <div className="card__name">{props.name}</div>
        <div className="card__price">{props.price} $</div>
      </div>
      <div
        className="card__background"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      />
      <div className="catalog__button_wrapper">
        <CutstomButton buttonClassname={"catalog__button"} type={"button"}>
          Add to cart
        </CutstomButton>
      </div>
    </div>
  );
}

export default CatalogCard;
