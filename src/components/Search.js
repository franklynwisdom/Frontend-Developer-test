import axios from "axios";
import React from "react";
import StyledSearch from "../styles/Search.styled";
import StyledSearchIcon from "../styles/SearchIcon.styled";
import dataStore from "./ArtistoStore";

const Search = () => {
  const inputData = dataStore((state) => state.inputData);
  const updatedInputData = dataStore((state) => state.updatedInputData);

  const updatedFilteredData = dataStore((state) => state.updatedFilteredData);

  const updateSearchEventTarget = dataStore(
    (state) => state.updateSearchEventTarget
  );

  const searchApiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${inputData}`;

  //Get search data from the search api
  const getData = async () => {
    await axios.get(searchApiUrl).then((response) => {
      console.log(response);
      console.log(response.data);   
      updatedFilteredData(response.data);
    });
  };

  //search for data when the enter ker is pressed
  function filterSearch(event) {
    if (event.key === "Enter") {
      getData();  
    }
  }  

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => { 
          updatedInputData(event.target.value);
          getData();
          updateSearchEventTarget(event.type);
        }}
        onKeyDown={(event) => {
          filterSearch(event);
        }}
      />
      {inputData !== "" ? "" : <StyledSearchIcon />}
    </StyledSearch>
  );
};

export default Search;
