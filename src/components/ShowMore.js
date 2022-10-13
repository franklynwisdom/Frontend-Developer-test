import axios from "axios";
import React from "react";
import dataStore from "./ArtistoStore";

const ShowMore = () => {
  const apiData = dataStore((state) => state.apiData);
  const updatedApiData = dataStore((state) => state.updatedApiData);
  const showMoreData = dataStore((state) => state.showMoreData);
  const updateShowMoreData = dataStore((state) => state.updateShowMoreData);

  const pageValue = dataStore((state) => state.pageValue);
  const updatePageValue = dataStore((state) => state.updatePageValue);

  const showMoreEventTarget = dataStore((state) => state.showMoreEventTarget);
  const updateShowMoreEventTarget = dataStore(
    (state) => state.updateShowMoreEventTarget
  );

  //   console.log(showMoreData);
  //   console.log(apiData?.pagination?.total);

  const exploreMore = async (event) => {
    updatePageValue(pageValue + 1);
    console.log(event.type);
    updateShowMoreEventTarget(event.type);
    await axios
      .get(`https://api.artic.edu/api/v1/artworks?page=${pageValue}&limit=10`)
      .then((response) => {
        updateShowMoreData(response?.data);
      });
  };
  console.log(showMoreData);
  

  //   updatedApiData(showMoreData);

  // const exploreMore = () => {
  //     // for (let index = 0; index < apiData?.pagination?.total; index++) {

  //     //     console.log(index);

  //     // }
  //     await axios.get(`https://api.artic.edu/api/v1/artworks?page=2&limit=10`).then((response) => {
  // //       console.log(response?.data);

  // //       updateShowMoreData(response?.data);
  // //     });
  // //   };
  //     setValue(value + 1);
  //     console.log(value);
  // }

  // for (let index = 0; index < array.length; index++) {
  //     const element = array[index];

  // }
  //   const { isLoading, error, data } = useQuery(["filteredData"], async () => {
  //     const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=2&limit=10`);
  //     return response.data;
  //   });
  // //   updatedApiData(data);
  // //   updateShowMoreData(response?.data);

  //   if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;

  //   if (error)
  //     return (
  //       <h1 style={{ color: "white" }}>
  //         {"An error has occurred: " + error.message}
  //       </h1>
  //     );
  // console.log(showMoreData);
  // console.log(apiData);
  //   if (showMoreEventTarget === "click" ) {
  //     console.log("fine");
  //   }

  return (
    <div>
      {showMoreEventTarget === "click" ? (
        showMoreData?.data?.map((item) => {
          const {
            title,
            id,
            place_of_origin,
            artist_title,
            timestamp,
            thumbnail,
          } = item;
          const parsedDate = Date.parse(timestamp);
          const formattedDate = new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
          }).format(parsedDate);

          return (
            <div key={id} style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", justifyContent: "center"}}>
              <img
                style={{ width: "50px" }}
                src={thumbnail?.lqip}
                alt={thumbnail?.alt_text}
              />
              <h3>{title}</h3>
              <p>
                {formattedDate} <br />
                <span>
                  {artist_title},{place_of_origin}
                </span>
              </p>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      <button
        onClick={(event) => {
          exploreMore(event);
        }}
        style={{
          backgroundColor: "red",
          border: "none",
          outline: "2px solid yellow",
        }}
      >
        Explore More
      </button>
    </div>
  );
};

export default ShowMore;
