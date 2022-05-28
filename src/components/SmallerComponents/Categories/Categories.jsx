import { CategoriesLink as StyledLink } from "../StyledLink/StyledLink";
//Components
import ItemCategory from "./ItemCategory";
//Images
import earphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
//Styles
import "./styles.css";
import styled from "styled-components";

function Categories({ hamburgerMenuStyles }) {
  return (
    <>
      <ContainerStyles
        className={!hamburgerMenuStyles && "container"}
        hamburgerMenuStyles={hamburgerMenuStyles}
      >
        <StyledLink to="/categories/headphones">
          <ItemCategory
            img={headphoneImg}
            category="headphones"
            hamburgerMenuStyles={hamburgerMenuStyles}
          />
        </StyledLink>
        <StyledLink to="/categories/speakers">
          <ItemCategory
            img={speakerImg}
            category="speakers"
            hamburgerMenuStyles={hamburgerMenuStyles}
          />
        </StyledLink>
        <StyledLink to="/categories/earphones">
          <ItemCategory
            img={earphoneImg}
            category="earphones"
            hamburgerMenuStyles={hamburgerMenuStyles}
          />
        </StyledLink>
      </ContainerStyles>
    </>
  );
}

export default Categories;

const ContainerStyles = styled.div`
  background-color: ${({ hamburgerMenuStyles }) =>
    hamburgerMenuStyles && "var(--white)"};
  height: ${({ hamburgerMenuStyles }) =>
    hamburgerMenuStyles ? "350px" : "284px"};
  margin: ${({ hamburgerMenuStyles }) =>
    hamburgerMenuStyles ? "0 auto" : "var(--marginBetweenComponents)"};
  display: flex;
  align-items: ${({ hamburgerMenuStyles }) =>
    hamburgerMenuStyles ? "center" : "flex-end"};
  justify-content: space-between;
  gap: 25px;
  padding: ${({ hamburgerMenuStyles }) => hamburgerMenuStyles && "80px 24px"};
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    height: 800px;
  }
`;
