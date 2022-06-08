import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.5s;
  background-color: var(--color1);
  color: var(--white);
  border: none;
  &:hover {
    background-color: var(--color2);
    color: var(--white);
  }
`;
export const ButtonCheckout = styled(Button)`
  width: 100%;
`;
