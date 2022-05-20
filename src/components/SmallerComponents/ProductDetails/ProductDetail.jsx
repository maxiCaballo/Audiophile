//Component
import AddToCart from "./AddToCart";
import LinkButton from "../LinkButton/LinkButton";
//Custom hook
import useWindowWidth from "../../../customs hooks/useWindowWidth";
//Styles
import styled from "styled-components";

function ProductDetail({ item, categoryPage, productPage }) {
  const windowWidth = useWindowWidth();
  let path;
  if (categoryPage) {
    if (windowWidth >= 769) path = item.categoryImage.desktop;
    if (windowWidth >= 576 && windowWidth <= 768)
      path = item.categoryImage.tablet;
    if (windowWidth <= 575) path = item.categoryImage.mobile;
  } else {
    if (windowWidth >= 769) path = item.image.desktop;
    if (windowWidth >= 576 && windowWidth <= 768) path = item.image.tablet;
    if (windowWidth <= 575) path = item.image.mobile;
  }

  return (
    <Container key={item.id} className="container marginBetweenComponents">
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
          <LinkButton type={1} content="see product" reference="/" />
        )}
        {productPage && <AddToCart price={item.price} />}
      </div>
    </Container>
  );
}

export default ProductDetail;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 125px;
  //Details
  & > div:nth-child(2) {
    border: 1px solid black;
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
      align-items: center;
      & p,
      h2 {
        text-align: center;
      }
    }
  }
`;
