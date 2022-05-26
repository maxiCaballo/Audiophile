//Component
import AddToCart from "./AddToCart";
import LinkButton from "../LinkButton/LinkButton";
import { GetImageProductByWindowWidth } from "../../../Functions - Customs hooks/getImageByWindowWidth";
//Styles
import styled from "styled-components";

function ProductDetail({ item, categoryPage, productPage }) {
  let path;
  if (categoryPage) {
    path = GetImageProductByWindowWidth(item, "categoryImage");
  } else {
    path = GetImageProductByWindowWidth(item, "image");
  }

  return (
    <Container
      key={item.id}
      className="container"
      productPage={productPage}
      categoryPage={categoryPage}
    >
      <div>
        <img
          src={require(`../../../${path.slice(2)}`)}
          alt={item.name}
          width="100%"
          height="100%"
        />
      </div>
      <div>
        {item.new && <span>new product</span>}
        <h2>{item.name.toUpperCase()}</h2>
        <p>{item.description}</p>
        {categoryPage && (
          <LinkButton
            type={1}
            content="see product"
            reference={`/products/${item.slug}`}
          />
        )}
        {productPage && <AddToCart price={item.price} />}
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
    border-radius: var(--cardBorderRadius);
  }
  //Details
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
