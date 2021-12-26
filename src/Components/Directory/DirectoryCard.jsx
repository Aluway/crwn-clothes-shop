import React from "react";
import { Link } from "react-router-dom";

import "./DirectoryCard.scss";

function DirectoryCard({ img, title, ...props }) {
  // const directoryName = title;
  return (
    <div className={`directory__card__container ${props.additionalClass}`}>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="card__background"
      >
        <div className="card__button">
          <Link to={`/shop/${title}`} className="button__title">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DirectoryCard;
