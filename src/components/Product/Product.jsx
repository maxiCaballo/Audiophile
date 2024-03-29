//Data
import { data } from "../../data";
//Components
import ProductDetail from "../SmallerComponents/ProductDetails/ProductDetail";
import About from "../SmallerComponents/About/About";
import Categories from "../SmallerComponents/Categories/Categories";
import { DefaultLink } from "../SmallerComponents/Styles/Link";
//Functions
import {
  GetGalleryImageByWindowWidth,
  GetOthersProductImageByWindowWidth,
} from "../../Functions/getImageByWindowWidth";
//React router dom
import { useParams } from "react-router-dom";
//Styles
import styled from "styled-components";

function Product() {
  const { slug } = useParams();
  const [product] = data.filter((item) => item.slug === slug);
  const imagesGallery = GetGalleryImageByWindowWidth(product);

  return (
    <>
      <ProductDetail key={product.id} item={product} productPage={true} />
      <FeaturesItemsContainer className="container">
        <Features>
          <h3>FEATURES</h3>
          <p>{product.features}</p>
        </Features>
        <Items>
          <h3>IN THE BOX</h3>
          <ul>
            {product.includes.map(({ quantity, item }, index) => (
              <li key={index}>
                <span>{quantity}x</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Items>
      </FeaturesItemsContainer>
      <Gallery className="container">
        <div>
          <div
            style={{
              background: `url(${imagesGallery.first}) center / cover no-repeat`,
            }}
          ></div>
          <div
            style={{
              background: `url(${imagesGallery.second}) center / cover no-repeat`,
            }}
          ></div>
        </div>
        <div
          style={{
            background: `url(${imagesGallery.third}) center / cover no-repeat`,
          }}
        ></div>
      </Gallery>
      <OthersProducts className="container">
        <h3>you may also like</h3>
        <div>
          {product.others.map((item) => (
            <div key={`other-${item.name}`}>
              <div className="centered">
                <img
                  src={GetOthersProductImageByWindowWidth(item)}
                  alt={item.name}
                />
              </div>
              <h5 className="centered">{item.name}</h5>
              <div className="centered">
                <DefaultLink to={`/products/${item.slug}`}>
                  see product
                </DefaultLink>
              </div>
            </div>
          ))}
        </div>
      </OthersProducts>
      <Categories />
      <About />
    </>
  );
}

export default Product;

const FeaturesItemsContainer = styled.div`
  display: flex;
  gap: 125px;
  & h3 {
    margin-bottom: 32px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    & > :nth-child(1) {
      width: 100%;
    }
    & > :nth-child(2) {
      width: 100%;
      display: flex;
    }
  }
  @media only screen and (min-width: 450px) and (max-width: 768px) {
    & > :nth-child(2) {
      justify-content: space-between;
    }
  }
  @media only screen and (max-width: 449px) {
    & > :nth-child(2) {
      display: block;
    }
  }
`;
const Features = styled.div`
  min-height: 318px;
  width: 60%;
  & p {
    opacity: 50%;
  }
`;
const Items = styled.div`
  width: 40%;
  & ul {
    list-style: none;
    padding: 0;
    & li {
      font-size: 1.5rem;
      margin-bottom: 8px;
      & > :nth-child(2) {
        opacity: 50%;
        text-transform: capitalize;
        margin-left: 24px;
        font-weight: 500;
      }
      & > :nth-child(1) {
        color: var(--color1);
        font-weight: 700;
      }
    }
  }
`;
const Gallery = styled.div`
  height: 400px;
  margin-top: var(--marginTopBetweenComponents);
  display: flex;
  gap: 20px;
  & > div {
    height: 100%;
    border-radius: var(--cardBorderRadius);
  }
  & > :nth-child(1) {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > div {
      height: 50%;
      border-radius: var(--cardBorderRadius);
      &:nth-child(1) {
      }
    }
  }
  & > :nth-child(2) {
    width: 60%;
  }
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    height: 756px;
    & > :nth-child(1),
    > :nth-child(2) {
      width: 100%;
    }
  }
`;
const OthersProducts = styled.div`
  margin-top: var(--marginTopBetweenComponents);
  & > h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 64px;
  }
  //Product container
  & > div {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    height: 475px;
    //Card-products
    & > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: calc(100% / 3);
      //imagen
      & > :nth-child(1) {
        border-radius: var(--cardBorderRadius);
        height: 68%;
        background-color: var(--color4);
        & > img {
          border-radius: var(--cardBorderRadius);
          width: 100%;
          height: 100%;
        }
      }
      //Product name
      & > :nth-child(2) {
        text-transform: uppercase;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 160px;
    & > div {
      flex-direction: column;
      height: auto;
      align-items: center;
      & > div {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    & > h3 {
      font-size: 2.4rem;
    }
  }
`;
