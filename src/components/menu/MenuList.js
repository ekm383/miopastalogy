import React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"

const MenuList = () => {
  return (
    <StyledMenu>
      {/* Signature Pasta Section */}
      <div className="category">
        <h4>Signature Pasta</h4>
        <p>No Substitutions</p>
      </div>
      <div id="menu" className="menu-container">
        <div className="column column1">
          <MenuItem dish="Caponata - Pomo Sauce" description="with vegetable" />
          <MenuItem
            dish="Bolognese Eggplant - Pomo sauce"
            description="with beef and eggplant"
          />
          <MenuItem
            dish="Panna Chicken - Cream Sauce"
            description="with herb chicken"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Mentaiko - Oil Garlic Based"
            description="and poached egg"
          />
          <MenuItem
            dish="Aurora Shrimp - Pomo and Panna Sauce"
            description="with shrimp"
          />
        </div>
      </div>
      {/* Custom Section */}
      <div className="space"></div>
      <div className="category">
        <h4>Create Your Own Pasta</h4>
      </div>
      <div className="menu-container">
        <div className="steps-column">
          <h4>Step 1: Choose Pasta</h4>
          <p>
            Spaghetti, Rigatoni, Papardelle, Linguine, Casarecce, Tagliatelle
          </p>
        </div>
        <div className="steps-column">
          <h4>Step 2: Choose Sauce</h4>
          <p>
            Pomodoro (Tomato Sauce), Bolognese (Tomato Sauce w/Beef), Panna
            (Cream Sauce), Aurora (Pomo and Panna Sauce), Pesto (Basil Sauce
            w/Macadamia nut)
          </p>
        </div>
        <div className="steps-column">
          <h4>Step 3: Choose Protein and Vegetable</h4>
          <p>
            Herb Chicken, Italian Sausage, Bacon, Arabiki Sausage, Mentaiko,
            Shrimp, Poached Egg, Scallion, Eggplant, Broccoli, Onion, Tomato,
            Mushroom, Asparagus, Green bell Pepper, Fried Garlic, Olive
          </p>
        </div>
        <div className="steps-column">
          <h4>Step 4: Choose Cheese</h4>
          <p>Ricotta, Parmesan</p>
        </div>
      </div>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  width: 75%;
  padding: 3rem 0rem;
  margin: 0rem auto;
  .space {
    padding: 1.5rem 0rem;
  }
  .category {
    text-align: center;
    margin-bottom: 20px;
    color: var(--mainColor);
    h4 {
      font-weight: lighter;
      font-size: 2rem;
      letter-spacing: 10px;
      text-transform: uppercase;
      font-family: "helvetica";
    }
    p {
      color: var(--gray);
    }
  }
  .steps-column {
    margin-bottom: 1.5rem;
    h4 {
      color: var(--secondaryColor);
      font-size: 1rem;
      font-weight: lighter;
      margin-bottom: 5px;
      text-transform: uppercase;
      font-family: "helvetica";
    }
  }
  .menu-container {
    /* border: 1px solid red; */
    width: 100%;
    margin: 0rem auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .column {
    /* border: 1px solid red; */
    flex-basis: 48%;
  }
  @media (max-width: 768px) {
    .column {
      /* border: 1px solid red; */
      flex-basis: 100%;
    }
  }
`

export default MenuList
