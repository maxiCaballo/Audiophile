import styled from "styled-components";
import { Link } from "react-router-dom";

export const DefaultLink = styled(Link)`
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.5s;
  background-color: var(--color1);
  color: var(--white);
  padding: 14px 28px;
  text-decoration: none;
  &:hover {
    background-color: var(--color2);
    color: var(--white);
  }
`;
export const BlackLink = styled(DefaultLink)`
  background-color: var(--black);
  color: var(--white);
  font-weight: 400;
  border: none;
  &:hover {
    background-color: var(--color7);
    color: var(--white);
  }
`;
export const TransparentLink = styled(DefaultLink)`
  background-color: transparent;
  color: var(--black);
  font-weight: 600;
  border: 1px solid var(--black);
  &:hover {
    background-color: var(--black);
    color: var(--white);
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
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  transition: color 0.3s;
  &:hover {
    color: var(--color1);
  }
`;
