import axios from "axios";
import _ from "lodash";
import React from "react";
import StyledArtDataContainer from "../styles/ArtDataContainer";
import StyledArtWrapper from "../styles/ArtWrapper";
import StyledShowMore from "../styles/ShowMore.styled";
import ShowMoreContainer from "../styles/ShowMoreContainer.styled";
import StyledShowMoreComponentLinks from "../styles/ShowMoreLinksStyled";
import dataStore from "./ArtistoStore";

const ShowMore = () => {
  const apiData = dataStore((state) => state.apiData);
  const updatedApiData = dataStore((state) => state.updatedApiData);
  const showMoreData = dataStore((state) => state.showMoreData);
  const updateShowMoreData = dataStore((state) => state.updateShowMoreData);

  const pageValue = dataStore((state) => state.pageValue);
  const updatePageValue = dataStore((state) => state.updatePageValue);

  const testData = dataStore((state) => state.testData);
  const updatedTestData = dataStore((state) => state.updatedTestData);

  const showMoreEventTarget = dataStore((state) => state.showMoreEventTarget);
  const updateShowMoreEventTarget = dataStore(
    (state) => state.updateShowMoreEventTarget
  );

  const searchEventTarget = dataStore((state) => state.searchEventTarget);
  const test = _.cloneDeep(showMoreData);

  updatedTestData(showMoreData);
  console.log(testData);

  //   console.log(showMoreData);
  //   console.log(apiData?.pagination?.total);

  const exploreMore = async (event) => {
    // const b = ['a', 'v']

    updatePageValue(pageValue + 1);
    updateShowMoreEventTarget(event.type);
    await axios
      .get(`https://api.artic.edu/api/v1/artworks?page=${pageValue}&limit=6`)
      .then((response) => {
        updateShowMoreData(response?.data);
      });
  };
  console.log(showMoreData);
  //  const m = _.merge(apiData,showMoreData);
  //  let a = [showMoreData]

  //   useEffect(() => {
  //     updatedApiData(a);
  //   }, [a]);

  //   // ;
  console.log(apiData);

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
    <ShowMoreContainer>
      <StyledArtWrapper>
        {searchEventTarget === "change" ? (
          <div></div>
        ) : showMoreEventTarget === "click" ? (
          showMoreData?.data?.map((item) => {
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
              <StyledShowMoreComponentLinks
                to={`/arts/${id}`}
                key={id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
                  justifyContent: "center",
                }}
              >
                <StyledArtDataContainer>
                  {image_id ? (
                    <img
                      style={{ width: "100px" }}
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
        ) : (
          <div></div>
        )}
      </StyledArtWrapper>
      {pageValue !== apiData?.pagination?.total ? (
        <StyledShowMore>
          <button
            onClick={(event) => {
              exploreMore(event);
            }}
          >
            Explore More
          </button>
        </StyledShowMore>
      ) : (
        <div></div>
      )}
    </ShowMoreContainer>
  );
};

export default ShowMore;
