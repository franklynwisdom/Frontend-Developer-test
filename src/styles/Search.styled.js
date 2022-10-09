import { FaSistrix } from "react-icons/fa";
import styled from "styled-components";

const StyledSearch = styled.section`
  position: relative;
  top: 3rem;
  input {
    width: 337px;
    height: 46px;
    background-color: #1a1405;
    border-radius: 51px;
    border: none;
    background: url(${(<FaSistrix />)});
  }
  input::placeholder {
    color: #fbaf00;
    position: relative;
    left: 2rem;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.01em;
  }
  input[placeholder] {
    color: #fbaf00;
    font-size: 20px;
  }
`;

export default StyledSearch;
