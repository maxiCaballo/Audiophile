//React
//Redux
import { useDispatch, useSelector } from "react-redux";
//React router
import { Link } from "react-router-dom";
//Actions thunks
//import { checkingAuthentication } from "../../Redux/auth/thunks";
//React hooks form
import { useForm } from "react-hook-form";
//Components
import { Button } from "../SmallerComponents/Styles/Button";
import { InputContainer, Input, Label } from "../Checkout/Checkout";
//Functions
import { startCreatingUserWithEmailPassword } from "../../Redux/auth/thunks";
//styles
import styled from "styled-components";

function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const authState = useSelector((state) => state.auth);

  function onSubmit(data) {
    dispatch(startCreatingUserWithEmailPassword(data));
  }
  return (
    <Container>
      <h3 className="centered">Create account</h3>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainerStyles>
            <Label htmlFor="fullName">
              Full name {errors.name && <span>{errors.name.message}</span>}
            </Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              cartOpen={cart.open}
              error={errors.name}
              {...register("name", {
                required: { value: true, message: "Field required" },
                minLength: { value: 2, message: "Min lenght of two" },
                maxLength: 50,
              })}
            />
          </InputContainerStyles>

          <InputContainerStyles>
            <Label htmlFor="email">
              Email {errors.email && <span>{errors.email.message}</span>}
            </Label>
            <Input
              type="text"
              name="email"
              id="email"
              cartOpen={cart.open}
              error={errors.email}
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
              {errors.password && <span>{errors.password.message}</span>}
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              cartOpen={cart.open}
              error={errors.password}
              {...register("password", {
                required: { value: true, message: "Field required" },
                minLength: { value: 6, message: "Min lenght of six" },
              })}
            />
          </InputContainerStyles>

          <div className="centered">
            <Button
              //  disabled={isAuthenticating}
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
        <div>
          <Link to="/login">¿ Already have an account ?</Link>
        </div>
      </div>
    </Container>
  );
}

export default UserRegister;

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
    & button {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) {
    & > div {
      width: 50%;
    }
    @media only screen and (min-width: 575px) {
      padding: 120px 0;
    }
  }
`;
const InputContainerStyles = styled(InputContainer)`
  width: 100%;
`;
