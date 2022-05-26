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
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
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
  background-color: var(--color4);
  border-radius: var(--cardBorderRadius);
  cursor: pointer;
  padding: 0;
  transition: 0.5s;
  & img {
    transition: 0.5s;
  }
  & > div:nth-child(1) {
    height: 40%;
    position: relative;
    & img {
      height: 160px;
      position: absolute;
      top: -60px;
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
        transition: all 0.3s;
      }
      & span:nth-child(2) {
        margin-left: 2px;
        margin-bottom: 2px;
        transition: 0.8s;
      }
    }
  }
  :hover {
    background-color: #4c4c4c;
    color: var(--white);
    transition: 0.5s;
    & img {
      transform: translateY(-15px);
    }
    & > div:nth-child(2) > div:nth-child(2) {
      span:nth-child(1) {
        color: var(--color1);
        opacity: 1;
      }
      span:nth-child(2) {
        transform: translateX(13px);
      }
    }
  }
`;
