import styled from "styled-components";

const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  .navLogoContainer {
    display: flex;
    column-gap: 11px;
    width: 30rem;

    img {
      max-width: 26px;
      max-height: 27.35px;
      align-self: center;
    }
    .navItems {
      width: 40rem;
    }
  }
`;

export default StyledContainer;
