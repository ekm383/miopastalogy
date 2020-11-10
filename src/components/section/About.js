import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { FaYelp, FaInstagram } from "react-icons/fa"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      exterior: file(relativePath: { eq: "pasta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      food: file(relativePath: { eq: "mio-pastalogy-pasta.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      texture: file(relativePath: { eq: "yellow-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const exterior = data.exterior.childImageSharp.fluid
  const food = data.food.childImageSharp.fluid
  const texture = data.texture.childImageSharp.fluid
  return (
    <BackgroundImage className="bg-texture" fluid={texture}>
      <StyledAbout>
        <div className="img-container">
          <Img className="exterior-img" fluid={exterior} alt="exterior image" />
          <Img className="food-img" fluid={food} alt="exterior image" />
        </div>
        <div className="copy-container">
          <h4>Quality cuisine made with love and experience.</h4>
          <h2>MIO PASTALOGY</h2>
          <p>
            The concept of Mio Pastalogy is being able to provide home made
            fresh pasta, sauces, and fresh daily ingredients in an easy and
            quick manner to our customers. Our customers will have the freedom
            in deciding on how to “build” their own personal pasta creation or
            choose from one of our own in house specialty dishes. The creation
            process that we offer is what makes Mio Pastalogy a cut above the
            rest. Because here..it is truly “my” pasta.. Buon Appetito.
          </p>
          <div className="actions-container">
            <a href="/">
              <FaYelp />
            </a>
            <a href="https://www.instagram.com/miopastalogy/">
              <FaInstagram />
            </a>
            <a href="https://goo.gl/maps/Y4CgP4GTSmJHDkUt6">
              <button className="actions-button">Directions</button>
            </a>
          </div>
        </div>
      </StyledAbout>
    </BackgroundImage>
  )
}

const StyledAbout = styled.div`
  width: 100vw;
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .img-container {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .exterior-img {
      width: 350px;
    }
    .food-img {
      width: 250px;
      margin-top: -80px;
      margin-right: -30px;
    }
  }
  .copy-container {
    flex-basis: 50%;
    margin-left: 1rem;
    position: relative;
    z-index: 1;
    color: var(--mainColor);
    h4 {
      font-family: "helvetica";
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
    h2 {
      font-family: "helvetica";
      font-size: 3rem;
      font-weight: lighter;
      text-transform: uppercase;
      margin-left: -50px;
      position: relative;
      z-index: 1;
      text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.8);
    }
    p {
      color: var(--darkGray);
    }
  }
  .actions-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3rem;
    padding-top: 2rem;
    svg {
      font-size: 2rem;
      color: var(--mainColor);
      margin-right: 2px;
      transition: 100ms ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--darkGray);
      }
    }
    .actions-button {
      margin-left: 5px;
      background: none;
      padding: 0.3rem 1.2rem;
      border-radius: 25px;
      border: 2px solid var(--mainColor);
      color: var(--mainColor);
      text-transform: uppercase;
      transition: 100ms ease-in-out;
      &:hover {
        cursor: pointer;
        border: 2px solid var(--darkGray);
        color: var(--darkGray);
      }
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    flex-direction: column-reverse;
    margin: 0rem auto;
    padding: 2rem 0rem;
    .img-container {
      .food-img {
        width: 200px;
        margin-right: 15px;
      }
    }
    .copy-container {
      margin: 0rem auto 2rem auto;
      text-align: center;
      h2 {
        font-size: 2rem;
        margin-left: 0;
      }
    }
    .actions-container {
      padding-right: 0rem;
      justify-content: center;
    }
  }
`

export default About
