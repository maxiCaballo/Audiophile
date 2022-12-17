//React
import { useRef } from "react";
//Component
import AddToCart from "./AddToCart";
import { DefaultLink } from "../Styles/Link";
import { GetImageProductByWindowWidth } from "../../../Functions/getImageByWindowWidth";
//React router dom
import { useLocation, useNavigate } from "react-router-dom";

//Functions
import { useScrollAppear } from "../../../Functions/scrollAppear";
//Styles
import styled from "styled-components";
import "animate.css";

function ProductDetail({ item, categoryPage, productPage, evenElement }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const element = useRef(null);
  useScrollAppear(element, evenElement, productPage);

  let image;
  if (categoryPage) {
    image = GetImageProductByWindowWidth(item, "categoryImage");
  } else {
    image = GetImageProductByWindowWidth(item, "image");
  }

  return (
    <Container
      key={item.id}
      className="container"
      productPage={productPage}
      categoryPage={categoryPage}
      pathname={pathname}
    >
      <div>
        <img
          src={image}
          alt={item.name}
          onClick={() => {
            if (pathname.includes("categories"))
              navigate(`/products/${item.slug}`);
          }}
          width="100%"
          height="100%"
        />
      </div>
      <div
        ref={element}
        className={`${
          evenElement === 0 && "animate__animated animate__fadeInRight" //Para que no tenga que hacer scroll para que aparezca en el 1er elemento
        }`}
      >
        {item.new && <span>new product</span>}
        <h2>{item.name.toUpperCase()}</h2>
        <p>{item.description}</p>
        {categoryPage && (
          <DefaultLink to={`/products/${item.slug}`}>see product</DefaultLink>
        )}
        {productPage && <AddToCart item={item} />}
      </div>
    </Container>
  );
}

export default ProductDetail;

const Container = styled.div`
  display: flex;
  /*   Esto es para que en la pagina de producto el componente me quede
  Con los detalles a la derecha y la img a la izquierda y en la pag de 
  categoria al revés */
  flex-direction: ${({ categoryPage }) =>
    categoryPage ? "row-reverse" : "row"};
  gap: 125px;
  margin: ${({ categoryPage }) =>
    categoryPage ? "var(--marginBetweenComponents)" : "82px auto 120px"};
  & img {
    cursor: ${({ pathname }) => pathname.includes("categories") && "pointer"};
    border-radius: var(--cardBorderRadius);
  }
  //Details
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    opacity: ${({ productPage }) => (productPage ? 1 : 0)};
    //New product
    & > span {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 19.12px;
      height: 19px;
      letter-spacing: 10px;
      color: var(--color1);
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    & p {
      margin: 40px 0;
      opacity: 50%;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 991px) {
    gap: 20px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 52px;
    & > div:nth-child(2) {
      align-items: ${({ productPage }) => (productPage ? "start" : "center")};
      & p,
      h2 {
        text-align: ${({ productPage }) => (productPage ? "start" : "center")};
      }
    }
  }
`;
