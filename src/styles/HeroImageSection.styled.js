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
    max-width: 600px;
    min-height: 700px;
    margin-top: -30rem;
    position: relative;
    right: -6rem;
    top: -3rem;
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    z-index: 0;
    }
 

  @media screen and (max-width: 465px) {
    margin-right: 13rem;
    div {
   
    max-width: 420px;
    margin-right: 3rem;

  }
    .heroImage{
      width: 420px;
    }
    .heroBackgroundImage {
    max-width: 500px;
    min-height: 600px;
    margin-top: -30rem;
  }
  
  .heroDesign {
    min-width: 60px;
    min-height: 60px;
    
  }
}
   
`;

export default StyledHeroImageSection;
