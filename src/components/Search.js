import React from "react";
import StyledSearch from "../styles/Search.styled";
import StyledSearchIcon from "../styles/SearchIcon.styled";
import dataStore from "./ArtistoStore";

const Search = () => {
  const inputData = dataStore((state) => state.inputData);
  const updatedInputData = dataStore((state) => state.updatedInputData);

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          updatedInputData(event.target.value);
        }}
      />
      {inputData !== "" ? "" : <StyledSearchIcon />}
    </StyledSearch>
  );
};

export default Search;
