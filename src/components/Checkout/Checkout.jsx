import styled from "styled-components";

function Checkout() {
  //document.getElementById("root").style.backgroundColor = "var(--color4)";
  return (
    <div>
      <Div className="container">
        <Form>
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
        </Form>
        <h3>Checkout</h3>
      </Div>
    </div>
  );
}

export default Checkout;

const Div = styled.div`
  margin: var(--marginBetweenComponents);
  padding: 48px;
  background-color: var(--white);
  border-radius: var(--cardBorderRadius);
  border: 1px solid var(--color4);
  & h3 {
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 41px;
  }
`;
const Form = styled.form``;
const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.93px;
  color: var(--color1);
  display: block;
  text-align: start;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const InputsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 53px;
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
