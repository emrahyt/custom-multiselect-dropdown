//~Interface segregation principle
export const parseCharactersResponse = (charactersResponse) => {
  const { info, results } = charactersResponse;
  if (!info || !results) return {};
  const { pages } = info;
  const charactersList = results.map((character) => {
    const { name, id, image, episode } = character;
    const numberOfEpisodes = episode.length;
    return {
      name,
      id,
      image,
      numberOfEpisodes,
    };
  });

  return {
    totalPages: pages,
    charactersList,
  };
};

export const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text
    .split(regex)
    .map((part, index) =>
      regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
};

export const handleFormerSelections = ({ selectedCharacters, characters }) =>
  selectedCharacters.filter((selectedCharacter) => {
    return characters.some(
      (character) => character.id === selectedCharacter.id
    );
  });
