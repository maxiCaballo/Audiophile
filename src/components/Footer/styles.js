import styled from "styled-components";

export const FooterStyle = styled.footer`
  & > div {
    position: relative;
    padding: 75px 0 48px;
    & > span {
      position: absolute;
      width: 101px;
      height: 5px;
      top: 0;
      left: 0;
      background-color: var(--color1);
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      & nav {
        & ul {
          height: 100%;
          list-style: none;
          display: flex;
          gap: 34px;
          justify-content: flex-end;
          padding: 0;
          & li {
            font-size: 1.3rem;
            letter-spacing: 2px;
          }
        }
      }
    }
    & > :nth-child(3) {
      margin: 36px 0 56px;
      height: auto;
      & p {
        height: 100%;
        width: 50%;
        color: var(--white);
        opacity: 50%;
        line-height: 30px;
        font-weight: 500;
      }
    }
    & > :nth-child(4) {
      display: flex;
      & > :nth-child(1) {
        font-size: 1.5rem;
        opacity: 50%;
        color: var(--white);
      }
      & > :nth-child(2) {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        & svg {
          cursor: pointer;
          &:hover {
            filter: invert(53%) sepia(98%) saturate(312%) hue-rotate(337deg)
              brightness(87%) contrast(93%);
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      & > :nth-child(2) {
        flex-direction: column;
        gap: 32px;
        & nav ul {
          justify-content: flex-start;
        }
      }
      & > :nth-child(3) p {
        width: 100%;
      }
      //sdasdf
      & > :nth-child(4) > :nth-child(2) {
      }
    }
    @media only screen and (max-width: 575px) {
      padding: 75px 24px 48px;
      display: flex;
      flex-direction: column;
      gap: 48px;
      & span {
        left: calc(100% / 2 - 101px / 2);
      }
      & > :nth-child(2) {
        gap: 48px;
        & > a {
          text-align: center;
        }
        & nav ul {
          flex-direction: column;
          text-align: center;
        }
      }
      & > :nth-child(3) {
        margin: 0;
        & p {
          text-align: center;
        }
      }
      & > :nth-child(4) {
        flex-direction: column;
        gap: 48px;
        & > :nth-child(1) {
          text-align: center;
        }
        & > :nth-child(2) {
          margin: auto;
        }
      }
    }
  }
`;
