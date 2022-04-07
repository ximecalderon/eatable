import styled from "@emotion/styled";
import FoodPicture from "../FoodPicture";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { useState } from "react";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem;
  gap: 1.25rem;
`;

const PlateName = styled.p`
  ${typography.size["s"]}
  ${typography.weigth.semibold}
`;

const PlateInfoCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const PlatePrice = styled.p`
  ${typography.weigth.semibold}
  color: ${colors.orange};
`;

const ButtonCard = styled.div`
  background-color: ${colors.orange};
  color: white;
  display: flex;
  width: 3.25rem;
  border-radius: 1.875rem;
  justify-content: center;
  ${typography.weigth.semibold}
`;

const PlusLessButton = styled.span`
  cursor: pointer;
`;

function CartCard(product) {
  function handleAdd() {
    setCount(count + 1);
  }

  function handleDisc() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return count;
    }
  }
  const [count, setCount] = useState(1);
  return (
    <CardContainer>
      <FoodPicture url={product.picture_url} size={"sm"} alt={product.name} />
      <PlateInfoCont>
        <PlateName>{product.name}</PlateName>
        <FooterCard>
          <PlatePrice>${((product.price / 100) * count).toFixed(2)}</PlatePrice>
          <ButtonCard>
            <p>
              <PlusLessButton onClick={handleDisc}>-</PlusLessButton> {count}{" "}
              <PlusLessButton onClick={handleAdd}>+</PlusLessButton>
            </p>
          </ButtonCard>
        </FooterCard>
      </PlateInfoCont>
    </CardContainer>
  );
}

export default CartCard;
