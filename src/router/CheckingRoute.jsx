import React from "react";
import Spinner from "../components/SmallerComponents/Spinner/Spinner";
import styled from "styled-components";

function checkingRoutes() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

export default checkingRoutes;

const SpinnerContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
