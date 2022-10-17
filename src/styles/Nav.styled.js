import styled from "styled-components";

const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-right: 2.25rem;
  z-index: 1;


  /* height: 8rem;
 
  position: fixed;
  
  z-index: 1;
  width: 100%; */


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
    
    @media screen and (max-width: 768px) {
      /* padding-left: 5rem;
      z-index: 1;
      margin-top: -2.8rem; */
      .navLogoContainer{
        display: none;
      }
    }

    /* aside {
    display: none;
  }
  .mobileNavBar {
    display: none;
  } */
    /* @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
    .hamburgerIcon {
      font-size: 4rem;
      width: 100vh;
      cursor: pointer;
      position: relative;
      right: -41.5rem;
    }
    .navButtons {
      display: none;
    }
    .responsiveNavItems {
      text-align: center;
    }
    .mobileNavBar {
      display: block;
      position: relative;
      left: -20rem;
    }
    .mobileNavButtons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .mobileNavButtons button {
      margin-bottom: 2rem;
      width: 10rem;
    }
    .responsiveNavItems p {
      padding: 1rem;
    }
    .responsiveNavMainContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 55rem;
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      margin-top: 1rem;
      z-index: 1;
    }
    .responsiveNavContainer {
      display: flex;
      flex-direction: column;
      width: 30rem;
      border-radius: 10px;
      position: relative;
      margin-top: -14rem;
      background-color: #3a3052;
    }
  } */
  
`;

export default StyledContainer;
