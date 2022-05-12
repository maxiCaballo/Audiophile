//Components
import LinkButton from "../SmallerComponents/LinkButton/LinkButton";
import NavigateCategory from "../SmallerComponents/NavigateCategory/NavigateCategory";
//Images
import imageHeroDekstop from "../../assets/home/desktop/image-hero.jpg";
import imageHeroTablet from "../../assets/home/tablet/image-header.jpg";
import imageHeroMobile from "../../assets/home/mobile/image-header.jpg";
import zx9Dekstop from "../../assets/home/desktop/image-speaker-zx9.png";
import zx9TabletMobile from "../../assets/home/mobile/image-speaker-zx9.png";
//Styles
import "./styles.css";
import styled from "styled-components";

function MainHome() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color6)", height: "650px" }}>
        <ImgHero className="container">
          <div className="newProductContainer">
            <div>NEW PRODUCT</div>
            <h1>XX99 Mark II HeadphoneS</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <LinkButton type={1} content="see product" reference="/" />
            </div>
          </div>
        </ImgHero>
      </div>
      <NavigateCategory />
      <Zx9Container className="container">
        <Zx9>
          <svg xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
          <div>
            <ImgZx9Dekstop src={zx9Dekstop} alt="zx9" />
            <ImgZx9MobileTablet src={zx9TabletMobile} alt="zx9" />
          </div>
          <div>Descripcion</div>
        </Zx9>
      </Zx9Container>
    </>
  );
}

export default MainHome;

const ImgHero = styled.div`
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: var(--borderTopStyle);
  @media only screen and (min-width: 769px) {
    background: url("${imageHeroDekstop}") center / cover no-repeat;
  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    background: url("${imageHeroTablet}") center / cover no-repeat;
  }
  @media only screen and (max-width: 375px) {
    background: url("${imageHeroMobile}") center / cover no-repeat;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Zx9Container = styled.div`
  height: 560px;
  @media only screen and (max-width: 575px) {
    padding: var(--paddingMobile);
  }
`;
const Zx9 = styled.div`
  background-color: var(--color1);
  border-radius: 8px;
  position: relative;
  & svg {
    width: 100%;
    height: 560px;
  }
  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    &:nth-child(2) {
      left: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    &:nth-child(3) {
      right: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    & > div {
      width: 100%;
      height: 50%;
      position: absolute;
      &:nth-child(2) {
        align-items: center;
      }
      &:nth-child(3) {
        top: 280px;
      }
    }
  }
`;
const ImgZx9Dekstop = styled.img`
  height: 350px;
  width: 290px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ImgZx9MobileTablet = styled.img`
  height: 237px;
  width: 192px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
