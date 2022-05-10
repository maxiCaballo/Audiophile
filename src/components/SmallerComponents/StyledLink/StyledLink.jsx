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
    color: ${({ colorHover }) => colorHover};
  }
`;
