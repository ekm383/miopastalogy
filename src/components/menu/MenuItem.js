import React from "react"
import styled from "styled-components"

const MenuItem = ({ dish, description }) => {
  return (
    <StyledMenuItem>
      <h4>{dish}</h4>
      <p>{description}</p>
    </StyledMenuItem>
  )
}

const StyledMenuItem = styled.div`
  margin: 1rem 0rem;
  h4 {
    color: var(--secondaryColor);
    font-size: 1rem;
    font-weight: lighter;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-family: "helvetica";
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--gray);
  }
`

export default MenuItem
