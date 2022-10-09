import React from "react";
import designItem from "../images/designItem.png";
import heroImage from "../images/heroImage.png";
import imageBackgroundHero from "../images/imageBackgroundHero.png";
import StyledHero from "../styles/Hero.styled";
import StyledHeroDetails from "../styles/HeroDetails.styled";
import StyledHeroImageSection from "../styles/HeroImageSection.styled";
import Button from "./Button";

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroDetails>
        <h1>Discover amazing art around the world</h1>
        <p>
          Browse a curated selection of art around the world, including museum
          exhibitions, gallery openings, upcoming and many more
        </p>
        <Button
          buttonColor="white"
          buttonBackgroundColor="#FBAF00"
          buttonText="Explore arts"
          buttonTextColor="black"
        />
      </StyledHeroDetails>
      <StyledHeroImageSection>
        <img className="heroDesign" src={designItem} alt="Hero Design Item" />
        <div>
          <img className="heroImage" src={heroImage} alt="Hero Section Image" />
        </div>
        <img
          className="heroBackgroundImage"
          src={imageBackgroundHero}
          alt="Hero section background image"
        />
      </StyledHeroImageSection>
    </StyledHero>
  );
};

export default Hero;
