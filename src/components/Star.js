import React from 'react'
import star from "../images/star.png"
import StyledStar from '../styles/Star.styled'

const Star = () => {
  return (
    <StyledStar>
        <img src={star} alt='star image' />
    </StyledStar>
  )
}

export default Star