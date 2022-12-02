//Custom hook
import { useCheckAuth } from "./hooks/useCheckAuth";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/SmallerComponents/ScrollToTop/ScrollToTop";
import Spinner from "./components/SmallerComponents/Spinner/Spinner";
//Routes
import AuthenticatedRoute from "./router/AuthenticatedRoute";
import NotAuthenticatedRoute from "./router/NotAuthenticatedRoute";
//Styles
import "./App.css";

//Breakpoints
//Dekstop >= 769px
//Tablet >=376px <= 768px
//Mobile <= 375px

function App() {
  const status = useCheckAuth();
  if (status === "checking") {
    return (
      <>
        <ScrollToTop />
        <Header />
        <main>
          <Spinner />
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
        {status === "authenticated" ? (
          <AuthenticatedRoute />
        ) : (
          <NotAuthenticatedRoute />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
