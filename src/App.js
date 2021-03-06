import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Favorits from './pages/Favorits';
import Orders from './pages/Orders';

import Header from './components/Header';
import Drawer from './components/Drawer';

import AppContext from './context'; 

function App() {

const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([]);
const [cardFavorite, setCardFavorite] = React.useState([]);
const [searchValue, setSearchValue] = React.useState('');
const [cartOpened, setCartOpened] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() => {
  //FETCH
  // fetch('https://60f5c8ca18254c00176e0026.mockapi.io/sneakers')
  // .then((res) => {
  //   return res.json()
  // })
  // .then((json) => {
  //   setItems(json);
  // });

  //AXIOS
  async function getData() {
    // setIsLoading(true);
    const cartResponse = await axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/cart'); 
    const favoritesResponse = await axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/favorite');
    const itemsResponse = await axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/sneakers'); 

    setIsLoading(false); 
    setCartItems(cartResponse.data);
    setCardFavorite(favoritesResponse.data);
    setItems(itemsResponse.data);
  }
  getData();

}, []);

const onAddToCart = async (obj) => {
  try {
    const data = cartItems.find((item) => Number(item.parentId) === Number(obj.parentId));

    if(data) {
      axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/cart/${data.id}`);
      setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.parentId)));

    } else {
      const {data} = await axios.post('https://60f5c8ca18254c00176e0026.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, data]);
     }
     
  } catch (error) {
    alert('Произошла ошибка при добавлении в корзину!');
    console.error(error);
  }

};

const onAddToFavorite = async (obj) => {
  try {
    const data = cardFavorite.find(favorite => Number(favorite.parentId) === Number(obj.parentId));

    if(data) {
      axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/favorite/${data.id}`);
      setCardFavorite(prev => prev.filter(item => item.parentId !== obj.parentId));

    } else {
      const {data} = await axios.post('https://60f5c8ca18254c00176e0026.mockapi.io/favorite', obj);
      setCardFavorite(prev => [...prev, data]);

     }
  } catch (error) {
    alert('Произошла ошибка при добавлении в избранное!');
    console.error(error);
  }
 };

const onRemoveFromCart = (id) => {
  try {
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
    axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/cart/${id}`);
    
  } catch (error) {
    alert('Произошла ошибка при удалении из корзины!');
    console.error(error);
  }
 };

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};

const isAddedToCart = (id) => {
  return cartItems.some((item) => Number(item.parentId) === Number(id));
}

const isAddedToFavorite = (id) => {
  return cardFavorite.some((item) => Number(item.parentId) === Number(id));
}

  return (
    <AppContext.Provider value={{items, cartItems, cardFavorite, isAddedToCart, isAddedToFavorite, setCartOpened, setCartItems}}>
          <div className="wrapper clear">
              <Drawer onClose={() => {setCartOpened(false); document.body.style.overflow = "auto"}} items={cartItems} onRemove={onRemoveFromCart} opened={cartOpened}/>
              <Header onClickCart={() => {setCartOpened(true); document.body.style.overflow = "hidden"}}/>
              <Route path="/" exact>
                  <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}
                  />
              </Route>

              <Route path="/favorits" exact>
                  <Favorits
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                  />
              </Route>

              <Route path="/orders" exact>
                  <Orders/>
              </Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;
