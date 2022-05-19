import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  transition: color 0.3s;
  &:hover {
    color: var(--color1);
  }
`;
export const StylesButtonLink = styled(Link)`
  text-decoration: none;
  color: var(${({ color }) => color});
  &:hover {
    transition: 0.5s;
    color: ${({ colorhover }) => colorhover};
  }
`;

export const CategoriesLink = styled(Link)`
  text-decoration: none;
  width: calc(100% / 3);
  text-decoration: none;
  color: var(--black);
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
