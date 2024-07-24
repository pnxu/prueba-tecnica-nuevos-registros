import { Nav, NavLink } from "./StyledNav.js";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <NavLink
        to="/formulario"
        isactive={(location.pathname === "/formulario").toString()}
      >
        Formulario
      </NavLink>
      <NavLink
        to="/lista-formulario"
        isactive={(location.pathname === "/lista-formulario").toString()}
      >
        Lista Formulario
      </NavLink>
    </Nav>
  );
}

export default Navbar;
