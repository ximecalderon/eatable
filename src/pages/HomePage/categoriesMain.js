import CategoryButton from "../../components/CategoryButton";
import FoodCard from "../../components/FoodCard";
import * as Styled from "./styles";
import { useState } from "react";

function CategoriesMain({ products }) {
  const categories = products.reduce((categories, currentProduct) => {
    const newCategory = currentProduct.category;

    if (categories.includes(newCategory)) return [...categories];
    return [...categories, newCategory]
  }, []);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const filteredProducts = products.filter(product => product.category === currentCategory);
  return (
    <Styled.Body>
      <Styled.CategoriesContainer>
        {categories.map(category => {
          return <CategoryButton
            key={category}
            isActive={category === currentCategory}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </CategoryButton>
        })}
      </Styled.CategoriesContainer>
      <Styled.ProductsContainer>
        {filteredProducts.map(product => {
          return <FoodCard
            key={product.id}
            name={product.name}
            picture_url={product.picture_url}
            price={product.price}
          />
        })}
      </Styled.ProductsContainer>
    </Styled.Body>
  )
};

export default CategoriesMain;