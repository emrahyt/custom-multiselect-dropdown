import { memo } from "react";

import arrowIcon from "assets/arrow-up.svg";

import { StyledImage } from "./arrow-icon.styles";

const ArrowIcon = ({ isExpanded }) => (
  <StyledImage $isExpanded={isExpanded} src={arrowIcon} alt="arrow-icon" />
);

export default memo(ArrowIcon);
