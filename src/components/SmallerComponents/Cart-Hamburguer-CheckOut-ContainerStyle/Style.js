import styled from "styled-components";

export const defaultStyle = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #0000007f;
  height: 100%;
  z-index: 1;
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const HamburgerMenuContainer = styled(defaultStyle)`
  background-color: var(--white);
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
