import styled from "styled-components";

const StyledArtDataContainer = styled.section`
  width: 436px;
  height: 581px;

  background-color: #1A1405;
  border-radius: 180px 0px;

  img {
    height: 290.5px;
    width: 436px;
    margin-bottom: 0;
    background-color: #110C00;
    border-radius: 180px 0px 0px 0px;
  }
  
  aside {
    margin-left: 22px;
    min-height: 200px;
    min-width: 436px;

 
    /* margin-top: 0;
    position: relative;
    top: -0.3rem; */

    h3{
      max-width: 19rem;
      font-weight: 800;
      font-size: 1.5rem;
    }
    p{
      font-size: 1.3rem;
      max-width: 17rem;
      max-height:1.8rem ;
    }

  }
`;

export default StyledArtDataContainer;
