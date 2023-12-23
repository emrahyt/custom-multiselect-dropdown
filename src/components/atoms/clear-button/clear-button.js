import { CLEAR_BUTTON_TEXT } from "utils/constants";

import { StyledContainer, StyledClearButton } from "./clear-button.styles";

const ClearButton = ({ clearSearchField }) => (
  <StyledContainer>
    <StyledClearButton type="button" onClick={clearSearchField}>
      {CLEAR_BUTTON_TEXT}
    </StyledClearButton>
  </StyledContainer>
);

export default ClearButton;
