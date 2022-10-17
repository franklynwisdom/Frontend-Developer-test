import styled from "styled-components";

const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2.25rem;


  .navLogoContainer {
    display: flex;
    column-gap: 11px;
    width: 30rem;

    img {
      width: 1.6rem;
      height: 1.7rem;
      align-self: center;
    }
    .navTitle{
      font-size: 1.5rem;
      font-weight: 700;
      height: 1.25rem;
      line-height: 1.25rem;
    }
    .navItems {
      width: 40rem;
      margin-right: 2rem;

      
    } 
  }
`;

export default StyledContainer;
