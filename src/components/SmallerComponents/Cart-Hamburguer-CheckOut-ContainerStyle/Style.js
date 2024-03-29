import styled from "styled-components";

export const defaultStyle = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #0000007f;
  backdrop-filter: blur(0.5rem);
  inset: 89px 0 0 0;
  z-index: 10;
`;
