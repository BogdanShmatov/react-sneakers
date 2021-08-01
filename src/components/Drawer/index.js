import React from 'react';

import AppContext from "../../context";
import axios from "axios";
import Info from '../Info';

function Drawer({onClose, onRemove, items = []}) {

  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
     try {
       setIsLoading(true);
      const {data} = await axios.post('https://60f5c8ca18254c00176e0026.mockapi.io/order', {items: cartItems});
      setOrderId(data.orderId)
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60f5c8ca18254c00176e0026.mockapi.io/cart/' + item.id);
        await delay(1000);
      }

     } catch (error) {
      console.error("Оформлении заказа произошла ошибка" + error);
     }
     setIsLoading(false)
  }
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex flex-column"> 
          <div className="items">
          {
            items.map((obj) => (
                  <div key={obj.parentId} className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemove(obj.id)} />
              </div>
            ))
          }
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>{Math.ceil(totalPrice*5/100)} руб.</b>
            </li>
          </ul>
          <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
        ) : (
            <Info 
              title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
              description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              image={isOrderComplete ? {url:"/img/order.jpg", w:83, h:120} : {url:"/img/empty-cart.jpg", w:120, h:120}}
            />
        )}
      </div>
    </div>
  );
}

export default Drawer;
