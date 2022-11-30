//Styles
import styled from "styled-components";
//Spinner
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <SpinnerContainer className="container">
      <ClipLoader color="#d87d4a" size={50} />
    </SpinnerContainer>
  );
}

export default Spinner;

const SpinnerContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;
