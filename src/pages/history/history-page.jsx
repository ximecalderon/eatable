import { useEffect, useState } from "react";
import { getOrders } from "../../services/order-service";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "@emotion/styled";
import CardOrder from "./card-deatils";
import { Title } from "../../components/FoodCard/styles";

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function HistoryPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((data) => setOrders(data));
  }, [orders]);

  return (
    <div style={{ height: "100%" }}>
      <Title>History</Title>
      <OrdersContainer>
        {orders.map((order) => {
          return <CardOrder key={order.id} order={order} />;
        })}
      </OrdersContainer>
    </div>
  );
}

export default HistoryPage;
