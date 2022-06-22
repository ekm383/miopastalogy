import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MenuList = () => {
  const data = useStaticQuery(graphql`
    query {
      menu01: file(
        relativePath: { eq: "MioPastalogy_Screen_Menu_2022_06_21_1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      menu02: file(
        relativePath: { eq: "MioPastalogy_Screen_Menu_2022_06_21_2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const menu01 = data.menu01.childImageSharp.fluid
  const menu02 = data.menu02.childImageSharp.fluid
  return (
    <StyledMenu>
      <div id="menu">
        <a href="https://mio-pastalogy.square.site">
          <Img className="menu" fluid={menu01} />
        </a>
        <a href="https://mio-pastalogy.square.site">
          <Img className="menu" fluid={menu02} />
        </a>
      </div>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  width: 75%;
  padding: 1rem 0rem;
  margin: 0rem auto;
  .menu {
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 0rem auto;
  }
`

export default MenuList
