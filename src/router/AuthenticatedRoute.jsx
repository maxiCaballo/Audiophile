//Pages
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Purchases from "../pages/Purchases";
//React-router
import { Routes, Route, Navigate } from "react-router-dom";

function AuthenticatedRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:category" element={<Category />} />
      <Route path="/products/:slug" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthenticatedRoute;
