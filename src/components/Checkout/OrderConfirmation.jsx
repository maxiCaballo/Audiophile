import styled from "styled-components";
import { SummaryButton } from "../SmallerComponents/Styles/Button";
import { defaultStyle } from "../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
//Icon
import iconConfirmation from "../../assets/checkout/icon-order-confirmation.svg";

import { useSelector } from "react-redux";

function OrderConfirmation({
  setShowOrderConfirmation,
  showOrderConfirmation,
  grandTotal,
}) {
  const cart = useSelector((state) => state.cart);
  return (
    <OrderConfirmationStyles visible={showOrderConfirmation}>
      <div>
        <div>
          <img src={iconConfirmation} alt="confirmation" />
        </div>
        <h5>Thank you for your order.</h5>
        <p>You will receive an email confirmation shortly</p>
        <div>
          <ProductDetail>
            {cart.products.length > 0 &&
              cart.products.map((product) => (
                <div key={"OrderConfirmation" + product.id}>
                  <div>
                    <img
                      src={require(`../../assets/cart/image-${product.slug}.jpg`)}
                      alt={product.shortName}
                      height={70}
                      width={70}
                    />
                  </div>
                  <div>
                    <span>{product.shortName}</span>
                    <span>{product.unitPrice}</span>
                  </div>
                  <div>x{product.quantity}</div>
                </div>
              ))}
          </ProductDetail>
          <GrandTotal>
            <div>
              <span>Grand total</span>
              <span>{grandTotal}</span>
            </div>
          </GrandTotal>
        </div>
        <SummaryButton onClick={() => setShowOrderConfirmation(false)}>
          Back to home
        </SummaryButton>
      </div>
    </OrderConfirmationStyles>
  );
}
export default OrderConfirmation;

//Styles
const OrderConfirmationStyles = styled(defaultStyle)`
  padding: 224px 24px;
  & > div:nth-child(1) {
    border-radius: var(--cardBorderRadius);
    padding: 32px;
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
const ProductDetail = styled.div``;
const GrandTotal = styled.div``;
