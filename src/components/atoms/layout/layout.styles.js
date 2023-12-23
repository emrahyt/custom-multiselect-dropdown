import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.ghostWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
  `}
`;

export const StyledContainer = styled.div`
  width: 60%;
  height: 70vh;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(80, 84, 87, 0.5);
`;
