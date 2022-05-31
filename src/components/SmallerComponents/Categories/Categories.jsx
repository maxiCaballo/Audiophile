import { CategoriesLink as StyledLink } from "../StyledLink/StyledLink";
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
      <ContainerStyles
        className={!hamburguerMenuOpen && "container"}
        hamburguerMenuOpen={hamburguerMenuOpen}
      >
        <StyledLink to="/categories/headphones">
          <ItemCategory img={headphoneImg} category="headphones" />
        </StyledLink>
        <StyledLink to="/categories/speakers">
          <ItemCategory img={speakerImg} category="speakers" />
        </StyledLink>
        <StyledLink to="/categories/earphones">
          <ItemCategory img={earphoneImg} category="earphones" />
        </StyledLink>
      </ContainerStyles>
    </>
  );
}

export default Categories;

const ContainerStyles = styled.div`
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
  gap: 25px;
  padding: ${({ hamburguerMenuOpen }) => hamburguerMenuOpen && "80px 24px"};
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    height: 800px;
  }
`;
