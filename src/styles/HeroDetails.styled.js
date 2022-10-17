import styled from "styled-components";

const StyledHeroDetails = styled.aside`
  h1{
    font-weight: 700;
    font-size: 4.25rem;
    line-height: 72px;
    width: 701px;

  }
  p{
    font-weight: 400;
    line-height: 30px;
    width: 515px;
    margin-bottom: 67.88px;
  }
  Button{
    max-width: 208.65px;
    button{
        width: 208.65px;

    }
  }
  
  @media screen and (max-width: 465px) {
    h1{
      font-size: 3rem;
      width: 500px;
    }
    p{
      width: 450px;
    }
  }
   
  
`;

export default StyledHeroDetails;
