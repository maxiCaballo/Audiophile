import styled from "styled-components";

const defaultStyle = styled.div`
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
export const CartContainer = styled(defaultStyle)`
  & > div {
    display: flex;
    justify-content: flex-end;
    padding-top: 32px;
    //CART
    & > div {
      width: 450px;
      background-color: var(--white);
      border-radius: var(--cardBorderRadius);
      padding: 31px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      //Cart(2) and Remove all
      & > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        //Cart(2)
        & > :nth-child(1) {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }
        //Remove all
        & > :nth-child(2) {
          font-size: 1.5rem;
          cursor: pointer;
          font-weight: 500;
          opacity: 50%;
          position: relative;
          &::before {
            content: "";
            height: 1px;
            bottom: 8px;
            left: 0;
            right: 0;
            background-color: var(--black);
            opacity: 50%;
            position: absolute;
          }
          &:hover {
            color: var(--color1);
            opacity: 100%;
            &::before {
              background: var(--color1);
            }
          }
        }
      }
      //Total and Price
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        //Total
        & > :nth-child(1) {
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          opacity: 50%;
        }
        & > :nth-child(2) {
          font-size: 1.8rem;
          font-weight: 700;
        }
      }
    }
  }
`;
