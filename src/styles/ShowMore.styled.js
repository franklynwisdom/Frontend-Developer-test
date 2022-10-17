import styled from "styled-components";

const StyledShowMore = styled.section`
  background-color: #fbaf00;
  min-height: 41px;
  left: 32px;
  margin-top: 5rem;
  border-radius: 0 30px;
  width: 9rem;
  margin: 0 auto;
  margin-top: 10rem;
  button {
    position: relative;
    width: 9rem;
    min-height: 4rem;
    margin: auto;
    place-self: center; 

    color: black;
    top: -5px;
    right: 4px;

    border: none;
    border-radius: 0 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 465px) {
    position: relative;
    top: -8rem;
  }
`;

export default StyledShowMore;
