//React
import { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//React hook form
import { useForm } from "react-hook-form";
//React router
import { Link, useLocation } from "react-router-dom";
//thunks actions
import {
  // checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../Redux/auth/thunks";
//Synchronous actions
import { removeErrorMessage } from "../../Redux/auth/authSlice";
//Components
import { Button, TransparentButton } from "../SmallerComponents/Styles/Button";
import { InputContainer, Input, Label } from "../Checkout/Checkout";
//styles
import styled from "styled-components";
import googleIcon from "../../assets/googleIcon.png";
import "animate.css";

function Login() {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [clickOnGoogleButton, setClickOnGoogleButton] = useState(true);

  function onSubmit(data) {
    dispatch(startLoginWithEmailPassword(data));
  }

  useEffect(() => {
    //if (authState.errorMessage) dispatch(removeErrorMessage());
    if (
      location.state?.previousURL === "/user/register" &&
      authState.errorMessage
    ) {
      dispatch(removeErrorMessage());
      location.state.previousURL = null;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="animate__animated animate__fadeIn">
        <h3 className="centered">Login</h3>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainerStyles>
              <Label htmlFor="email">
                Email{" "}
                {errors.email && clickOnGoogleButton && (
                  <span>{errors.email.message}</span>
                )}
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
                cartOpen={cart.open}
                error={clickOnGoogleButton && errors.email}
                {...register("email", {
                  required: { value: true, message: "Field required" },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
            </InputContainerStyles>

            <InputContainerStyles>
              <Label htmlFor="password">
                Password{" "}
                {errors.password && clickOnGoogleButton && (
                  <span>{errors.password.message}</span>
                )}
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                cartOpen={cart.open}
                error={clickOnGoogleButton && errors.password}
                {...register("password", {
                  required: { value: true, message: "Field required" },
                })}
              />
            </InputContainerStyles>

            <div className="centered">
              <Button
                /*   disabled={isAuthenticating} */
                type="submit"
                onClick={() => {
                  setClickOnGoogleButton(true);
                  // dispatch(checkingAuthentication());
                }}
              >
                Login
              </Button>
              <TransparentButtonStyles
                /*  disabled={isAuthenticating} */
                onClick={() => {
                  setClickOnGoogleButton(false);
                  dispatch(startGoogleSignIn());
                }}
              >
                Sign in with Google
                <img src={googleIcon} alt="sign In with google" />
              </TransparentButtonStyles>
            </div>
          </form>
          <div>
            <Link to="/user/register" state={{ previousURL: "/login" }}>
              Create account {">"}
            </Link>
          </div>
        </div>
        {authState.errorMessage && (
          <div className="errorMessage">
            <span>{authState.errorMessage}.</span>
          </div>
        )}
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  min-height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--color4);
  padding: 120px 24px;
  gap: 10px;
  & h3 {
    margin-bottom: 30px;
    text-transform: uppercase;
  }
  & > div {
    width: 100%;
    background-color: var(--white);
    border-radius: var(--cardBorderRadius);
    padding: 48px 20px 30px;

    //Link
    & > :last-child {
      display: flex;
      justify-content: flex-end;
      & a {
        margin-top: 20px;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--black);
        transition: all 0.3s;
      }
      & a:hover {
        color: var(--color1);
        text-decoration: underline;
      }
    }
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    //Buttons container
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    & button {
      width: 100%;
      cursor: pointer;
    }
  }
  & .errorMessage {
    background-color: var(--color2);
    padding: 15px;
    display: grid;
    place-items: center;

    & span {
      font-size: 1.2rem;
      color: var(--black);
      font-weight: 700;
    }
  }
  @media only screen and (min-width: 800px) {
    & > div {
      width: 50%;
    }
  }
  @media only screen and (min-width: 1024px) {
    & form > div:nth-child(3) {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 575px) {
    padding: 120px 0;
  }
`;

const InputContainerStyles = styled(InputContainer)`
  width: 100%;
`;
const TransparentButtonStyles = styled(TransparentButton)`
  & img {
    margin-bottom: 5px;
    margin-left: 15px;
  }
`;
