//Components
import { DefaultLink } from "../Styles/Link";
//Styles
import styled from "styled-components";

function AccesDenied({
  messageError,
  redirectionPath,
  redirectionButtonMessage,
}) {
  return (
    <>
      <Container className="container">
        <h2>Ups!</h2>
        <div>
          <p>{messageError}</p>
          <DefaultLink to={redirectionPath}>
            {redirectionButtonMessage}
          </DefaultLink>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & h2 {
    padding-top: 50px;
  }
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0 50px;
    & p {
      font-size: 1.5rem;
      line-height: 36px;
      letter-spacing: 1.15px;
    }
    & a {
      width: 50%;
      font-size: 1.1rem;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 800px) {
    & > div {
      width: 50%;
    }
  }
  @media only screen and (min-width: 576px) {
    & > div {
      padding: 0;
      & p {
        font-size: 2.2rem;
      }
    }
  }
`;

export default AccesDenied;
