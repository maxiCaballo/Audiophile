import styled from "styled-components";
import { useState } from "react";

function Checkout() {
  const [creditCard, setCreditCard] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "var(--color4)",
        height: "100%",
        padding: "120px 0",
      }}
    >
      <Container className="container ">
        <div>
          <h3>Checkout</h3>
          <form>
            <Title>Billing detail</Title>
            <InputsContainer>
              <InputContainer>
                <Label htmlFor="Name">Name</Label>
                <Input type="text" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">Name</Label>
                <Input type="text" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">Name</Label>
                <Input type="text" />
              </InputContainer>
            </InputsContainer>
            <Title>Shipping info</Title>
            <InputsContainer>
              <InputContainer className="w-100">
                <Label htmlFor="Name">address</Label>
                <Input type="number" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">zip code</Label>
                <Input type="number" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">City</Label>
                <Input type="text" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">country</Label>
                <Input type="text" />
              </InputContainer>
            </InputsContainer>
            <Title>payment details</Title>
            <PaymentsDetails>
              <CheckBoxContainer creditCard={creditCard}>
                <Label
                  htmlFor="creditCard"
                  className="centered"
                  onClick={() => {
                    setCreditCard(!creditCard);
                    console.log(creditCard);
                  }}
                >
                  <span></span>
                  credit card
                </Label>
              </CheckBoxContainer>
              <CheckBoxContainer cashOnDelivery={cashOnDelivery}>
                <Label
                  htmlFor="cashOnDelivery"
                  className="centered"
                  onClick={() => {
                    setCashOnDelivery(!cashOnDelivery);
                    console.log(cashOnDelivery);
                  }}
                >
                  <span
                    style={{
                      ":after": {
                        transform: cashOnDelivery ? "scale(1)" : "scale(0)",
                      },
                    }}
                  ></span>
                  Cash on delivery
                </Label>
              </CheckBoxContainer>
              <InputContainer>
                <Input
                  type="radio"
                  id="cashOnDelivery"
                  value="cash on delivery"
                  name="cash on delivery"
                />
                <Label htmlFor="Name">City</Label>
                <Input type="text" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="Name">country</Label>
                <Input type="text" />
              </InputContainer>
            </PaymentsDetails>
          </form>
        </div>
        <Summary>hola</Summary>
      </Container>
    </div>
  );
}

export default Checkout;

const Container = styled.div`
  background-color: var(--color4);
  display: flex;
  gap: 30px;
  height: 100%;
  & > div {
    border-radius: var(--cardBorderRadius);
    background-color: var(--white);
  }
  & > div:nth-child(1) {
    height: 100%;
    padding: 48px;
    width: calc(100% - 380px);
    border-radius: var(--cardBorderRadius);
  }
  & h3 {
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 41px;
  }
`;
const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.93px;
  color: var(--color1);
  display: block;
  text-align: start;
  text-transform: uppercase;
`;
const InputsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 53px;
  margin-top: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: calc(50% - 16px);
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: start;
  text-transform: capitalize;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 18px 24px;
  outline: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--black);
  opacity: 40%;
  &:focus {
    border-color: var(--color1);
  }
`;
const Summary = styled.div`
  height: 100%;
  width: 350px;
  height: 612px;
`;
const PaymentsDetails = styled(InputsContainer)``;
const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  width: calc(50% - 16px);
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 23px;
  align-items: center;
  & label {
    cursor: pointer;
    gap: 8px;
  }
  & input {
    display: none;
    &:checked ~ span::after {
      transform: scale(0);
    }
  }
  & span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #cfcfcf;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      height: 10px;
      width: 10px;
      background: var(--color1);
      display: block;
      border-radius: 50%;
      transform: scale(1);
      transition: 300ms ease-in-out 0s;
    }
  }
`;
