//
import { useParams, Navigate } from "react-router-dom";
import useWindowWidth from "../../customs hooks/useWindowWidth";
import styled from "styled-components";
//Components
import Categories from "../SmallerComponents/Categories/Categories";
import About from "../SmallerComponents/About/About";
import LinkButton from "../SmallerComponents/LinkButton/LinkButton";
//Data
import { data } from "../../data";

export default function Category() {
  const windowWidth = useWindowWidth();
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
          {products.map((item) => {
            let path;
            if (windowWidth >= 769) path = item.categoryImage.desktop;
            if (windowWidth >= 576 && windowWidth <= 768)
              path = item.categoryImage.tablet;
            if (windowWidth <= 575) path = item.categoryImage.mobile;

            return (
              <ProductDetail
                key={item.id}
                className="container marginBetweenComponents"
              >
                <div>
                  <img
                    src={require(`../../${path.slice(2)}`)}
                    alt={item.name}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  {item.new && <span>new product</span>}
                  <h2>{item.name.toUpperCase()}</h2>
                  <p>{item.description}</p>
                  <LinkButton type={1} content="see product" reference="/" />
                </div>
              </ProductDetail>
            );
          })}

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
const ProductDetail = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 125px;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & span {
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
