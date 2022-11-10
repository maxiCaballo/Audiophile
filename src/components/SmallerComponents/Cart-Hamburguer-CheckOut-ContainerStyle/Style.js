import styled from "styled-components";

export const defaultStyle = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #0000007f;
  top: 89px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const HamburgerMenuContainer = styled(defaultStyle)`
  background-color: var(--white);

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
