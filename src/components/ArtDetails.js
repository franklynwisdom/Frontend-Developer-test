import axios from "axios";
import React, { useEffect } from "react";

import { AiOutlineShareAlt } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import backgroundDesign from "../images/imageBackgroundNextPage.png";
import StyledArtDetails from "../styles/ArtDetails.styled";
import StyledArtDetailsIconContainer from "../styles/ArtDetailsIconContainer.styled";
import dataStore from "./ArtistoStore";
import Button from "./Button";
import Nav from "./Nav";

const ArtDetails = () => {
  const artDetailsData = dataStore((state) => state.artDetailsData);
  const updateArtDetailsData = dataStore((state) => state.updateArtDetailsData);
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getArtDetails = async () => {
      await axios
        .get(`https://api.artic.edu/api/v1/artworks/${userId}`)
        .then((response) => {
          updateArtDetailsData(response?.data?.data);
        });
    };

    getArtDetails();
  }, [userId]);

  return (
    <StyledArtDetails>
      <Nav />
      <StyledArtDetailsIconContainer>
        <IoIosArrowRoundBack size="3rem" onClick={() => navigate(-1)} />
        <p>
          <AiOutlineShareAlt size="2rem" />
        </p>
      </StyledArtDetailsIconContainer>

      <div>
        <div className="artDetailsContainer">
          {artDetailsData?.image_id ? (
            <img
              src={`https://www.artic.edu/iiif/2/${artDetailsData?.image_id}/full/843,/0/default.jpg`}
              alt={artDetailsData?.thumbnail?.alt_text}
              className="artDetailsImage"
            />
          ) : (
            <p>Image is not available</p>
          )}

          <div className="artDetailsContents">
            <h3>{artDetailsData?.title}</h3>
            <p>{artDetailsData?.medium_display}</p>
            <div className="artDetailsButtons" onClick={() => navigate(-1)}>
              <Button
                buttonColor="white"
                buttonBackgroundColor="#FBAF00"
                buttonText="Explore Arts"
                buttonTextColor="black"
              />
              <p className="artDetailsExplore">Explore Arts</p>
            </div>
          </div>
        </div>
        <img
          src={backgroundDesign}
          alt="background design"
          className="backgroundDesign"
        />
      </div>
    </StyledArtDetails>
  );
};
export default ArtDetails;
