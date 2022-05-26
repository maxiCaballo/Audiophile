import styled from "styled-components";
import bestGearDesktop from "../../../assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../../../assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "../../../assets/shared/mobile/image-best-gear.jpg";

function AboutUs() {
  return (
    <div className="container marginBetweenComponents">
      <About>
        <div className="vCentered">
          <div>
            <h2>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div></div>
      </About>
    </div>
  );
}

export default AboutUs;

const About = styled.div`
  height: 633px;
  display: flex;
  & > div {
    height: 100%;
    width: 50%;
    :nth-child(1) > div {
      height: 295px;
      width: 445px;
      & h2 {
        text-transform: uppercase;
        margin-bottom: 32px;
        & span {
          color: var(--color1);
        }
      }
      & p {
        opacity: 50%;
      }
    }
    :nth-child(2) {
      border-radius: var(--cardBorderRadius);
      background: url(${bestGearDesktop}) center / cover no-repeat;
    }
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
    gap: 50px;
    & > div {
      width: 100%;
      &:nth-child(1) {
        justify-content: center;
        & > div {
          height: 100%;
          & h2,
          p {
            text-align: start;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    & > div:nth-child(1) > div {
      width: 573px;
      &:nth-child(2) {
        background-image: url(${bestGearTablet});
      }
    }
  }
  @media only screen and (max-width: 575px) {
    height: auto;
    & > div:nth-child(1) > div {
      width: 100%;
      & h2 {
        font-size: 2.8rem;
      }
    }
    & > div:nth-child(2) {
      height: 327px;
      background-image: url(${bestGearMobile});
    }
  }
`;
