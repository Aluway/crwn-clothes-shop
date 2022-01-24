import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Catalog.scss";
import CatalogCard from "./CatalogCard";

function DirectoryCatalog(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const params = useParams();
  const catalogTitle = params.directoryName;

  const directories = useSelector((state) => state.clothes);
  const catalog = directories.find((item) => item.title === catalogTitle);

  if (directories.length === 0) {
    return "Waiting";
  }

  return (
    <div>
      <div className="title__wrapper">
        <div className="title__left"></div>
        <div className="catalog__title">{catalogTitle}</div>
        <div className="title__right"></div>
      </div>
      <div className="catalog__container">
        {catalog.items.map((item) => (
          <CatalogCard
            id={item.id}
            key={item.id}
            name={item.name}
            imgUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default DirectoryCatalog;
