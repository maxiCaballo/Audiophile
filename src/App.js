//Pages
import Home from "./pages/Home";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
