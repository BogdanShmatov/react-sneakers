import React from "react";
import axios from "axios";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://60f5c8ca18254c00176e0026.mockapi.io/order"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при загрузке заказов!");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div>
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="mb-40">Мои заказы</h1>
        </div>
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((obj, index) => (
            <Card
              loading={isLoading}
              key={obj && obj.parentId + `_${index}`}
              {...obj}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
