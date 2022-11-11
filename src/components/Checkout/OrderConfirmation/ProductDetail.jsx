import styled from "styled-components";

function ProductDetail({ product }) {
  return (
    <>
      <Container>
        <div>
          <img
            src={require(`../../../assets/cart/image-${product.slug}.jpg`)}
            alt={product.shortName}
            height={50}
            width={50}
          />
        </div>
        <div>
          <span>{product.shortName}</span>
          <span>$ {product.unitPrice}</span>
        </div>
        <div>
          <span>x{product.quantity}</span>
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & span {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--black);
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    margin-left: 10px;
    & > span:nth-child(2) {
      opacity: 0.5;
    }
  }
  & > div:nth-child(3) {
    margin-left: auto;
    opacity: 0.5;
    padding-top: 6px;
  }
`;
