import styled from "styled-components";

function ItemCategory({ img, category }) {
  return (
    <Item>
      <div className="centered">
        <img src={img} alt="headphones category" />
      </div>
      <div>
        <div className="centered">
          <span>{category}</span>
        </div>
        <div className="centered">
          <span>SHOP</span>
          <span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </Item>
  );
}
export default ItemCategory;

const Item = styled.div`
  height: 204px;
  width: calc(100% / 3);
  background-color: var(--color4);
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
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
        transform: translateY(-35px);
      }
    }
  }
  & > div:nth-child(2) {
    height: 60%;
    & > div:nth-child(1) {
      width: 100%;
      height: 50%;
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      transition: border 0.3s;
      &:hover {
        border: 1px solid var(--color2);
      }
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
        transition: all 0.3s;
      }
      & span:nth-child(2) {
        margin-left: 2px;
        margin-bottom: 2px;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
      &:hover {
        span:nth-child(1) {
          color: var(--color1);
          opacity: 1;
        }
        span:nth-child(2) {
          transform: translateX(5px);
        }
      }
    }
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
