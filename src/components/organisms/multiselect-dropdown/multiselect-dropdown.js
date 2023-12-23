import { useCallback, useEffect, useRef, useState } from "react";

import Layout from "components/atoms/layout/layout";
import ArrowIcon from "components/atoms/arrow-icon/arrow-icon";
import Chip from "components/molecules/chip/chip";
import InputField from "components/atoms/input-field/input-field";
import InputContainer from "components/atoms/input-container/input-container";
import Suggestions from "components/molecules/suggestions/suggestions";
import NoResult from "components/molecules/no-result/no-result";
import Spinner from "components/atoms/spinner/spinner";
import Toast from "components/atoms/toast/toast";

import { getSuggestions } from "services";

import {
  INITIAL_CONTAINER_HEIGHT,
  INITIAL_SEARCH_AREA_HEIGHT,
  MINIMUM_SUGGESTIONS_HEIGHT,
  REMOVE_SELECTION_TEXT,
  SUCCESS,
} from "utils/constants";

import { Container } from "./multiselect-dropdown.styles";
import { handleFormerSelections } from "utils/helpers";

const MultiselectDropdown = () => {
  const searchBoxRef = useRef();
  const containerRef = useRef();

  const [searchTerm, setSearchTerm] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [page, setPage] = useState(1);
  const [searchAreaHeight, setSearchAreaHeight] = useState(
    INITIAL_SEARCH_AREA_HEIGHT
  );
  const [containerHeight, setContainerHeight] = useState(
    INITIAL_CONTAINER_HEIGHT
  );

  const handleChipRemove = useCallback((id) => {
    setSelectedCharacters((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== id)
    );
  }, []);

  const handleTextChange = ({ target: { value } }) => {
    const isFirstPage = page === 1;
    !isFirstPage && setPage(1);
    setSearchTerm(value || "");
  };

  const handleSearch = async (keyword, pageNumber) => {
    const keywordLength = keyword.length;
    const noSerchTerm = keywordLength === 0;
    if (noSerchTerm) {
      setCharacters([]);
      setIsError(false);
      setSelectedCharacters([]);
    }
    if (keywordLength < 3) return;
    const isFirstPage = pageNumber === 1;
    isFirstPage ? setIsLoading(true) : setIsLoadingMore(true);
    const { data, status } = await getSuggestions(keyword, pageNumber);
    handleResponse({ data, status, isFirstPage });
  };

  const handleResponse = ({ data, status, isFirstPage }) => {
    if (status === SUCCESS) {
      const { totalPages, charactersList } = data;
      isError && setIsError(false);
      const hasMorePages = totalPages > page;
      setHasMoreCharacters(hasMorePages);
      setCharacters((prevCharacters) => {
        return isFirstPage
          ? charactersList
          : [...prevCharacters, ...charactersList];
      });
    } else {
      setIsError(true);
      setCharacters([]);
    }
    setTimeout(() => setIsLoading(false), 300);
    setTimeout(() => setIsLoadingMore(false), 300);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const handleCharacterSelect = ({ name, id }) => {
    const remainingSpace = containerHeight - searchAreaHeight;
    const hasEnoughSpaceForSuggestions =
      remainingSpace > MINIMUM_SUGGESTIONS_HEIGHT;
    const isSelected = selectedCharacters.some((item) => item.id === id);

    if (!hasEnoughSpaceForSuggestions && !isSelected) {
      setShowNotification(true);
      return;
    }
    if (isSelected) {
      setSelectedCharacters((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.id !== id)
      );
    } else {
      setSelectedCharacters((prevSelectedItems) => [
        ...prevSelectedItems,
        { id, name },
      ]);
    }
  };

  useEffect(() => {
    const debouncedSearch = setTimeout(() => handleSearch(searchTerm, 1), 500);
    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (page === 1) return;
    handleSearch(searchTerm, page);
  }, [page]);

  useEffect(() => {
    if (isError) {
      setSelectedCharacters([]);
    }
  }, [isError]);

  useEffect(() => {
    if (searchBoxRef.current) {
      const currentSearchBoxHeight = searchBoxRef.current.clientHeight;
      setSearchAreaHeight(currentSearchBoxHeight);
    }
    if (containerRef.current) {
      const currentContainerHeight = containerRef.current.clientHeight;
      setContainerHeight(currentContainerHeight);
    }
  }, [selectedCharacters]);

  useEffect(() => {
    const remainingSelections = handleFormerSelections({
      selectedCharacters,
      characters,
    });
    setSelectedCharacters(remainingSelections);
  }, [characters]);

  const haveCharacters = characters.length > 0 && !isLoading;
  const showErrorText = !isLoading && isError;

  return (
    <Layout ref={containerRef}>
      <Container ref={searchBoxRef}>
        {selectedCharacters.map(({ name, id }) => (
          <Chip
            key={id}
            characterName={name}
            handleChipRemove={() => handleChipRemove(id)}
          />
        ))}
        <InputContainer>
          <InputField
            handleTextChange={handleTextChange}
            searchTerm={searchTerm}
          />
          <ArrowIcon isExpanded={haveCharacters} />
        </InputContainer>
      </Container>
      {haveCharacters && (
        <Suggestions
          characters={characters}
          handleCharacterSelect={handleCharacterSelect}
          selectedCharacters={selectedCharacters}
          searchTerm={searchTerm}
          searchAreaHeight={searchAreaHeight}
          hasMoreCharacters={hasMoreCharacters}
          handleLoadMore={handleLoadMore}
          isLoadingMore={isLoadingMore}
        />
      )}
      {isLoading && <Spinner />}
      {showErrorText && <NoResult clearSearchField={() => setSearchTerm("")} />}
      <Toast
        message={REMOVE_SELECTION_TEXT}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </Layout>
  );
};

export default MultiselectDropdown;
