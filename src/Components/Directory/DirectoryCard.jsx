import React from "react";

import "./DirectoryCard.scss";

function DirectoryCard({ img, title, ...props }) {
  return (
    <div className={`directory__card__container ${props.additionalClass}`}>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="card__background"
      >
        <div className="card__button">
          <div className="button__title">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default DirectoryCard;
