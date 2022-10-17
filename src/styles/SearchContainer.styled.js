import styled from "styled-components";

const StyledSectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -0.03em;
    max-width: 470px;
  }
  p {
    line-height: 30px;
    font-weight: 400;
    letter-spacing: -0.01em;
    max-width: 500px;

  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 8rem;
  }

  @media screen and (max-width: 465px) {
    margin-bottom: 8rem;
  }
`;

export default StyledSectionContainer;
