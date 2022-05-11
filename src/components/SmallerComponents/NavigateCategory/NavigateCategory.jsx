//Images
import earphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
//Styles
import "./styles.css";
import styled from "styled-components";

function NavigateCategory() {
  return (
    <>
      <CategoryContainer className="container">
        <div>
          <div className="centered">
            <img src={headphoneImg} alt="headphones category" />
          </div>
          <div>
            <div className="centered">
              <span>HEADPHONES</span>
            </div>
            <div className="centered">
              <span>SHOP</span>
              <span>{">"}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="centered">
            <img src={speakerImg} alt="speakers category" />
          </div>
          <div>
            <div className="centered">
              <span>SPEAKERS</span>
            </div>
            <div className="centered">
              <span>SHOP</span>
              <span>{">"}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="centered">
            <img src={earphoneImg} alt="earphones category" />
          </div>
          <div>
            <div className="centered">
              <span>EARPHONES</span>
            </div>
            <div className="centered">
              <span>SHOP</span>
              <span>{">"}</span>
            </div>
          </div>
        </div>
      </CategoryContainer>
    </>
  );
}

export default NavigateCategory;

const CategoryContainer = styled.div`
  height: 284px;
  margin: var(--marginBetweenComponents);
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  & > div {
    height: 204px;
    width: 380px;
    background-color: var(--color4);
    border-radius: 8px;
    cursor: pointer;
    & > div:nth-child(1) {
      height: 40%;
      position: relative;
      & img {
        transition: 0.7s;
        height: 160px;
        position: absolute;
        top: -60px;
      }
      &:hover {
        img {
          transform: translateY(-40px);
        }
      }
    }
    & > div:nth-child(2) {
      height: 60%;
      & > div:nth-child(1) {
        width: 100%;
        height: 50%;
        & span {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1.29px;
          color: var(--black);
          text-transform: uppercase;
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        height: 50%;
        & span:nth-child(1) {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 17.76px;
          letter-spacing: 1px;
          color: var(--black);
          position: relative;
          opacity: 50%;
          text-transform: uppercase;
          &::after {
            content: "";
            height: 1px;
            position: absolute;
            background: var(--color3);
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          }
        }
        & span:nth-child(2) {
          font-size: 2rem;
          font-weight: bold;
          color: var(--color1);
          margin-left: 2px;
          transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        &:hover {
          span:nth-child(2) {
            transform: translateX(5px);
          }
          span:nth-child(1)::after {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      }
    }
  }
`;
