import styled from "styled-components";

const StyledArtDetails = styled.div`

  background-color: #110c00;
  height: 100vh;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
  overflow-x: hidden;

 
  color: white;

  .artDetailsContainer{
    display: flex;
    justify-content: space-evenly;

    
  }
  .artDetailsImage{
      width: 365px;
      border-radius: 180px 0px;
      min-height: 400px;
    }
    .artDetailsButtons{
      display: flex;
      justify-content: space-between;

      p{
        cursor: pointer;
      }
    }
`;

export default StyledArtDetails;

// margin: unset;
// padding: unset;
// box-sizing: border-box;
// color: #FFFFFF;
// font-family: 'Sora', sans-serif;
// font-weight: 400;
