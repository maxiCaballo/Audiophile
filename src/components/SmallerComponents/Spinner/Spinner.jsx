//Styles
import styled from "styled-components";
//Spinner
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({
  spinnerSize = 50,
  color = "#d87d4a",
  containerHeight = false,
  containerWidth = false,
}) {
  return (
    <SpinnerContainer
      className="container"
      height={containerHeight}
      width={containerWidth}
    >
      <ClipLoader color={color} size={spinnerSize} />
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  height: ${({ height }) => (height ? `${height}%` : "100%")};
  width: ${({ width }) => width && `${width}%`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
