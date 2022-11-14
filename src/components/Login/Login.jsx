//Redux
import { useDispatch } from "react-redux";
//Actions thunks
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../Redux/auth/thunks";
//Components
import { Button } from "../SmallerComponents/Styles/Button";
//styles
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container className="container">
      <h2 className="centered">Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span>Email</span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email..."
              />
            </label>
          </div>
          <div>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password..."
              />
            </label>
          </div>

          <div className="centered">
            <Button
              type="submit"
              onClick={() => dispatch(checkingAuthentication())}
            >
              Login
            </Button>
            <button onClick={() => dispatch(startGoogleSignIn())}>
              Google
            </button>
          </div>
          <div className="centered">Crear cuenta</div>
        </form>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  & > div {
    height: 100%;
    width: 50%;
    padding-bottom: 120px;
  }
  & form {
    border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
