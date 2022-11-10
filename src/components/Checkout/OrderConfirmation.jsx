import styled from "styled-components";
import { SummaryButton } from "../SmallerComponents/Styles/Button";
//Icon
import iconConfirmation from "../../assets/checkout/icon-order-confirmation.svg";

const OrderConfirmation = ({ setShowOrderConfirmation }) => {
  return (
    <OrderConfirmationStyles>
      <div>
        <div>
          <img src={iconConfirmation} alt="confirmation" />
        </div>
        <h5>Thank you for your order.</h5>
        <p>You will receive an email confirmation shortly</p>
        <div>
          <div></div>
          <div></div>
        </div>
        <SummaryButton onClick={() => setShowOrderConfirmation(false)}>
          Back to home
        </SummaryButton>
      </div>
    </OrderConfirmationStyles>
  );
};
export default OrderConfirmation;

//Styles
const OrderConfirmationStyles = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);

  & > div:nth-child(1) {
    background-color: var(--white);
    & > :nth-child(1) {
      display: flex;
      align-items: flex-start;
    }
    & > :nth-child(2) {
      text-align: start;
      text-transform: uppercase;
      color: var(--black);
    }
    & > :nth-child(3) {
      text-align: start;
      opacity: 50%;
    }
  }
`;
