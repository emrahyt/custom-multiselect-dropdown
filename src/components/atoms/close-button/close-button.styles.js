import styled, { css } from "styled-components";

export const StyledCloseButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.cadetGray};
    width: 25px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;

export const StyledImage = styled.img`
  width: 12px;
  height: 12px;
`;
