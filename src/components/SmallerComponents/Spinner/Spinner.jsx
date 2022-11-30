//Styles
import styled from "styled-components";
//Spinner
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ size = 50, color = "#d87d4a" }) {
  return (
    <SpinnerContainer className="container">
      <ClipLoader color={color} size={size} />
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
