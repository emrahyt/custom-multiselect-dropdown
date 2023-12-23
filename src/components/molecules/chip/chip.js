import { memo } from "react";

import CloseButton from "components/atoms/close-button/close-button";

import { StyledChip } from "./chip.styles";

const Chip = ({ characterName, handleChipRemove }) => (
  <StyledChip>
    {characterName}
    <CloseButton handleChipRemove={handleChipRemove} />
  </StyledChip>
);

export default memo(Chip);
