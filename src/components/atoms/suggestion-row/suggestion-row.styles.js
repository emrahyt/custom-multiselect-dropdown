import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 10px;
    border-bottom: 2px solid ${theme.cadetGray};
    gap: 10px;
    &:last-child {
      border-bottom: none;
    }
  `}
`;

export const StyledCheckbox = styled.input``;

export const StyledCharacterImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
`;

export const StyledCharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCharacterInfoText = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.charcoal};
    font-size: 16px;
    font-weight: 500;
  `}
`;
