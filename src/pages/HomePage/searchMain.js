import * as Styled from "./styles";
import FoodCard from "../../components/FoodCard";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SearchMain({ products, search }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      setResults(products.filter(product => {
        return product.name.split(" ").includes(search.toLowerCase())
      }))
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounce)
  }, [search, products]);

  const navigate = useNavigate();

  return (
    <Styled.Body>
      {loading ? <Styled.Message>Searching...</Styled.Message> :
        <Styled.Message>Found {results ? results.length : 0} results</Styled.Message>}

      {results ?
        <Styled.ProductsContainer>
          {results.map(product => {
            return <FoodCard
              key={product.id}
              name={product.name}
              picture_url={product.picture_url}
              price={product.price}
              onClick={() => navigate(`/products/${product.id}`, { replace: true })}
            />
          })}
        </Styled.ProductsContainer> :
        null
      }
    </Styled.Body>
  )
}

export default SearchMain;