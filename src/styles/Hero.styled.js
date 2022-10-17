import styled from "styled-components";

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  /* display: flex; */
  justify-content: space-between;
  margin-top: 3rem;

  @media screen and (max-width: 465px) {
  }
`;

export default StyledHero;
