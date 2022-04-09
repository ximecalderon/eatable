import { useEffect, useState } from "react";
import { getOrders } from "../services/order-service";

function HistoryPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((data) => setOrders(data));
  }, []);
  console.log(orders);

  const detalles = orders.map((order) => order.order_details);
  const cantidad = detalles.forEach((ele) => ele.quantity);
  // .reduce((a, b) => a + b);
  console.log(detalles);
  // console.log(cantidad);

  return (
    <div>
      <p>History Page 👍</p>
    </div>
  );
}

export default HistoryPage;
