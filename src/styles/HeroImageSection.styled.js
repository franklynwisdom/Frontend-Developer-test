import styled from "styled-components";

const StyledHeroImageSection = styled.aside`
  width: 601px;
  position: relative;
  right: -5.3rem;

  div {
    background-color: yellow;
    border-radius: 20px 200px;
    max-width: 500px;
    min-height: 600px;
  }

  .heroDesign {
    min-width: 100px;
    min-height: 100px;
    z-index: 1;
    position: relative;
    bottom:-8rem ;
    left: -7rem;
  }
  .heroImage {
    /* max-width: 500px;
    min-height: 600px;
    position: relative;
    top: -7rem; */
    position: relative;
    max-width: 500px;
    min-height: 600px;
    left: -26px;
    top: -101px;

    border-radius: 20px 200px;
  }
  .heroBackgroundImage {
    max-width: 500px;
    min-height: 600px;
    margin-top: -30rem;
    position: relative;
    right: -2rem;
    z-index: -1;
  }
`;

export default StyledHeroImageSection;
