import styles from './Card.module.scss';
import React from 'react';

function Card({ id, title, price, imageUrl, onFavorite, onPlus, favorited = false, added = false }) {

  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    onPlus({id, title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({id, title, price, imageUrl});
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Favorite" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
          <img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" className={styles.plus} onClick={onClickPlus} />
      </div>
    </div>
  );
}

export default Card;
