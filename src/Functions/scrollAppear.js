import { useState, useEffect } from "react";

export function useScrollAppear(element, evenElement, productPage) {
  const [boundingClientPosition, setBoundingClientPosition] = useState(0);
  const screenPosition = window.innerHeight / 1.8;

  //Si el elemento es par la animación aparece desde la derecha sino de la izquierda
  if (evenElement % 2 === 0) evenElement = true;
  else evenElement = false;

  useEffect(() => {
    if (element.current && !productPage) {
      const handleScrollAppear = () => {
        setBoundingClientPosition(element.current.getBoundingClientRect().top);

        if (
          boundingClientPosition < screenPosition &&
          boundingClientPosition > 0
        ) {
          if (evenElement)
            element.current.classList =
              "animate__animated animate__fadeInRight";
          else {
            element.current.classList = "animate__animated animate__fadeInLeft";
          }
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
