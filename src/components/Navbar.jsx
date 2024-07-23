import React from "react";
import styled from "styled-components";

function Navbar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100px;
  `;

  const NavLink = styled.a`
    margin: 0 10px;
    color: blue;
    text-decoration: none;
    border-radius: 20px;
    padding: 10px 10px;
    font-weight: 500;

    &:hover {
      background-color: #f0f0f0;
    }

    &:active {
      background-color: #e0e0e0;
    }
  `;

  return (
    <React.Fragment>
      <Nav>
        <NavLink>Formulario</NavLink>
        <NavLink>Lista Formulario</NavLink>
      </Nav>
    </React.Fragment>
  );
}

export default Navbar;
