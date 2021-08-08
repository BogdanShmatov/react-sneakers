import React from "react";

import Card from "../components/Card";
import Info from "../components/Info";

import AppContext from "../context";

function Favorits({ onAddToCart, onAddToFavorite }) {
  const { cardFavorite, isAddedToCart } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      {cardFavorite.length > 0 ? (
        <div>
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="mb-40">Мои закладки</h1>
          </div>
          <div className="d-flex flex-wrap">
            {cardFavorite.map((obj) => (
              <Card
                loading={false}
                key={obj.parentId}
                favorited={true}
                onPlus={onAddToCart}
                onFavorite={onAddToFavorite}
                added={isAddedToCart(obj.parentId)}
                {...obj}
              />
            ))}
          </div>
        </div>
      ) : (
        <Info
          title={"Закладок нет :("}
          description={"Вы ничего не добавляли в закладки."}
          image={{ url: "/img/ups.jpg", w: 70, h: 70 }}
        />
      )}
    </div>
  );
}

export default Favorits;
