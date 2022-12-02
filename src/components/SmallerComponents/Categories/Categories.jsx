import { CategoriesLink as Link } from "../Styles/Link";
import { useSelector } from "react-redux";
//Components
import ItemCategory from "./ItemCategory";
//Images
import earphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
//Styles
import "./styles.css";
import styled from "styled-components";

function Categories() {
  const hamburguerMenuOpen = useSelector((state) => state.hamburgerMenu.value);
  return (
    <>
      <CategoryContainer
        className={!hamburguerMenuOpen && "container"}
        hamburguerMenuOpen={hamburguerMenuOpen}
      >
        <Link to="/categories/headphones">
          <ItemCategory img={headphoneImg} category="headphones" />
        </Link>
        <Link to="/categories/speakers">
          <ItemCategory img={speakerImg} category="speakers" />
        </Link>
        <Link to="/categories/earphones">
          <ItemCategory img={earphoneImg} category="earphones" />
        </Link>
      </CategoryContainer>
    </>
  );
}

export default Categories;

export const CategoryContainer = styled.div`
  /* margin: ${({ hamburguerMenuOpen }) =>
    hamburguerMenuOpen ? "0 auto" : "var(--marginBetweenComponents)"};
  display: flex;
  flex-direction: column;
  gap: 85px;
  & a {
    width: 100%;
  }
  padding-bottom: 45px; */
  background-color: ${({ hamburguerMenuOpen }) =>
    hamburguerMenuOpen && "var(--white)"};
  height: ${({ hamburguerMenuOpen }) =>
    hamburguerMenuOpen ? "350px" : "284px"};
  margin: ${({ hamburguerMenuOpen }) =>
    hamburguerMenuOpen ? "0 auto" : "var(--marginBetweenComponents)"};
  display: flex;
  align-items: ${({ hamburguerMenuOpen }) =>
    hamburguerMenuOpen ? "center" : "flex-end"};
  justify-content: space-between;
  gap: 90px;

  padding: ${({ hamburguerMenuOpen }) => hamburguerMenuOpen && "80px 24px"};
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-bottom: 45px;
    width: 100%;
  }
`;
