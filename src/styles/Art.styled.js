import styled from "styled-components";

const StyledArt = styled.section`


  .artFooterBackgroundImage{
    position: absolute;
    left: -1rem;
    max-width: 36rem;
    margin-top: -22rem;
  }

  @media screen and (max-width: 465px) {
    .artFooterBackgroundImage{
      width: 25rem;

    }
  }


`;

export default StyledArt;
