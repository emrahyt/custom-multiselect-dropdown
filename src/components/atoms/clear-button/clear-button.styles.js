import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;
export const StyledClearButton = styled.button`
  ${({ theme }) => css`
    padding: 0 5px;
    border: none;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: ${theme.charcoal};
  `}
`;
