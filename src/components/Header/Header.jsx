//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  toogleMenu,
  closeMenu,
  openMenu,
} from "../../Redux/hamburgerMenuSlice";
import { toogleCart } from "../../Redux/cartSlice";
import { startLogout } from "../../Redux/auth/thunks";
//react-router
import { useNavigate } from "react-router-dom";
//Components
import { NavbarLink } from "../SmallerComponents/Styles/Link";
import { Link } from "react-router-dom";
import { HamburgerMenuContainer } from "../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
import { totalProducts } from "../Cart/Cart";
import Categories from "../SmallerComponents/Categories/Categories";
import Cart from "../Cart/Cart";
//Styles
import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import loginIcon from "../../assets/login.png";
import logoutIcon from "../../assets/logout.png";

function Header() {
  const hamburgerMenuOpen = useSelector((state) => state.hamburgerMenu.open);
  const cart = useSelector((state) => state.cart);
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  //Para que no haya un scroll enorme cuando está abierto el menú hamburguesa
  if (document.readyState === "complete") {
    const main = document.querySelector("Main");
    const footer = document.querySelector("Footer");

    if (hamburgerMenuOpen) {
      main.style.display = "none";
      footer.style.display = "none";
    }
    if (!hamburgerMenuOpen || windowWidth >= 800) {
      main.style.display = "block";
      footer.style.display = "block";
    }
  }

  //Si está abierto uno cierro el otro y viceversa.
  function handleHamburguerMenu() {
    if (cart.open) {
      dispatch(openMenu());
      dispatch(toogleCart());
    } else dispatch(toogleMenu());
  }
  function handleCart() {
    if (hamburgerMenuOpen) {
      dispatch(closeMenu());
      dispatch(toogleCart());
    } else dispatch(toogleCart());
  }

  function handleLogout() {
    dispatch(startLogout());
    navigate("/");
  }

  return (
    <>
      <HamburgerMenuContainer visible={hamburgerMenuOpen}>
        <Categories />
      </HamburgerMenuContainer>
      <Cart />
      <HeaderStyles totalProducts={totalProducts(cart.products)}>
        <div className="container">
          <div
            className="centered hamburguerIcon"
            onClick={() => handleHamburguerMenu()}
          >
            <svg
              width="16"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="hamburguerIcon"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          </div>
          <div className="centered logo">
            <Link to="/">
              <svg width="143" height="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.363 20.385c1.63 0 3.087-.537 4.237-1.47l.414.994h3.739V5.853h-3.605l-.495 1.087c-1.16-.958-2.637-1.51-4.29-1.51C3.069 5.43 0 8.527 0 12.88c0 4.37 3.07 7.505 7.363 7.505zm.646-4.287c-1.811 0-3.143-1.37-3.143-3.206 0-1.824 1.32-3.195 3.143-3.195 1.812 0 3.144 1.37 3.144 3.195 0 1.836-1.332 3.206-3.144 3.206zm17.535 4.287c4.148 0 6.91-2.562 6.91-6.495V5.868h-4.836v7.811c0 1.47-.782 2.357-2.074 2.357-1.292 0-2.09-.873-2.09-2.357V5.868h-4.836v8.022c0 3.933 2.778 6.495 6.926 6.495zm16.328.015c1.636 0 3.093-.557 4.235-1.52l.456 1.044h3.58V.792H45.36v5.591a6.551 6.551 0 00-3.489-.976c-4.309 0-7.378 3.12-7.378 7.489 0 4.368 3.07 7.504 7.378 7.504zm.647-4.287c-1.812 0-3.143-1.381-3.143-3.217 0-1.835 1.331-3.216 3.143-3.216 1.812 0 3.143 1.38 3.143 3.216 0 1.836-1.331 3.217-3.143 3.217zM57.976 4.109V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm10.097.46c4.563 0 7.872-3.146 7.872-7.488 0-4.357-3.31-7.489-7.872-7.489-4.579 0-7.873 3.132-7.873 7.489 0 4.342 3.294 7.489 7.873 7.489zm0-4.348c-1.764 0-3.029-1.281-3.029-3.14 0-1.858 1.265-3.139 3.029-3.139 1.763 0 3.028 1.292 3.028 3.14 0 1.858-1.265 3.139-3.028 3.139zM82.998 25v-5.534a6.56 6.56 0 003.423.934c4.293 0 7.362-3.125 7.362-7.504 0-4.38-3.069-7.489-7.362-7.489-1.669 0-3.155.578-4.31 1.578l-.605-1.117h-3.29V25h4.782zm2.776-8.887c-1.812 0-3.143-1.37-3.143-3.217s1.331-3.217 3.143-3.217c1.811 0 3.143 1.37 3.143 3.217 0 1.846-1.343 3.217-3.143 3.217zm15.065 3.811v-7.506c0-1.804.912-2.843 2.376-2.843 1.262 0 1.83.826 1.83 2.447v7.902h4.837V11.46c0-3.644-2.071-6.008-5.295-6.008-1.4 0-2.714.507-3.748 1.34v-6h-4.837v19.132h4.837zM117.574 4.11V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm7.878 0V.792h-4.836v19.132h4.836zm9.851.461c3.523 0 6.364-2.004 7.352-5.212h-4.813c-.465.823-1.409 1.318-2.539 1.318-1.527 0-2.55-.834-2.866-2.446H142.9c.063-.435.1-.858.1-1.282 0-4.123-3.134-7.356-7.66-7.356-4.407 0-7.626 3.17-7.626 7.478 0 4.295 3.245 7.5 7.626 7.5zm2.896-9.021h-5.677c.391-1.396 1.372-2.163 2.781-2.163 1.46 0 2.471.758 2.896 2.163z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <nav className="centered">
            <ul>
              <li>
                <NavbarLink to="/categories/headphones">HEADPHONES</NavbarLink>
              </li>
              <li>
                <NavbarLink to="/categories/speakers">SPEAKERS</NavbarLink>
              </li>
              <li>
                <NavbarLink to="/categories/earphones">EARPHONES</NavbarLink>
              </li>
              <li>
                <NavbarLink to="/categories/earphones">PURCHASES</NavbarLink>
              </li>
            </ul>
          </nav>
          {authState.status === "authenticated" ? (
            <div className="centered logoutLoginPhotoContainer">
              {authState.photoURL !== null && (
                <img src={authState.photoURL} alt="me" className="iconPhoto" />
              )}
              <img
                src={logoutIcon}
                alt="logout"
                className="logoutIcon"
                onClick={() => handleLogout()}
              />
            </div>
          ) : (
            <div
              className="centered logoutLoginPhotoContainer"
              onClick={() => navigate("/login")}
            >
              <img src={loginIcon} alt="login" className="loginIcon" />
            </div>
          )}
          <div
            className="centered cartIcon"
            user={authState.email ? "true" : "false"}
            onClick={() => handleCart()}
          >
            <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
      </HeaderStyles>
    </>
  );
}

export default Header;

const HeaderStyles = styled.header`
  background-color: var(--color6);
  color: var(--color4);
  padding: 32px 0;

  & nav,
  ul {
    display: none;
  }
  & > :nth-child(1) {
    display: flex;
    justify-content: flex-start;
  }
  & .logoutLoginPhotoContainer {
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    & .loginIcon,
    .logoutIcon {
      cursor: pointer;
      filter: invert(100%) sepia(94%) saturate(2%) hue-rotate(146deg)
        brightness(111%) contrast(100%);
    }
  }
  & .iconPhoto {
    width: 30px;
    border-radius: 50%;
    margin-right: 15px;
  }
  & .cartIcon {
    margin-left: auto;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      content: ${({ totalProducts }) =>
        totalProducts > 0 ? `"${totalProducts}"` : `none`};
      position: absolute;
      font-size: 1.2rem;
      font-weight: 700;
      top: -20px;
      left: 5px;
      background-color: var(--color2);
      color: var(--black);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
  }
  & .logo {
    padding-left: 35px;
  }
  & .hamburguerIcon {
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    & .logoutLoginPhotoContainer {
      width: auto;
    }
    & .logo {
      padding-left: 0;
    }

    & .hamburguerIcon {
      display: none;
    }
    & > :nth-child(1) {
      align-content: center;
      justify-content: space-between;
      padding: 0;
    }
    & nav {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    & nav ul {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 100%;
      list-style: none;
      padding: 0;
    }
    & nav ul li {
      font-size: 1.3rem;
      line-height: 25px;
      letter-spacing: 2px;
      position: relative;
    }
    & nav ul li:last-child {
    }
  }
  @media only screen and (max-width: 991px) {
    & nav ul {
      gap: 20px;
    }
  }
  @media only screen and (max-width: 350px) {
    & .logo {
      padding-left: 10px;
    }
    & .iconPhoto {
      margin-right: 10px;
    }
  }
`;
