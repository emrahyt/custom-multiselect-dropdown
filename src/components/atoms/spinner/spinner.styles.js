import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  ${({ theme }) => css`
    height: 100px;
    width: 100px;
    animation: spin 2s linear infinite;
    border: 16px solid ${theme.azureishWhite};
    border-top: 16px solid ${theme.charcoal};
    border-radius: 50%;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
