import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import apiFetch from "../services/api-fetch";
import { createOrder } from "../services/order-service";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const CheckoutContainer = styled.div`
  display: flex;
  /* align-items: center; */
  padding: 2rem 3.125rem;
  height: 100vh;
  flex-direction: column;
  width: 100%;
`;

const TextDelivery = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

const StyledTextBold = styled.p`
  ${typography.weigth.semibold}
`;

const OrangeText = styled.p`
  ${typography.size.s}
  ${typography.weigth.semibold}
  color: ${colors.orange};
`;

const ContainerDetails = styled.div`
  margin-top: 2.625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1.875rem;
`;

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 1%;
  margin: 0 auto;
  gap: 2rem;
`;

const TotalText = styled.p`
  ${typography.size.m}
`;
const TotalNumber = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

const ContTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 19.3rem;
  height: 4.875rem;
  background-color: ${colors.orange};
  color: white;
  border-radius: 1.875rem;
  border: none;
  cursor: pointer;
`;

function CheckoutPage({ orderData }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  async function completeOrder() {
    createOrder(order);
    navigate("/history");
  }

  const price = orderData.first.map((order) => {
    return delete order.price;
  });

  const order = {
    delivery_address: user.address,
    items: orderData.first,
  };
  console.log(order);
  return (
    <CheckoutContainer>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          fontSize: "1.625rem",
        }}
      >
        Checkout
      </h1>
      <TextDelivery>Delivery</TextDelivery>
      <SubContainer>
        <StyledTextBold>Address details</StyledTextBold>
        <OrangeText>change</OrangeText>
      </SubContainer>
      <ContainerDetails>
        <StyledTextBold>{user.name}</StyledTextBold>
        <p>{user.address}</p>
        <p>{user.phone}</p>
      </ContainerDetails>
      <FooterContainer>
        <ContTotalPrice>
          <TotalText>Total</TotalText>
          <TotalNumber>${(orderData.total / 100).toFixed(2)}</TotalNumber>
        </ContTotalPrice>
        <StyledButton onClick={completeOrder}>Complete Order</StyledButton>
      </FooterContainer>
    </CheckoutContainer>
  );
}

export default CheckoutPage;
