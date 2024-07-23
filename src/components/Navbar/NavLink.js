import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
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
