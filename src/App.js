import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([]);

const [cartOpened, setCartOpened] = React.useState(false);

React.useEffect(() => {
  fetch('https://60f5c8ca18254c00176e0026.mockapi.io/sneakers')
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    setItems(json);
  });
}, []);

const onAddToCart = (obj) => {
  
 setCartItems(prev => [...prev, obj]);

};

  return (
    <div className="wrapper clear">
     {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>} 
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
       
        <div className="d-flex align-center justify-between mb-40">
           <h1 className="mb-40">Все кроссовки</h1>
              <div className="search-block">
                <img src="/img/search.svg" alt="Search"/>
                  <input placeholder="Поиск..."/>

              </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((obj) => (
             <Card 
             price={obj.price} 
             title={obj.title} 
             imageUrl={obj.imageUrl}
             onFavorite={() => console.log('on favorite')}
             onPlus={onAddToCart}
             />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
