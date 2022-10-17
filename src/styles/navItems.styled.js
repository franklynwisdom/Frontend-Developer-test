import styled from "styled-components";

const StyledNavItems = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  color: white;

  p {
    font-size: 1rem;
    margin-right: 3.125rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
}
`;

export default StyledNavItems;
