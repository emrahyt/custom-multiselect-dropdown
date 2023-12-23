import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  box-sizing: border-box;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledNotFoundImage = styled.img`
  width: 100px;
  height: 100px;
`;
export const StyledNotFoundText = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.charcoal};
    font-size: 20px;
    font-weight: 600;
  `}
`;
