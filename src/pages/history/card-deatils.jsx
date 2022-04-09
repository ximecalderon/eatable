import styled from "@emotion/styled";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const PriceCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Displayable = styled.div`
  display: ${(props) => (props.show == true ? "flex" : "none")};
  flex-direction: column;
`;

const OrderDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CardOrder({ order }) {
  const [open, setOpen] = useState(false);

  function OrderDetailed({ detail }) {
    return (
      <OrderDetail>
        <div style={{ display: "flex" }}>
          <p>
            {detail.quantity} - {detail.product_name}
          </p>
        </div>
        <p>${(detail.subtotal / 100).toFixed(2)}</p>
      </OrderDetail>
    );
  }
  const dateNoformat = new Date(order.created_at);
  const date = dateNoformat.toDateString();

  return (
    <div>
      <OrderCard>
        <p>{date}</p>
        <PriceCont>
          <p>{order.items_count}</p>
          <p>${(order.total / 100).toFixed(2)}</p>
        </PriceCont>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
        </div>
        <Displayable show={open}>
          <h4>Order</h4>
          {order.order_details.map((detail) => {
            return <OrderDetailed key={detail.id} detail={detail} />;
          })}
        </Displayable>
      </OrderCard>
    </div>
  );
}
export default CardOrder;
