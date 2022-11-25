//React
import { useState, useEffect } from "react";
//Firebase
import { firebaseDataBase } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
//Hooks
//import { useHeightStyle } from "../hooks/useHeightStyle";
//Styles
import styled from "styled-components";
import { useSelector } from "react-redux";

function Purchases() {
  const { uid } = useSelector((state) => state.auth);
  //const height = useHeightStyle();
  const [purchases, setPurchases] = useState(null);
  const [productPurchase, setProductPurchase] = useState([]);
  const purchasesCollectionRef = query(
    collection(firebaseDataBase, "purchases"),
    where("uid", "==", uid)
  );

  async function getPurchases() {
    const data = await getDocs(purchasesCollectionRef);
    setPurchases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getPurchases();
  }, []);

  if (purchases === null) {
    return <div className="text-center">Loading</div>;
  }

  return (
    <DIV /* height={height} */ className="container">
      <h2>Purchases</h2>

      <table className="table">
        <thead className="table table-striped">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">Iva{"(U$$)"}</th>
            <th scope="col">Shipping{"(U$$)"}</th>
            <th scope="col">Total{"(U$$)"}</th>
            <th scope="col">Total products</th>
          </tr>
        </thead>
        <tbody>
          {purchases.length > 0 &&
            purchases.map(
              (
                { date, paymentMethod, country, city, total, id, products },
                index
              ) => (
                <tr
                  onClick={() => {
                    products.length > 0 && setProductPurchase(products);
                  }}
                  key={id}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{date.split(" ")[0]}</td>
                  <td>{date.split(" ")[1]}</td>
                  <td>{paymentMethod}</td>
                  <td>{country}</td>
                  <td>{city}</td>
                  <td>{total?.iva}</td>
                  <td>{total?.shipping}</td>
                  <td>{total?.grandTotal}</td>
                  <td>
                    {products.length > 0 && `(${products.length})`}
                    {"  Details"}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
      {productPurchase.length > 0 && (
        <>
          <h3>Details:</h3>
          <table className="table">
            <thead className="table table-striped">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit price{"U$$"}</th>
              </tr>
            </thead>
            <tbody>
              {productPurchase.map(
                ({ name, quantity, unitPrice, id }, index) => (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{unitPrice}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      )}
    </DIV>
  );
}

export default Purchases;

const DIV = styled.div`
  height: 100%;
  & h2 {
    text-align: center;
    padding: 25px 0;
  }
  & table {
    font-size: 1.5rem;
    border: 1px solid var(--color4);
  }
  & table:nth-child(2) {
    margin-bottom: 80px;
    & tr:not(thead tr) {
      cursor: pointer;
      // transition: background-color 0.1s;
    }
    & tr:nth-child(odd):not(thead tr):hover {
      background-color: var(--color2);
    }
    & tr:nth-child(even) {
      background-color: #e2e3e5;
      &:hover {
        background-color: var(--color1);
      }
    }
  }
  & table:nth-child(4) {
    margin: 25px 0 0;
  }
`;
