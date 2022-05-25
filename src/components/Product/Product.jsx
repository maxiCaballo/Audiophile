import ProductDetail from "../SmallerComponents/ProductDetails/ProductDetail";
import { useParams } from "react-router-dom";
import { data } from "../../data";

function Product() {
  const { id } = useParams();
  const [product] = data.filter((item) => item.id === Number(id));
  return (
    <>
      <ProductDetail key={product.id} item={product} productPage={true} />;
    </>
  );
}

export default Product;
