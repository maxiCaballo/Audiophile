//Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/SmallerComponents/ScrollToTop/ScrollToTop";
//
import { Routes, Route } from "react-router-dom";
import "./App.css";
//Breakpoints
//Dekstop >= 769px
//Tablet >=376px <= 768px
//Mobile <= 375px

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
