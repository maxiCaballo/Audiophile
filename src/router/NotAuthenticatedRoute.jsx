//Pages
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Login from "../pages/Login";
import UserRegister from "../pages/UserRegister";
//Components
import AccesDenied from "../components/SmallerComponents/AccesDenied/AccesDenied";
//React-router
import { Routes, Route } from "react-router-dom";

function NotAuthenticatedRoute() {
  return (
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
  );
}

export default NotAuthenticatedRoute;
