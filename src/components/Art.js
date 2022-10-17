import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import backgroundImage from "../images/imageBackgroundFooter.png";
import placeholder from "../images/placeholder.jpg";
import StyledArt from "../styles/Art.styled";
import StyledArtDataContainer from "../styles/ArtDataContainer";
import StyledArtWrapper from "../styles/ArtWrapper";
import StyledShowMoreComponentLinks from "../styles/ShowMoreLinksStyled";


import dataStore from "./ArtistoStore";
import ShowMore from "./ShowMore";

const Art = () => {
  const inputData = dataStore((state) => state.inputData);

  const apiData = dataStore((state) => state.apiData);
  const updatedApiData = dataStore((state) => state.updatedApiData);

  const filteredData = dataStore((state) => state.filteredData);
  console.log(filteredData);
  console.log(apiData?.data);
  // console.log(apiData?.pagination?.next_url);

  // function exploreMore(event){
  //   console.log("explore more");
  // }

  const apiURL = "https://api.artic.edu/api/v1/artworks?limit=6";
  const { isLoading, error, data } = useQuery(["artData"], async () => {
    const response = await axios.get(apiURL);
    return response.data;
  });
  updatedApiData(data);

  if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;

  if (error)
    return (
      <h1 style={{ color: "white" }}>
        {"An error has occurred: " + error.message}
      </h1>
    );

  //https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg

  return (
    <StyledArt>
      <StyledArtWrapper>
        {inputData === ""
          ? apiData?.data?.map((item) => {
              const {
                title,
                id,
                place_of_origin,
                artist_title,
                timestamp,
                thumbnail,
                image_id,
              } = item;
              const parsedDate = Date.parse(timestamp);
              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                dateStyle: "full",
              }).format(parsedDate);

              // const getImage = async (event) => {

              //   await axios
              //     .get(`https://api.artic.edu/api/v1/artworks?page=${pageValue}&limit=10`)
              //     .then((response) => {
              //       updateShowMoreData(response?.data);

              //     });

              // };

              return (
                <StyledShowMoreComponentLinks to={`/arts/${id}`}>
                  <StyledArtDataContainer key={id}>
                    {image_id ? (
                      <img
                        // style={{ width: "100px" }}
                        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg
                  `}
                        alt={thumbnail?.alt_text}
                      />
                    ) : (
                      <p>Image is not available</p>
                    )}

                    <aside>
                      <h3>{title}</h3>
                      <p>
                        {formattedDate} <br />
                        <span>
                          {artist_title},{place_of_origin}
                        </span>
                      </p>
                    </aside>
                  </StyledArtDataContainer>
                </StyledShowMoreComponentLinks>
              );
            })
          : filteredData?.data?.map((item) => {
              const {
                title,
                id,
                place_of_origin,
                artist_title,
                timestamp,
                thumbnail,
                image_id,
              } = item;
              const parsedDate = Date.parse(timestamp);
              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                dateStyle: "full",
              }).format(parsedDate);
              return (
                <StyledShowMoreComponentLinks to={`/arts/${id}`} key={id}>
                  <StyledArtDataContainer >
                    {/* {apiData.data.map((item) => {
                      const {id} =item;

                      return(<div></div>)
                    })} */}
                    
                    {image_id ? (
                      <img
                        // style={{ width: "100px" }}
                        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg
                  `}
                        alt={thumbnail?.alt_text}
                      />
                    ) : (
                      <img src={placeholder} alt="placeholder" />
                    )}
                    <aside>
                      <h3>{title}</h3>
                      <p>
                        {formattedDate} <br />
                        <span>
                          {artist_title},
                          {place_of_origin || "No place of origin"}
                        </span>
                      </p>
                    </aside>
                  </StyledArtDataContainer>
                </StyledShowMoreComponentLinks>
              );
            })}
        {/* <Button
        buttonColor="white"
        buttonBackgroundColor="#FBAF00"
        buttonText="Explore arts"
        buttonTextColor="black"
        onClick={exploreMore()}
      /> */}
      </StyledArtWrapper>
      <ShowMore />
      <img
        className="artFooterBackgroundImage"
        src={backgroundImage}
        alt="This is a background design item"
      />
    </StyledArt>
  );
};

export default Art;
