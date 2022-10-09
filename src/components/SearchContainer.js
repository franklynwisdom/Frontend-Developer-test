import React from "react";
import StyledSectionContainer from "../styles/SearchContainer.styled";
import StyledSearchContainerText from "../styles/SearchContainerText.styled";
import Search from "./Search";


const SearchContainer = () => {
  return (
    <StyledSectionContainer>
      <StyledSearchContainerText>
        <h2>Art in the collection</h2>
        <p>
          Browse a curated selection of art around the world, including museum
          exhibitions, gallery openings, upcoming and many more
        </p>
      </StyledSearchContainerText>
      <Search/>
    </StyledSectionContainer>
  );
};

export default SearchContainer;
