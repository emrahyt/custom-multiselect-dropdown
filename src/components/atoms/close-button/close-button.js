import closeIcon from "assets/close-icon.svg";

import { StyledCloseButton, StyledImage } from "./close-button.styles";

const CloseButton = ({ handleChipRemove }) => (
  <StyledCloseButton onClick={handleChipRemove} type="button">
    <StyledImage src={closeIcon} alt="close-icon" />
  </StyledCloseButton>
);

export default CloseButton;
