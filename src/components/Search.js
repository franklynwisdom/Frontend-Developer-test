import React from "react";
import StyledSearch from "../styles/Search.styled";
import StyledSearchIcon from "../styles/SearchIcon.styled";
import dataStore from "./ArtistoStore";

const Search = () => {
  const inputData = dataStore((state) => state.inputData);
  const updatedInputData = dataStore((state) => state.updatedInputData);
  const apiData = dataStore((state) => state.apiData);

  const filteredData = dataStore((state) => state.filteredData);
  const updatedFilteredData = dataStore((state) => state.updatedFilteredData);

  // This function filters the result of the artworks by title
    const filteredDataByTitle = apiData?.data?.filter((value) => {
      return value.title?.toLowerCase().includes(inputData?.toLowerCase());
    });
    
    console.log(filteredData);
  
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          updatedInputData(event.target.value);
          updatedFilteredData(filteredDataByTitle);
        }}
      />
      {inputData !== "" ? "" : <StyledSearchIcon />}
      <div>{inputData}</div>
    </StyledSearch>
  );
};

export default Search;
