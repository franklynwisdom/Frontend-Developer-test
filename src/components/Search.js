import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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

  const searchApiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${inputData}`
  const {isLoading,error, data} = useQuery(["searchQuery"], 
    async () => {
      const response = await axios.get(searchApiUrl);
      return response.data

    }
  )
  console.log(data?.data);

  // This function filters the result of the artworks by title
    // const filteredDataByTitle = data?.data?.filter((value) => {
    //   return value.title?.toLowerCase().includes(inputData?.toLowerCase());
    // });
    
    console.log(filteredData);
  
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          updatedInputData(event.target.value);
          updatedFilteredData(data);
        }}
      />
      {inputData !== "" ? "" : <StyledSearchIcon />}
      <div>{inputData}</div>
    </StyledSearch>
  );
};

export default Search;
