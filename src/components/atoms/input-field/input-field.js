import { PLACEHOLDER_TEXT } from "utils/constants";

import { StyledInput } from "./input-field.styles";

const InputField = ({ handleTextChange, searchTerm }) => (
  <StyledInput
    placeholder={PLACEHOLDER_TEXT}
    onChange={handleTextChange}
    value={searchTerm}
  />
);

export default InputField;
