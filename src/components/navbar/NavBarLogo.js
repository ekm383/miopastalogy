import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const NavBarLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mio-pastalogy-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <LogoWrapper>
      <Img
        className="logo"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  /* border: 1px solid red; */
  margin: 0rem auto 0rem 39%;
  .logo {
    width: 90px;
  }
  @media (min-width: 768px) {
    /* border: 1px dotted blue; */
    width: 20vw;
    margin: 0;
    padding-top: 0rem;
    .logo {
      width: 120px;
    }
  }
`

export default NavBarLogo
