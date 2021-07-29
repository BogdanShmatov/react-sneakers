import { Link } from "react-router-dom";
import Card from "../components/Card";

function Favorits({ items, onAddToCart, onAddToFavorite, cartItems }) {
  return (
    <div className="content p-40">
      {items.length > 0 ? (
        <div>
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="mb-40">Мои закладки</h1>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((obj) => (
              <Card
                key={obj.id}
                id={obj.id}
                price={obj.price}
                title={obj.title}
                imageUrl={obj.imageUrl}
                favorited={true}
                onPlus={onAddToCart}
                onFavorite={onAddToFavorite}
                added={
                  cartItems.find((item) => item.id === obj.id) ? true : false
                }
              />
            ))}
          </div>
        </div>
      ) : (
        <div class="cartEmpty d-flex align-center justify-center flex-column flex">
          <img
            class="mb-0"
            width="70px"
            height="70px"
            src="/img/ups.jpg"
            alt="Empty"
          />
          <h2>Закладок нет :(</h2>
          <p class="opacity-6">Вы ничего не добавляли в закладки</p>
          <Link to="/">
            <button class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorits;
