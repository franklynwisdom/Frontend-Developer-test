import axios from "axios";
import React, { useEffect } from "react";

import { AiOutlineShareAlt } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import StyledArtDetails from "../styles/ArtDetails.styled";
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
      <div style={{ background: "green" }}>
        <IoIosArrowRoundBack size="3rem" onClick={() => navigate(-1)} />
        <p>
          <AiOutlineShareAlt size="2rem" />
        </p>
      </div>

      <div>
        {artDetailsData?.image_id ? (
          <img
            style={{ width: "100px" }}
            src={`https://www.artic.edu/iiif/2/${artDetailsData?.image_id}/full/843,/0/default.jpg`}
            alt={artDetailsData?.thumbnail?.alt_text}
          />
        ) : (
          <p>Image is not available</p>
        )}

        <div>
          <h3>{artDetailsData?.title}</h3>
          <p>{artDetailsData?.medium_display}</p>
          <div>
            <Button
              buttonColor="#FBAF00"
              buttonBackgroundColor="white"
              buttonText="Explore Arts"
              buttonTextColor="white"
            />
            <p>Explore Arts</p>
          </div>
        </div>
      </div>
    </StyledArtDetails>
  );
};
export default ArtDetails;
