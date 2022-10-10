import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import dataStore from "./ArtistoStore";

const Art = () => {
  const inputData = dataStore((state) => state.inputData);

  const apiData = dataStore((state) => state.apiData);
  const updatedApiData = dataStore((state) => state.updatedApiData);

  const filteredData = dataStore((state) => state.filteredData);

  console.log(filteredData);

  const apiURL = "https://api.artic.edu/api/v1/artworks";
  const { isLoading, error, data, refetch } = useQuery(
    ["artData"],
    async () => {
      console.log("rendered");
      const response = await axios.get(apiURL);
      return response.data;
    }
  );
  updatedApiData(data);
  console.log(apiData);

  if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;

  if (error)
    return (
      <h1 style={{ color: "white" }}>
        {"An error has occurred: " + error.message}
      </h1>
    );

  return (
    <>
      {inputData === ""
        ? apiData?.data.map((item) => {
            const {
              title,
              id,
              place_of_origin,
              artist_title,
              timestamp,
              thumbnail,
            } = item;
            const parsedDate = Date.parse(timestamp);
            const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(parsedDate)

            return (
              <div key={id}>
            
                <img style={{width: "100px" }} src={thumbnail?.lqip} alt={thumbnail?.alt_text} />
                <h3>{title}</h3>
                <p>
                  
                  {formattedDate} <br/>
                  <span>{artist_title},{place_of_origin}</span>
                </p>
              </div>
            );
          })
        : filteredData?.map((item) => {
            const { date_display, id } = item;
            return <div key={id}>{date_display}</div>;
          })}
    </>
  );
};

export default Art;
