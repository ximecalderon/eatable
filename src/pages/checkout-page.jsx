import styled from "@emotion/styled";
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

const user = {
  name: "Testino Diprueba",
  email: "test@mail.com",
  phone: "987654321",
  address: "Lima-Peru",
  token: "fqDXac7KUQu84TitS1f1A8Sf",
};

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
  bottom: 5%;
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

function handleCheckout(order) {
  console.log("test");
}

function CheckoutPage(order) {
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
          <TotalNumber>$97.90</TotalNumber>
        </ContTotalPrice>
        <StyledButton onClick={handleCheckout}>Checkout</StyledButton>
      </FooterContainer>
    </CheckoutContainer>
  );
}

export default CheckoutPage;
