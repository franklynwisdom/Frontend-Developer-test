import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${props => props.buttonBackgroundColor};
  min-height: 41px;
  margin-right: 4px;
  margin-top: 8px;
  border-radius: 0 30px;

  button{
    position: relative;
    width: 100px;
    min-height: 41px;

    background-color: ${props => props.buttonColor};
    color: ${props => props.buttonTextColor};
    top: -5px;
    right: 4px;
    border: none;
    border-radius: 0 30px;
    cursor: pointer;
    background-color: red;

  }
`;

export default StyledButton;
