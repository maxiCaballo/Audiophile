//Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
//React router
import { Navigate } from "react-router-dom";
//Custom hook
import { useCheckAuth } from "./hooks/useCheckAuth";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/SmallerComponents/ScrollToTop/ScrollToTop";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Purchases from "./pages/Purchases";
import AccesDenied from "./components/SmallerComponents/AccesDenied/AccesDenied";

//
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Breakpoints
//Dekstop >= 769px
//Tablet >=376px <= 768px
//Mobile <= 375px

function App() {
  const status = useCheckAuth();
  if (status === "authenticated") {
    return (
      <>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route
              path="/login"
              element={
                <AccesDenied
                  messageError={"You are already logged in"}
                  redirectionPath={"/"}
                  redirectionButtonMessage={"HOME"}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route
            path="/checkout"
            element={
              <AccesDenied
                messageError={"You must be registered to buy"}
                redirectionPath={"/login"}
                redirectionButtonMessage={"LOGIN"}
              />
            }
          />
          <Route
            path="/purchases"
            element={
              <AccesDenied
                messageError={"You must to be logged in to see your purchases"}
                redirectionPath={"/login"}
                redirectionButtonMessage={"LOGIN"}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
