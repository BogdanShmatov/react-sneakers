import React from "react";
import Card from "../components/Card";
import ContentLoader from "react-content-loader";
// import AppContext from "../context";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {

  // const {isAddedToFavorite} = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={item && item.parentId}
        onFavorite={onAddToFavorite}
        onPlus={onAddToCart}
        loading={isLoading}
        {...item}
      />
    ));
  };

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

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
