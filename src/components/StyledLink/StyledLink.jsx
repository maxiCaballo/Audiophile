import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  transition: color 0.5s;
  &:hover {
    color: var(--color1);
  }
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #484848;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    opacity: 0;
  }
  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;
export const NoStylesLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;
