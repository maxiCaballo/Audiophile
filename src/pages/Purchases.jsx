//React
import { useState, useEffect } from "react";
//Firebase
import { firebaseDataBase } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
//Components
import { SecondaryButton } from "../components/SmallerComponents/Styles/Button";
import AccesDenied from "../components/SmallerComponents/AccesDenied/AccesDenied";
//Hooks
//import { useHeightStyle } from "../hooks/useHeightStyle";
//Spinner
import Spinner from "../components/SmallerComponents/Spinner/Spinner";
//Styles
import styled from "styled-components";
import { useSelector } from "react-redux";
import "animate.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (purchases === null) {
    return <Spinner />;
  } else if (purchases.length === 0) {
    return (
      <AccesDenied
        messageError="You don't have purchases yet"
        redirectionPath="/categories/headphones"
        redirectionButtonMessage="see some of our products"
      />
    );
  }

  return (
    <DIV className="container">
      <h2>Purchases</h2>
      <PurchaseContainer>
        {purchases.length > 0 &&
          purchases.map(
            (
              {
                date,
                paymentMethod,
                country,
                city,
                total,
                id,
                products,
                address,
              },
              index
            ) => (
              <div key={id}>
                <div>
                  <span>#</span>
                  <span>{index + 1}</span>{" "}
                </div>
                <div>
                  <span>Date:</span> <span>{date.split(" ")[0]}</span>
                </div>
                <div>
                  <span>Time:</span> <span>{date.split(" ")[1]}</span>
                </div>
                <div>
                  <span>Country:</span>
                  <span>{country}</span>
                </div>
                <div>
                  <span>City:</span>
                  <span>{city}</span>
                </div>
                <div>
                  <span> Address:</span>
                  <span>{address}</span>
                </div>
                <div>
                  <span>Payment method:</span> <span>{paymentMethod}</span>
                </div>
                <div>
                  <span>Iva:</span>
                  <span>{total?.iva} U$$</span>
                </div>
                <div>
                  <span>Shipping:</span>
                  <span>{total?.shipping} U$$</span>
                </div>
                <div>
                  <span>Total:</span>
                  <span>{total?.grandTotal} U$$</span>
                </div>
                <SecondaryButton
                  onClick={() => setProductPurchase([...products])}
                >
                  Detail
                </SecondaryButton>
              </div>
            )
          )}
      </PurchaseContainer>
      {productPurchase.length > 0 && (
        <>
          <div>
            <h3>Details:</h3>
            <button
              onClick={() => {
                setProductPurchase([]);
              }}
            >
              Close
            </button>
          </div>

          <table className="table animate__animated animate__fadeInLeft">
            <thead className=" table-secondary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit price</th>
              </tr>
            </thead>
            <tbody>
              {productPurchase.map(
                ({ name, quantity, unitPrice, id }, index) => (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{unitPrice} U$$</td>
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
  padding-bottom: 80px !important ; // Para sobrescribri el container de boostrap;
  & h2 {
    text-align: center;
    padding: 25px 0;
  }
  & table {
    font-size: 1.5rem;
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    & button {
      border: 1px solid black;
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: 700;
      opacity: 50%;
      padding: 1px 5px;
      margin-left: auto;
    }
  }

  & h3 {
    margin: 25px 0 25px;
  }
`;
const PurchaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  & > div {
    background-color: var(--color4);
    border-radius: var(--cardBorderRadius);
    padding: 25px;
    & > div:not(:nth-child(1)) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    & > div {
      font-size: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px 0;
      & > span:nth-child(1) {
        font-weight: 700;
      }
    }
    & button {
      width: 100%;
    }
  }
`;
