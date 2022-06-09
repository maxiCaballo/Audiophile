//Components
import { Product, totalPrice } from "../Cart/Cart";
import { SummaryButton } from "../SmallerComponents/Styles/Button";

//
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [methodCreditCard, setMethodCreditCard] = useState(false);
  const {
    register,
    /* handleSubmit,
    reset, */
    formState: { errors },
  } = useForm({
    defaultValues: {
      creditCardNumber: 123546789,
      creditCardPin: 123,
    },
  });
  const detailedPrice = grandTotal(totalPrice(cart.products));
  return (
    <div
      style={{
        backgroundColor: "var(--color4)",
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
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  className={errors.name && "border_error"}
                  {...register("name", {
                    required: { value: true, message: "Field required" },
                    minLength: { value: 2, message: "Min lenght of two" },
                    maxLength: 50,
                  })}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="email">email address</Label>
                <Input
                  type="email"
                  id="email"
                  className={errors.name && "border_error"}
                  {...register("email", {
                    required: { value: true, message: "Field required" },
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "You must enter a valid email.",
                    },
                  })}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="phoneNumber">phone number</Label>
                <Input
                  type="number"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                />
              </InputContainer>
            </InputsContainer>
            <Title>Shipping info</Title>
            <InputsContainer>
              <InputContainer className="w-100">
                <Label htmlFor="address">address</Label>
                <Input
                  type="text"
                  id="address"
                  {...register("address", {
                    required: { value: true, message: "Field required" },
                  })}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="zipCode">zip code</Label>
                <Input type="number" id="zipCode" {...register("zipCode")} />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  {...register("city", {
                    required: { value: true, message: "Field required" },
                  })}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="country">country</Label>
                <Input
                  type="text"
                  id="country"
                  {...register("country", {
                    required: { value: true, message: "Field required" },
                  })}
                />
              </InputContainer>
            </InputsContainer>
            <Title>payment details</Title>
            <PaymentsDetails>
              <span>Payment Method</span>
              <div className="w-100">
                <CheckBoxContainer>
                  <Label
                    htmlFor="creditCard"
                    className="centered"
                    {...register("creditCard")}
                  >
                    <Input
                      type="radio"
                      id="creditCard"
                      name="payment"
                      value="credit_card"
                      {...register("paymentMethod", {
                        required: { value: true, message: "Field required" },
                      })}
                      onChange={() => setMethodCreditCard(true)}
                    />
                    <span></span>
                    credit card
                  </Label>
                </CheckBoxContainer>
                <CheckBoxContainer>
                  <Label htmlFor="cashOnDelivery" className="centered">
                    <Input
                      type="radio"
                      id="cashOnDelivery"
                      value="cash_on_delivery"
                      name="payment"
                      {...register("paymentMethod", {
                        required: { value: true, message: "Field required" },
                      })}
                      onChange={() => setMethodCreditCard(false)}
                    />
                    <span></span>
                    Cash on delivery
                  </Label>
                </CheckBoxContainer>
              </div>
              {methodCreditCard && (
                <>
                  <InputContainer>
                    <Label htmlFor="creditCardNumber">Credit card number</Label>
                    <Input
                      type="number"
                      id="creditCardNumber"
                      readOnly
                      {...register("creditCardNumber")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="creditCardPin">credit card pin</Label>
                    <Input
                      type="number"
                      readOnly
                      {...register("creditCardPin")}
                    />
                  </InputContainer>
                </>
              )}
            </PaymentsDetails>
          </form>
        </div>
        <Summary>
          <h6>summary</h6>
          <div>
            {cart.products.length > 0 &&
              cart.products.map((product) => (
                <ProductCheckout key={product.id}>
                  <img
                    src={require(`../../assets/cart/image-${product.slug}.jpg`)}
                    alt={product.name}
                    height={70}
                    width={70}
                  />
                  <div>
                    <span>{product.shortName}</span>
                    <span>$ {product.unitPrice}</span>
                  </div>
                  <div>x{product.quantity}</div>
                </ProductCheckout>
              ))}
          </div>
          <PriceDetail>
            <div>
              <span>total</span>
              <span>{detailedPrice.total}</span>
            </div>
            <div>
              <span>shipping</span>
              <span>{detailedPrice.shipping}</span>
            </div>
            <div>
              <span>iva (included)</span>
              <span>{detailedPrice.iva}</span>
            </div>
            <div>
              <span>grand total</span>
              <span>{detailedPrice.grandTotal}</span>
            </div>
          </PriceDetail>
          <SummaryButton>continue {"&"} pay</SummaryButton>
        </Summary>
      </Container>
    </div>
  );
}

export default Checkout;

const Container = styled.div`
  display: grid;
  grid-template-columns: calc(68% - 30px) 32%;
  border: 1px solid black;
  gap: 30px;
  background-color: var(--color4);
  & > div {
    border-radius: var(--cardBorderRadius);
    background-color: var(--white);
  }
  //Form
  & > div:nth-child(1) {
    padding: 48px;
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
  height: min-content;
  padding: 33px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  gap: 31px;
  & > h6 {
    text-transform: uppercase;
  }
  & > :nth-child(2) {
    display: flex;
    gap: 24px;
    flex-direction: column;
  }
`;
const ProductCheckout = styled(Product)`
  & > :nth-child(3) {
    font-size: 1.5rem;
    font-weight: 700;
    opacity: 50%;
    margin-left: auto;
  }
`;
const PriceDetail = styled.div`
  & > div {
    display: flex;
    font-size: 1.7rem;
    & > span:nth-child(1) {
      opacity: 50%;
      text-transform: uppercase;
      font-weight: 500;
    }
    & > span:nth-child(2) {
      font-weight: 700;
      margin-left: auto;
      &::before {
        content: "$";
        margin-right: 3px;
        font-size: 1.5rem;
      }
    }
  }
  & > div:nth-child(4) {
    margin-top: 24px;
    & span:nth-child(2) {
      color: var(--color1);
    }
  }
`;
const PaymentsDetails = styled(InputsContainer)`
  & > :nth-child(1) {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: start;
    text-transform: capitalize;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
const CheckBoxContainer = styled.div`
  & label {
    cursor: pointer;
    padding: 20px;
    gap: 8px;
    border: 1px solid #ececec;
    border-radius: 8px;
    display: flex;
    justify-content: start;
    width: calc(50% - 16px);
    opacity: 100%;
  }
  & input {
    display: none;
    &:checked ~ span::after {
      transform: scale(1);
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
      transform: scale(0);
      transition: 300ms ease-in-out 0s;
    }
  }
`;

function grandTotal(total) {
  const shipping = 50;
  const iva = Number(((total * 22) / 100).toFixed(2));
  const grandTotal = total + shipping;
  return {
    total,
    shipping,
    iva,
    grandTotal,
  };
}
