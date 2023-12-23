import SuggestionRow from "components/atoms/suggestion-row/suggestion-row";
import LoadMoreButton from "components/atoms/load-more-button/load-more-button";

import { StyledContainer } from "./suggestions.styles";

const Suggestions = ({
  characters,
  handleCharacterSelect,
  selectedCharacters,
  searchTerm,
  searchAreaHeight,
  hasMoreCharacters,
  handleLoadMore,
  isLoadingMore,
}) => {
  return (
    <StyledContainer $searchAreaHeight={searchAreaHeight}>
      {characters.map((character) => (
        <SuggestionRow
          key={`${character.id}-${character.name}`}
          character={character}
          handleCharacterSelect={handleCharacterSelect}
          selectedCharacters={selectedCharacters}
          searchTerm={searchTerm}
        />
      ))}
      {hasMoreCharacters && (
        <LoadMoreButton
          handleLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
        />
      )}
    </StyledContainer>
  );
};

export default Suggestions;
