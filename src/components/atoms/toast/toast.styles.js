import styled, { css } from "styled-components";

export const StyledToastContainer = styled.div`
  ${({ theme, $show }) => css`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.black};
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    opacity: ${$show ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    user-select: none;
  `}
`;
