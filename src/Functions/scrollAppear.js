import { useState, useEffect } from "react";

export function useScrollAppear(element) {
  const [boundingClientPosition, setBoundingClientPosition] = useState(0);
  const screenPosition = window.innerHeight / 2;
  useEffect(() => {
    if (element.current) {
      const handleScrollAppear = () => {
        setBoundingClientPosition(element.current.getBoundingClientRect().top);

        if (
          boundingClientPosition < screenPosition &&
          boundingClientPosition > 0
        ) {
          element.current.classList = "animate__animated animate__fadeInRight";
        }
      };
      window.addEventListener("scroll", handleScrollAppear);
      return () => {
        window.removeEventListener("scroll", handleScrollAppear);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundingClientPosition]);
}
