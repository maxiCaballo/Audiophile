import styled from "styled-components";
import { StylesButtonLink as Link } from "../StyledLink/StyledLink";

export default function LinkButton({ type, content, reference }) {
  return (
    <StyledButton type={type}>
      <Link
        to={reference}
        color={styleType(type).color}
        colorhover={styleType(type).colorhover}
      >
        {content}
      </Link>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: ${({ type }) => styleType(type).fontWeight};
  letter-spacing: 1px;
  transition: 0.5s;
  background-color: ${({ type }) => styleType(type).backgroundColor};
  color: var(${({ type }) => styleType(type).color});
  border: ${({ type }) => styleType(type).border};
  &:hover {
    background-color: ${({ type }) => styleType(type).backgroundcolorhover};
    color: ${({ type }) => styleType(type).colorhover};
  }
`;

function styleType(type) {
  switch (type) {
    case 1:
      return {
        backgroundColor: "#d87d4a",
        color: "--white",
        border: "none",
        backgroundcolorhover: "#fbaf85;",
        colorhover: "#fff",
        fontWeight: 400,
      };
    case 2:
      return {
        backgroundColor: "#000",
        color: "--white",
        border: "none",
        backgroundcolorhover: "#4c4c4c",
        colorhover: "#fff",
        fontWeight: 400,
      };
    default:
      return {
        backgroundColor: "transparent",
        color: "--black",
        border: "1px solid #000",
        backgroundcolorhover: "#000",
        colorhover: "#fff",
        fontWeight: 600,
      };
  }
}
