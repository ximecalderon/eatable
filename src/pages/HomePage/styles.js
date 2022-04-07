import styled from "@emotion/styled";

export const ProductsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  padding: 2.625rem;
  display: grid;
  gap: 1.25rem ;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  justify-items: center;
  overflow-y: scroll;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesContainer = styled.div`
  padding: 0 75px; 
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`