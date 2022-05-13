import styled from "styled-components";

export default function Container({ children, styles }) {
  let Div = styled.div``;
  if (styles) Div = styles;
  return <Div className="container">{children}</Div>;
}
