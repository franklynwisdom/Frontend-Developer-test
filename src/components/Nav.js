import React, { useState } from "react";
import artistoLogo from "../images/artistoLogo.png";
import StyledMobileNav from "../styles/mobileNav.styled";
import StyledContainer from "../styles/Nav.styled";
import StyledNavButtonContainer from "../styles/NavButtonContainer.styled";
import StyledNavItems from "../styles/navItems.styled";
import NavLinks from "../styles/NavLinks.styled";
import Button from "./Button";

const Nav = () => {
  const [show, setShow] = useState();

  const ToggleData = () => {
    setShow(!show);
  };
  return (
    <StyledContainer>
      <div className="navLogoContainer">
        <img src={artistoLogo} alt="Artisto Logo" />
        <p className="navTitle">Artisto</p>
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

      {
        <StyledMobileNav className="mobileNavBar">
          <div className="mobileNavMenu">
            <div className="mobileNavLogoContainer">
              <img src={artistoLogo} alt="Artisto Logo" />
              <p className="navTitle">Artisto</p>
            </div>
            <div onClick={ToggleData} className="hamburgerIcon">
              {!show ? <> &#8801;</> : <>&#10005;</>}
            </div>
          </div>
          {show ? (
            <div className="responsiveNavMainContainer">
              <div className="responsiveNavContainer">
                <div className="responsiveNavItems">
                  <section>
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
                  </section>

                  <aside>
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
                  </aside>
                </div>
              </div>
            </div>
          ) : null}
        </StyledMobileNav>
      }
    </StyledContainer>
  );
};

export default Nav;
/*

*/
