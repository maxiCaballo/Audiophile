//Components
import { Product, totalPrice } from "../Cart/Cart";
import { SummaryButton } from "../SmallerComponents/Styles/Button";
import OrderConfirmation from "./OrderConfirmation";
//Hooks-redux-Styles
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";

function Checkout() {
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const cart = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    /*reset, */
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      creditCardNumber: 123546789,
      creditCardPin: 123,
    },
  });
  const detailedPrice = grandTotal(totalPrice(cart.products));

  function onSubmit(data) {
    setShowOrderConfirmation(true);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "var(--color4)",
          padding: "120px 0",
        }}
      >
        <Container className="container ">
          <h3>Checkout</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <fieldset>
                <Title>Billing detail</Title>
                <InputsContainer>
                  <InputContainer>
                    <Label htmlFor="name">
                      Name {errors.name && <span>{errors.name.message}</span>}
                    </Label>

                    <Input
                      type="text"
                      id="name"
                      error={errors.name}
                      {...register("name", {
                        required: { value: true, message: "Field required" },
                        minLength: { value: 2, message: "Min lenght of two" },
                        maxLength: 50,
                      })}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email">
                      email address{" "}
                      {errors.email && <span>{errors.email.message}</span>}
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      error={errors.email}
                      {...register("email", {
                        required: { value: true, message: "Field required" },
                        pattern: {
                          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="phoneNumber">
                      phone number
                      {errors.phoneNumber && (
                        <span>{errors.phoneNumber.message}</span>
                      )}
                    </Label>
                    <Input
                      type="number"
                      id="phoneNumber"
                      error={errors.phoneNumber}
                      {...register("phoneNumber", {
                        required: { value: true, message: "Field required" },
                      })}
                    />
                  </InputContainer>
                </InputsContainer>
              </fieldset>
              <fieldset>
                <Title>Shipping info</Title>
                <InputsContainer>
                  <InputContainer className="w-100">
                    <Label htmlFor="address">
                      address{" "}
                      {errors.name && <span>{errors.address.message}</span>}
                    </Label>
                    <Input
                      type="text"
                      id="address"
                      error={errors.address}
                      {...register("address", {
                        required: { value: true, message: "Field required" },
                      })}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="zipCode">zip code</Label>
                    <Input
                      type="number"
                      id="zipCode"
                      {...register("zipCode")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="city">
                      City {errors.name && <span>{errors.city.message}</span>}{" "}
                    </Label>
                    <Input
                      type="text"
                      id="city"
                      error={errors.city}
                      {...register("city", {
                        required: { value: true, message: "Field required" },
                      })}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="country">
                      country{" "}
                      {errors.name && <span>{errors.country.message}</span>}{" "}
                    </Label>
                    <Input
                      type="text"
                      id="country"
                      error={errors.country}
                      {...register("country", {
                        required: { value: true, message: "Field required" },
                      })}
                    />
                  </InputContainer>
                </InputsContainer>
              </fieldset>
              <fieldset>
                <Title>payment details</Title>
                <PaymentsDetails>
                  <span>
                    Payment Method{" "}
                    {errors.paymentMethod && (
                      <span style={{ color: "#ff0000", marginLeft: "5px" }}>
                        {errors.paymentMethod.message}
                      </span>
                    )}{" "}
                  </span>
                  <div className="w-100">
                    <CheckBoxContainer>
                      <Label
                        htmlFor="creditCard"
                        className="centered"
                        error={errors.paymentMethod}
                        style={
                          errors.paymentMethod && {
                            border: "1px solid #ff0000",
                          }
                        }
                        {...register("creditCard")}
                      >
                        <Input
                          type="radio"
                          id="creditCard"
                          name="payment"
                          value="credit_card"
                          {...register("paymentMethod", {
                            required: {
                              value: true,
                              message: "Field required",
                            },
                          })}
                        />
                        <span></span>
                        credit card
                      </Label>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                      <Label
                        htmlFor="cashOnDelivery"
                        className="centered"
                        {...register("creditCard")}
                        style={
                          errors.paymentMethod && {
                            border: "1px solid #ff0000",
                          }
                        }
                      >
                        <Input
                          type="radio"
                          id="cashOnDelivery"
                          value="cash_on_delivery"
                          name="payment"
                          {...register("paymentMethod", {
                            required: {
                              value: true,
                              message: "Field required",
                            },
                          })}
                        />
                        <span></span>
                        Cash on delivery
                      </Label>
                    </CheckBoxContainer>
                  </div>
                  {watch("paymentMethod") === "credit_card" && (
                    <>
                      <InputContainer>
                        <Label htmlFor="creditCardNumber">
                          Credit card number
                        </Label>
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
                  {watch("paymentMethod") === "cash_on_delivery" && (
                    <>
                      <CashOnDeliveryInfo>
                        <svg xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                            fill="#D87D4A"
                          />
                        </svg>
                        <p>
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </CashOnDeliveryInfo>
                    </>
                  )}
                </PaymentsDetails>
              </fieldset>
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

              <SummaryButton type="submit">continue {"&"} pay</SummaryButton>
            </Summary>
          </form>
        </Container>
      </div>
      {showOrderConfirmation && (
        <OrderConfirmation
          setShowOrderConfirmation={setShowOrderConfirmation}
        />
      )}
    </>
  );
}

export default Checkout;

const Container = styled.div`
  //Form container
  & form {
    display: grid;
    grid-template-columns: calc(68% - 30px) 32%;
    gap: 30px;
    border-radius: var(--cardBorderRadius);
    & > div {
      background-color: var(--white);
      border-radius: var(--cardBorderRadius);
      padding: 48px;
    }
    & input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
  & h3 {
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 41px;
  }
  @media only screen and (max-width: 991px) {
    & form {
      grid-template-columns: 1fr;
    }
  }
`;
const Title = styled.legend`
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
  & span {
    color: #ff0000;
    font-weight: 600;
    margin-left: 5px;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: start;
  text-transform: capitalize;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 1px solid ${({ error }) => (error ? "#ff0000" : "#cfcfcf")};
  padding: 18px 24px;
  outline: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--black);
  opacity: ${({ error }) => (error ? "none" : "40%")};
  height: 56px;
  &:focus {
    border-color: var(--color1);
  }
`;
const Summary = styled.div`
  height: min-content;
  padding: 33px;
  display: flex;
  flex-direction: column;

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
    font-size: 1.4rem;
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
  margin: 0;
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
    @media only screen and (max-width: 550px) {
      width: 100%;
    }
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
const CashOnDeliveryInfo = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 32px;
  align-items: center;
  & p {
    padding: 0;
    margin: 0;
    opacity: 50%;
    width: 100%;
  }
  & svg {
    width: 48px;
    height: 48px;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

function grandTotal(total) {
  const shipping = total && 50;
  const iva = Number(((total * 22) / 100).toFixed(2));
  const grandTotal = total + shipping;
  return {
    total,
    shipping,
    iva,
    grandTotal,
  };
}
