import FoodPicture from "../FoodPicture";
import * as Styled from "./styles";

function FoodCard({ name, picture_url, price }) {

  return (
    <Styled.Container>
      <Styled.Spacing />
      <Styled.ProductInfo >
        <FoodPicture style={{ top: -38, position: "absolute" }} url={picture_url} size="md" alt={name} />
        <Styled.Title>{name}</Styled.Title>
        <Styled.Price>{price}</Styled.Price>
      </Styled.ProductInfo>
    </Styled.Container>
  )
};

export default FoodCard;