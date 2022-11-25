import { useState, useEffect } from "react";

function useHeightStyle() {
  const [height, setHeight] = useState("");
  useEffect(() => {
    setHeight(
      `calc(100vh - ${
        document.querySelector("header").offsetHeight +
        document.querySelector("footer").offsetHeight
      }px)`
    );
  }, [height]);
  return height;
}

export { useHeightStyle };
