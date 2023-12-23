import { highlightText } from "utils/helpers";

import { ENTER_KEY, EPISODES_TEXT, EPISODE_TEXT } from "utils/constants";

import {
  StyledContainer,
  StyledCheckbox,
  StyledCharacterImage,
  StyledCharacterInfo,
  StyledCharacterInfoText,
} from "./suggestion-row.styles";

const SuggestionRow = ({
  handleCharacterSelect,
  selectedCharacters,
  character,
  searchTerm,
}) => {
  const { image, id, name, numberOfEpisodes } = character;

  const isSelected =
    selectedCharacters.find((character) => character.id === id) || false;
  const highlightedText = highlightText(name, searchTerm);
  const episodesText = numberOfEpisodes > 1 ? EPISODES_TEXT : EPISODE_TEXT;

  const handleCheckboxClick = ({ target }) => {
    const { name, id } = target;
    handleCharacterSelect({ id: Number(id), name });
  };

  const handleKeyPress = ({ key, target }) => {
    const { name, id } = target || {};
    if (key !== ENTER_KEY) return;
    handleCharacterSelect({ id: Number(id), name });
  };

  return (
    <StyledContainer>
      <StyledCheckbox
        type="checkbox"
        name={name}
        id={id}
        checked={isSelected}
        onChange={handleCheckboxClick}
        onKeyPress={handleKeyPress}
      />
      <StyledCharacterImage src={image} alt="character-img" />
      <StyledCharacterInfo>
        <StyledCharacterInfoText>{highlightedText}</StyledCharacterInfoText>
        <StyledCharacterInfoText>{`${numberOfEpisodes} ${episodesText}`}</StyledCharacterInfoText>
      </StyledCharacterInfo>
    </StyledContainer>
  );
};

export default SuggestionRow;
