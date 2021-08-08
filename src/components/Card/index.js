import React from 'react';
import ContentLoader from "react-content-loader";

import styles from './Card.module.scss';
import AppContext from "../../context";

function Card({id, parentId, title, price, imageUrl, onFavorite, onPlus, loading = true }) {
  const { isAddedToCart, isAddedToFavorite, cardFavorite, cartItems} = React.useContext(AppContext);

  const onClickPlus = () => {
    onPlus({id, parentId, title, price, imageUrl});
  };

  const onClickFavorite = () => {
    onFavorite({id, parentId, title, price, imageUrl});
  };
  
  return (
        <div className={styles.card}>
         { loading ? (
               <ContentLoader 
                speed={1}
                width={155}
                height={220}
                viewBox="0 0 150 220"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="110" /> 
                <rect x="0" y="140" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="158" rx="3" ry="3" width="93" height="15" /> 
                <rect x="0" y="195" rx="8" ry="8" width="80" height="24" /> 
                <rect x="118" y="188" rx="8" ry="8" width="32" height="32" />
              </ContentLoader> 
            ):( 
              <>
              {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
               <img 
                src={isAddedToFavorite(parentId) ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} 
                alt="Favorite" />
              </div>
              }
              <img width={133} height={112} src={imageUrl} alt="Sneakers" />
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price} руб.</b>
                </div>
                  {onPlus && <img 
                  src={isAddedToCart(parentId) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                  alt="Plus" 
                  className={styles.plus} 
                  onClick={onClickPlus} />
                  }
              </div>
            </>)}
   </div> 
  );
}

export default Card;
