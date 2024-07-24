import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  height: 90px;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  margin: 0 10px;
  color: #002eff;
  text-decoration: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 500;

  &:hover {
    background-color: #f3f5ff;
  }

  ${({ isactive }) =>
    isactive === "true" &&
    css`
      background-color: #f3f5ff;
    `}
`;
