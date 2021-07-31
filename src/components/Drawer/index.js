import Info from '../Info';

function Drawer({onClose, onRemove, items = []}) {
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
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
        ) : (
            <Info 
              title={"Корзина пустая"}
              description={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              image={{url:"/img/empty-cart.jpg", w:120, h:120}}
            />
        )}
      </div>
    </div>
  );
}

export default Drawer;
