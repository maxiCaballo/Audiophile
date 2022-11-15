//React
import { useMemo } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//React router
import { Link } from "react-router-dom";
//Actions thunks
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../Redux/auth/thunks";
//Components
import {
  Button,
  TransparentButton,
  BlackButton,
} from "../SmallerComponents/Styles/Button";
import { InputContainer, Input, Label } from "../Checkout/Checkout";
//styles
import styled from "styled-components";
import googleIcon from "../../assets/googleIcon.png";

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(
    () => authState.status === "checking",
    [authState.status]
  );

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <h3 className="centered">Login</h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <InputContainerStyles>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" id="email" />
          </InputContainerStyles>

          <InputContainerStyles>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </InputContainerStyles>

          <div className="centered">
            <Button
              disabled={isAuthenticating}
              type="submit"
              onClick={() => dispatch(checkingAuthentication())}
            >
              Login
            </Button>
            <TransparentButtonStyles
              disabled={isAuthenticating}
              onClick={() => dispatch(startGoogleSignIn())}
            >
              Sign in with Google
              <img src={googleIcon} alt="sign In with google" />
            </TransparentButtonStyles>
          </div>
        </form>
        <div>
          <Link to="/user/register">Create account {">"}</Link>
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--color4);
  padding: 120px 24px;
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
