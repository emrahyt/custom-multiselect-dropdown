import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  flex-grow: 1;
  padding: 4px 25px 4px 4px;
  border-radius: 4px;
  border: none;
  height: 40px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;
