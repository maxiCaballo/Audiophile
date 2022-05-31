import styled from "styled-components";

const defaultStyle = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #0000007f;
  height: 100%;
  z-index: 1;
  top: 91px;
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
export const CartContainer = styled(defaultStyle)`
  & > div {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 32px;
    //CART
    & > div {
      height: 600px;
      width: 450px;
      background-color: var(--white);
      border-radius: var(--cardBorderRadius);
      padding: 31px;
    }
  }
`;
