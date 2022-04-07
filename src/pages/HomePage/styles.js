import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Message = styled.span`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`
export const CartButton = css`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.gray};

  &:hover {
    color: ${colors.orange}
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.625rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1.375rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: grid;
  gap: 1.25rem ;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  justify-items: center;
  align-content: flex-start;
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