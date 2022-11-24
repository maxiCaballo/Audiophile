//
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
//Components
import Categories from "../SmallerComponents/Categories/Categories";
import About from "../SmallerComponents/About/About";
import ProductDetail from "../SmallerComponents/ProductDetails/ProductDetail";
//Data
import { data } from "../../data";

export default function Category() {
  const params = useParams();
  const products = data
    .filter(
      (item) =>
        item.category.toLocaleLowerCase() ===
        params.category.toLocaleLowerCase()
    )
    .sort((a) => a.new && -1);

  return (
    <>
      {products.length ? (
        <CategoryContainer>
          <TitleCategory>
            <div className="container centered">
              <span>{params.category}</span>
            </div>
          </TitleCategory>
          {products.map((item, index) => (
            <ProductDetail
              key={item.id}
              item={item}
              categoryPage={true}
              productPage={false}
              evenElement={index}
            />
          ))}

          <Categories />
          <About />
        </CategoryContainer>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

const CategoryContainer = styled.div`
  @media only screen and (min-width: 769px) {
    & > div:nth-child(even) {
      flex-direction: row;
    }
  }
`;
const TitleCategory = styled.div`
  background-color: var(--color6);
  & > div {
    border-top: var(--borderTopStyle);
    height: 239px;
    & span {
      color: var(--white);
      font-size: 4rem;
      font-weight: 500;
      letter-spacing: 1.43px;
      text-transform: uppercase;
    }
  }
  @media only screen and (max-width: 575px) {
    & > div {
      height: 102px;
    }
  }
`;
