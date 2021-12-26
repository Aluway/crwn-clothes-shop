import React from "react";

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
    </div>
  );
}

export default CatalogCard;
