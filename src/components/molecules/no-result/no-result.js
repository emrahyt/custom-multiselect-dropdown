import notFoundIcon from "assets/not-found.svg";

import ClearButton from "components/atoms/clear-button/clear-button";

import { NO_RESULT_TEXT } from "utils/constants";

import {
  StyledContainer,
  StyledNotFoundImage,
  StyledNotFoundText,
} from "./no-result.styles";

const NoResult = ({ clearSearchField }) => (
  <StyledContainer>
    <StyledNotFoundImage src={notFoundIcon} alt="not-found" />
    <StyledNotFoundText>{NO_RESULT_TEXT}</StyledNotFoundText>
    <ClearButton clearSearchField={clearSearchField} />
  </StyledContainer>
);

export default NoResult;
