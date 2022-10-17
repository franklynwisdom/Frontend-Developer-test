import styled from "styled-components";

const StyledMobileNav = styled.nav`
  display: none;

  .hamburgerIcon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: -1rem;
    position: fixed;
    z-index: 1;


    .hamburgerIcon {
      display: block;
      position: relative;
      z-index: 1;
      font-size: 2.5rem;
      cursor: pointer;
      margin-top: 1rem;
      margin-right: -12rem;
    }
    .mobileNavMenu {
      position: absolute;
      background-color: black;

      height: 10rem;
      margin-bottom: -3rem;
    top: -3rem;
    left: -2rem;
      width: 100vh;
      display: flex;
      justify-content: space-between;
    }
    .mobileNavLogoContainer {
      width: 15rem;
      display: flex;
      margin-left: 2rem;
    }
    .mobileNavLogoContainer img {
      margin-right: 3rem;
      margin-top: 1.5rem;
      height: 2rem;
      width: 2rem;
    }
    .mobileNavLogoContainer p {
      margin-top: 1.8rem;
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: -1.5rem;
    }
    .responsiveNavItems {
      display: block;
      position: relative;
      margin: 0 auto;
      background-color: purple;
      margin-right: -22rem;
      margin-top: -16rem;
      width: 30rem;
      border-radius: 10px;
      text-align: center;
    }
    .responsiveNavMainContainer {
      display: flex;
      justify-content: center;
      padding-top: 3rem;
      align-items: center;
      height: 100vh;
      left: -3rem;
      width: 55rem;
      position: fixed;
      margin-top: 1rem;
      z-index: 1;

      background-color: rgba(0, 0, 0, 0.6);
    }
    .responsiveNavContainer {
      display: flex;
      flex-direction: column;
      left: -3rem;
      border-radius: 10px;
      position: relative;
      margin-top: -14rem;
      z-index: 1;
    }
    .responsiveNavItems p {
      padding: 1rem;
    }
    aside {
      margin-left: 11rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 425px) {
    margin-top: 1rem;
    z-index: 1;
    height: 100rem;
    width: 100rem;
  }
  .mobileNavMenu {
   

    top: -5rem;
   
  }
  .responsiveNavMainContainer {
    left: -7rem;
    height: 150vh;
  }
  .hamburgerIcon {
    left: -29rem;
  }
  .responsiveNavItems {
    left: -11.5rem;
  }
`;

export default StyledMobileNav;
