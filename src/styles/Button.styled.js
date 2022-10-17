import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${props => props.buttonBackgroundColor};
  height: 4rem;
  margin-right: 4px;
  margin-top: 8px;
  border-radius: 0 30px;
  margin-right: 2rem;
  width: 9rem;

  button{
    position: relative;
    width: 9rem;
    height: 4rem;
    font-size: 1.25rem;
    background-color: ${props => props.buttonColor};
    color: ${props => props.buttonTextColor};
    top: -5px;
    right: 4px;
    border: none;
    border-radius: 0 30px;
    cursor: pointer;

  }
`;

export default StyledButton;
