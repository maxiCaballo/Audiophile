import styled from "styled-components";

//Type : 1 -> HamburguerMenu

export const Container = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #0000007f;
  height: 100%;
  z-index: 15;
  top: 91px;
  left: 0;
  right: 0;
  bottom: 0;
  @media only screen and (min-width: 800px) {
    display: ${({ type }) => (type === 1 ? "none" : "block")};
  }
`;
