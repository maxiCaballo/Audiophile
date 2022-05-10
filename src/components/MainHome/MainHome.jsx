//Images
import imageHeroDekstop from "../../assets/home/desktop/image-hero.jpg";
import imageHeroTablet from "../../assets/home/tablet/image-header.jpg";
import imageHeroMobile from "../../assets/home/mobile/image-header.jpg";
//Components
import LinkButton from "../SmallerComponents/LinkButton/LinkButton";
//Styles
import "./styles.css";
import styled from "styled-components";

function MainHome() {
  return (
    <>
      <div className="h-100" style={{ backgroundColor: "var(--color6)" }}>
        <div className="homeImgBorderTop container"></div>
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
