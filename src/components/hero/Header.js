import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NavBar from "../navbar/NavBar"
import Banner from "./Banner"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const hero = data.hero.childImageSharp.fluid
  return (
    <StyledHeader>
      <BackgroundImage className="bg-image" fluid={hero}>
        <NavBar />
        <Banner title="Mio Pastalogy" subtitle="Fresh Pasta Made Daily" />
        <div className="button-container">
          <a href="https://mio-pastalogy.square.site">
            <button className="banner-button">Order Takeout</button>
          </a>
        </div>
        {/* <div className="contact-container">
          <ul>
            <li className="phone">(808) 123-4567</li>
            <li>1110 McCully St. Honolulu, HI 96826</li>
            <li>Monday-Sunday 10:00am-10:00pm</li>
          </ul>
        </div> */}
      </BackgroundImage>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  .bg-image {
    width: 100%;
    height: 800px;
  }
  .button-container {
    width: 100%;
    margin: 2rem auto 0rem auto;
    text-align: center;
    .banner-button {
      margin: 0rem auto;
      font-size: 0.9rem;
      font-weight: bolder;
      text-transform: uppercase;
      color: var(--darkGray);
      background: none;
      padding: 0.5rem 1.2rem;
      color: var(--darkGray);
      border: 2px solid var(--darkGray);
      border-radius: 25px;
      transition: 100ms ease-in-out;
      &:hover {
        cursor: pointer;
        background: white;
        color: var(--mainColor);
      }
    }
  }
  /* .contact-container {
    width: 100%;
    color: var(--mainColor);
    margin-top: 70px;
    font-size: 1rem;
    ul {
      list-style-type: none;
      margin-left: 2rem;
    }
    li:nth-child(1) {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .phone {
      color: var(--mainColor) !important;
    }
  } */

  @media (max-width: 768px) {
    .bg-image {
      width: 100%;
      height: 550px;
    }
    /* .contact-container {
      margin-top: 50px;
      text-align: center;
      font-size: 0.8rem;
      ul {
        list-style-type: none;
        margin-left: 0rem;
      }
      li:nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
      }
    } */
  }
`

export default Header
