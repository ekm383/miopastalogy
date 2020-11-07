import React from "react"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import NavBarLogo from "./NavBarLogo"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <NavBarLogo />
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--darkGray);
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    /* border: 1px dotted blue; */
    .toggle-icon {
      display: none;
    }
  }
`

export default NavBarHeader
