import styles from './Card.module.scss';

function Card({ title, price, imageUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Plus" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img src="/img/btn-plus.svg" alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
