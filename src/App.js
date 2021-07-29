import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorits from './pages/Favorits';

function App() {
const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([]);
const [cardFavorite, setCardFavorite] = React.useState([]);
const [searchValue, setSearchValue] = React.useState('');
const [cartOpened, setCartOpened] = React.useState(false);

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
  axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/sneakers')
  .then(res => {
    setItems(res.data)
  });

  axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/cart')
  .then(res => {
    setCartItems(res.data)
  });

  axios.get('https://60f5c8ca18254c00176e0026.mockapi.io/favorite')
  .then(res => {
    setCardFavorite(res.data)
  });

}, []);

const onAddToCart = (obj) => {

  try {
    if(cartItems.find(item => item.id === obj.id)) {

      axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => item.id !== obj.id));

    } else {

      axios.post('https://60f5c8ca18254c00176e0026.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);

     }
  } catch (error) {
    console.error('Произошла ошибка!')
  }

};

const onAddToFavorite = async (obj) => {

  try {
    if(cardFavorite.find(favorite => favorite.id === obj.id)) {

      axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/favorite/${obj.id}`);
      // setCardFavorite(prev => prev.filter(item => item.id !== obj.id));

    } else {

      axios.post('https://60f5c8ca18254c00176e0026.mockapi.io/favorite', obj);
      setCardFavorite(prev => [...prev, obj]);

     }
  } catch (error) {
    console.error('Произошла ошибка!')
  }
 
 };

const onRemoveFromCart = (id) => {

  axios.delete(`https://60f5c8ca18254c00176e0026.mockapi.io/cart/${id}`);
  setCartItems(prev => prev.filter(item => item.id !== id));
 
 };

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};

  return (
    <div className="wrapper clear">
     {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveFromCart}/>} 
      <Header onClickCart={() => setCartOpened(true)}/>
      <Route path="/" exact>
          <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
          cardFavorite={cardFavorite}
          />
      </Route>

      <Route path="/favorits" exact>
        <Favorits
          items={cardFavorite}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
    </div>
  );
}

export default App;
