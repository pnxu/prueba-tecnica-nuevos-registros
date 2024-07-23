import React from "react";
import { Nav } from "./Nav.js";
import { NavLink } from "./NavLink.js";

function Navbar() {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/formulario">Formulario</NavLink>
        <NavLink>Lista Formulario</NavLink>
      </Nav>
    </React.Fragment>
  );
}

export default Navbar;
