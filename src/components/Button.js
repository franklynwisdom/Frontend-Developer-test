import React from 'react';
import StyledButton from '../styles/Button.styled';

const Button = (props) => {
    const {buttonText, buttonColor, buttonBackgroundColor, buttonTextColor} = props;
  return (
    <StyledButton 
        buttonBackgroundColor= {buttonBackgroundColor}
        buttonColor = {buttonColor}
        buttonTextColor = {buttonTextColor}
    >
        <button>
            <span>{buttonText}</span>
        </button>
    </StyledButton>
  )
}

export default Button