import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaYelp } from "react-icons/fa"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "#menu",
        text: "Menu",
      },
      {
        id: 2,
        path:
          "https://www.grindztogo.com/single.php/order/restaurant/mio-pastalogy/68?takeout=1",
        text: "Order Takeout",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/miopastalogy/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.yelp.com/biz/mio-pastalogy-honolulu">
              <FaYelp />
            </a>
          </li>
        </ul>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  margin: 0rem auto;
  li {
    list-style-type: none;
  }
  svg {
    padding-top: 5px;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    color: var(--darkGray);
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background: var(--mainColor);
      color: var(--white);
    }
  }
  .social {
    padding-left: 1rem;
    ul {
      list-style-type: none;
    }
    li {
      display: inline;
      padding-left: 0.2rem;
    }
    a {
      font-size: 1.5rem;
      color: var(--mainColor);
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--darkGray);
      }
    }
  }
  height: ${props => (props.open ? "120px" : "0px")};
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  @media (min-width: 768px) {
    /* border: 1px dotted blue; */
    width: 75vw;
    padding-right: 3rem;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav-link {
      font-size: 0.9rem;
      padding: 0rem 1rem;
      color: var(--white);
      text-transform: uppercase;
      font-weight: bold;
    }
    .nav-link:hover {
      color: var(--mainColor);
      background: none;
    }
    .social {
      ul {
        list-style-type: none;
      }
      li {
        display: inline;
      }
      svg {
        padding-top: 0rem;
      }
      a {
        font-size: 1.2rem;
        color: var(--white);
        transition: all 0.2s ease-in-out;
        &:hover {
          color: var(--mainColor);
        }
      }
    }
  }
`

export default NavBarLinks
