import styled from "@emotion/styled";
import { useState } from "react";
import CartCard from "../components/CartCard/card-cart";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3.125rem;
  height: 100vh;
  flex-direction: column;
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

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 5%;
  margin: 0 auto;
  gap: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20;
  width: 100%;
`;

const user = {
  name: "Testino Diprueba",
  email: "test@mail.com",
  phone: "987654321",
  address: "Lima-Peru",
  token: "fqDXac7KUQu84TitS1f1A8Sf",
};

const respuesta = {
  delivery_address: user.address,
  items: [
    { id: 1, quantity: 1 },
    { id: 4, quantity: 1 },
    { id: 10, quantity: 5 },
  ],
};

const TotalText = styled.p`
  ${typography.size.m}
`;
const TotalNumber = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

function CartPage({ products }) {
  const startValue = products.map((product) => {
    return { id: product.id, price: product.price };
  });

  const suma = startValue.map((value) => {
    return value.price;
  });
  const totalprice = suma.reduce((a, b) => a + b);

  const [total, setTotal] = useState(totalprice);
  const [first, setFirst] = useState(startValue);

  function handleChange(first, id, value) {
    const selectedObj = first.find((data) => data.id === id);
    setFirst(() => {
      selectedObj.price = value;
      return first;
    });
  }

  function handleTotal(first) {
    setTotal(first.map((obj) => obj.price).reduce((a, b) => a + b));
  }

  return (
    <CartContainer>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          fontSize: "1.625rem",
        }}
      >
        Cart
      </h1>
      <CardsContainer>
        {products.map((product) => (
          <CartCard
            key={product.id}
            handleChange={handleChange}
            product={product}
            first={first}
            handleTotal={handleTotal}
          />
        ))}
      </CardsContainer>
      <FooterContainer>
        <ContTotalPrice>
          <TotalText>Total</TotalText>
          <TotalNumber>${(total / 100).toFixed(2)}</TotalNumber>
        </ContTotalPrice>
        <StyledButton>Checkout</StyledButton>
      </FooterContainer>
    </CartContainer>
  );
}

export default CartPage;
