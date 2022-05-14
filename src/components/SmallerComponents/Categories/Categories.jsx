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
  return (
    <>
      <ContainerStyles className="container">
        <ItemCategory img={headphoneImg} category="headphones" />
        <ItemCategory img={speakerImg} category="speakers" />
        <ItemCategory img={earphoneImg} category="earphones" />
      </ContainerStyles>
    </>
  );
}

export default Categories;

const ContainerStyles = styled.div`
  height: 284px;
  margin: var(--marginBetweenComponents);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    height: 800px;
    padding: var(--paddingMobile);
  }
`;
