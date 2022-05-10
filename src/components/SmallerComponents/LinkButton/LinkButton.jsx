import styled from "styled-components";
import { ButtonLink } from "../StyledLink/StyledLink";

export default function LinkButton({ type, content, reference }) {
  return (
    <StyledButton type={type}>
      <ButtonLink
        to={reference}
        color={styleType(type).color}
        colorHover={styleType(type).colorHover}
      >
        {content}
      </ButtonLink>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: 0.5s;
  background-color: ${({ type }) => styleType(type).backgroundColor};
  color: var(${({ type }) => styleType(type).color});
  border: ${({ type }) => styleType(type).border};
  &:hover {
    background-color: ${({ type }) => styleType(type).backgroundColorHover};
    color: ${({ type }) => styleType(type).colorHover};
  }
`;

function styleType(type) {
  switch (type) {
    case 1:
      return {
        backgroundColor: "#d87d4a",
        color: "--white",
        border: "none",
        backgroundColorHover: "#fbaf85;",
        colorHover: "#fff",
      };
    case 2:
      return {
        backgroundColor: "#000",
        color: "--white",
        border: "none",
        backgroundColorHover: "#4c4c4c",
        colorHover: "#fff",
      };
    default:
      return {
        backgroundColor: "transparent",
        color: "--black",
        border: "1px solid #000",
        backgroundColorHover: "#000",
        colorHover: "#fff",
      };
  }
}
