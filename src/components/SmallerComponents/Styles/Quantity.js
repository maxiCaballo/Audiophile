import styled from "styled-components";

export const QuantityContainerStyles = styled.div`
  background-color: var(--color4);
  padding: 15px 16px;
  height: 48px;
  margin-left: auto;
  & > button {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--black);
    opacity: 50%;
    background-color: var(--color4);
    border: none;
    transition: 0.3s;
    &:nth-child(1) {
      margin-right: 20px;
    }
    &:nth-child(3) {
      margin-left: 20px;
    }
    &:hover {
      color: var(--color1);
    }
  }
  & > input[type="number"] {
    border: none;
    outline: none;
    background-color: var(--color4);
    font-size: 1.3rem;
    font-weight: 700;
    width: 16px;
    -webkit-appearance: none;
    overflow: hidden;
    text-align: center;
    color: #000;
  }
  //Delete dfault-arrow from input
  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
