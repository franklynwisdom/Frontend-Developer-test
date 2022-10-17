import styled from "styled-components";

const StyledNavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
  margin-right: 5rem;

  Button{
    margin-right: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
}
`;

export default StyledNavButtonContainer;
