import imageHeroDekstop from "../../assets/home/desktop/image-hero.jpg";
import imageHeroTablet from "../../assets/home/tablet/image-header.jpg";
import imageHeroMobile from "../../assets/home/mobile/image-header.jpg";
//Styles
import "./styles.css";

import styled from "styled-components";
function MainHome() {
  return (
    <>
      <div className="h-100" style={{ backgroundColor: "var(--color6)" }}>
        <div className="homeImgBorderTop container"></div>
        <ImgHero className="container"></ImgHero>
      </div>
    </>
  );
}

export default MainHome;

const ImgHero = styled.div`
  height: 100%;
  @media only screen and (min-width: 769px) {
    background: url("${imageHeroDekstop}") center / cover no-repeat;
  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    background: url("${imageHeroTablet}") center / cover no-repeat;
  }
  @media only screen and (max-width: 375px) {
    background: url("${imageHeroMobile}") center / cover no-repeat;
  }
`;
