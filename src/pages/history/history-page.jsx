import { useEffect, useState } from "react";
import { getOrders } from "../../services/order-service";
import styled from "@emotion/styled";
import CardOrder from "./card-deatils";
import { Title } from "../../components/FoodCard/styles";
import EmptyHistory from "./empty-history";
import { useOutletContext } from "react-router-dom";

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function HistoryPage() {
  const { setTitle } = useOutletContext();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setTitle("History");
    getOrders().then((data) => setOrders(data));
  }, [setTitle]);

  if (orders.length === 0) return <EmptyHistory />;

  return (
    <div style={{ height: "100%" }}>
      <OrdersContainer>
        {orders.map((order) => {
          return <CardOrder key={order.id} order={order} />;
        })}
      </OrdersContainer>
    </div>
  );
}

export default HistoryPage;
