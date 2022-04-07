import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { css } from "@emotion/react";

export const Button = styled.button`
  background-color: inherit;
  border: none;
  padding: 13px;
  ${typography.size.m}
  color: ${colors.textGray};
  cursor: pointer;

  &:hover, &:focus {
    color: ${colors.orange};
  }

  &:active {
    color: ${colors.orange};
    box-shadow: inset 0 -3px 0 ${colors.orange};
  }
`;
