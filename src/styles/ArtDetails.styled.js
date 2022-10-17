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
    flex-wrap: wrap;
    z-index: 1;

    
  } 
  .artDetailsContainer h3{
    font-size: 2rem;
    font-weight: 800;
    line-height: 3.125rem;
  }
  .artDetailsContainer p{
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.87rem;
  }

  .artDetailsImage{
      width: 400px;
      border-radius: 180px 0px;
      min-height: 550px;
    }
    .artDetailsButtons{
      display: flex;
      justify-content: space-between;
      margin-top: 19rem;
      width: 18rem;
    
      font-weight: 600;


      p{
        cursor: pointer;
      }
    }
    Button{
      font-size: 1.25rem;
      line-height: 1.87rem;
    }
    .artDetailsExplore{
      font-size: 1.87rem;
      line-height: 1.87rem;
      margin-top: 1rem;
    }
    .backgroundDesign{
    position: relative;
    right: -48rem;
    top: -26rem;
    margin-bottom: -27rem;
    
  }

  @media screen and (max-width: 1024px) {
    .backgroundDesign{
      right: -38rem;
      width: 30rem;
   
    }
  }
  @media screen and (max-width: 768px) {
    .backgroundDesign{
      right: -19rem;
  
    }
  }

    @media screen and (max-width: 465px) {
    .artDetailsImage{
      width: 350px;
      margin-bottom: 4rem;
    }
    .artDetailsButtons{
      position: relative;
      top: -5rem;
    }
    .backgroundDesign{
      right: -7rem;
      width: 20rem;
  
    }
  }
  

  @media screen and (max-width: 375px) {
    .artDetailsImage{
      width: 300px;
    }
    .backgroundDesign{
      right: -7rem;
      width: 16rem;
  
    }
  }
  @media screen and (max-width: 375px) {

    .backgroundDesign{
      right: -5rem;
      width: 14rem;
  
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
