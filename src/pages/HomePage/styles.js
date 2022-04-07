import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  padding: 2.625rem;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
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
  padding: 0 2rem; 
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`