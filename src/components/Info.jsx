import React from "react";

import { Link } from "react-router-dom";
import AppContext from "../context";

function Info({ title, image, description }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="mb-20"
        width={image.w}
        height={image.h}
        src={image.url}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
          <Link to="/">
            <button className="greenButton" onClick={() => setCartOpened(false)}>
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </Link>
    </div>
  );
}

export default Info;
