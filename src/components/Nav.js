import React from "react";
import artistoLogo from "../images/artistoLogo.png";
import StyledContainer from "../styles/Nav.styled";
import StyledNavButtonContainer from "../styles/NavButtonContainer.styled";
import StyledNavItems from "../styles/navItems.styled";
import NavLinks from "../styles/NavLinks.styled";
import Button from "./Button";

const Nav = () => {
  return (
    <StyledContainer>
      <div className="navLogoContainer">
        <img src={artistoLogo} alt="Artisto Logo" />
        <p>Artisto</p>
      </div>
      <StyledNavItems>
        <p>
          <NavLinks to="/">Events</NavLinks>
        </p>
        <p>
          <NavLinks to="/">Museum</NavLinks>
        </p>
        <p>
          <NavLinks to="/">Arts</NavLinks>
        </p>
        <p>
          <NavLinks to="/">Galleries</NavLinks>
        </p>
      </StyledNavItems>
      <StyledNavButtonContainer>
        <Button
          buttonColor="#FBAF00"
          buttonBackgroundColor="white"
          buttonText="Login"
          buttonTextColor="white"
        />
        <Button
          buttonColor="white"
          buttonBackgroundColor="#FBAF00"
          buttonText="Explore arts"
          buttonTextColor="black"
        />
      </StyledNavButtonContainer>
    </StyledContainer>
  );
};

export default Nav;
