import { useState } from "react";
import { Link } from "react-router-dom";

import "./DirectoryCard.scss";

function DirectoryCard({ img, title, ...props }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`directory__card__container ${props.additionalClass} ${
        active ? "active" : ""
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="card__background"
      >
        <Link
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          to={`/shop/${title}`}
          className="card__button"
        >
          <div to={`/shop/${title}`} className="button__title">
            {title}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DirectoryCard;
