//Components
import Categories from "../SmallerComponents/Categories/Categories";
import About from "../SmallerComponents/About/About";
//Data
import { data } from "../../data";
import image from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
//
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

export default function Category() {
  const params = useParams();
  const products = data
    .filter(
      (item) =>
        item.category.toLocaleLowerCase() ===
        params.category.toLocaleLowerCase()
    )
    .sort((a) => a.new && -1);

  console.table(products);

  return (
    <>
      {products.length ? (
        <>
          <TitleCategory>
            <div className="container centered">
              <span>{params.category}</span>
            </div>
          </TitleCategory>
          {products.map((item) => (
            <ProductDetail key={item.id} className="container">
              <div>
                <img src={image} alt={item.name} height={560} />
              </div>
            </ProductDetail>
          ))}

          <Categories />
          <About />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

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
const ProductDetail = styled.div``;
