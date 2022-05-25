//Component
import ProductDetail from "../SmallerComponents/ProductDetails/ProductDetail";
import About from "../SmallerComponents/About/About";
import Categories from "../SmallerComponents/Categories/Categories";
//
import { useParams } from "react-router-dom";
import { data } from "../../data";
import styled from "styled-components";

function Product() {
  const { id } = useParams();
  const [product] = data.filter((item) => item.id === Number(id));
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
`;
const Features = styled.div`
  border: 1px solid black;
  height: 318px;
  width: 60%;
  & p {
    opacity: 50%;
  }
`;
const Items = styled.div`
  width: 40%;
  border: 1px solid red;
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
