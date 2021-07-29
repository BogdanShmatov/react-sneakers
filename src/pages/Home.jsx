import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  cardFavorite,
  cartItems,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              src="/img/btn-remove.svg"
              className="cu-p clear"
              alt="Clear"
            />
          )}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              price={obj.price}
              title={obj.title}
              imageUrl={obj.imageUrl}
              onFavorite={onAddToFavorite}
              onPlus={onAddToCart}
              favorited={
                cardFavorite.find((item) => item.id !== obj.id) ? false : true
              }
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
