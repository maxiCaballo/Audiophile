import useWindowWidth from "./useWindowWidth";

//this function receives two parameters, the product object and the key to obtain the image.
export function GetImageProductByWindowWidth(product, key) {
  const windowWidth = useWindowWidth();
  let image;
  if (windowWidth >= 769) image = product[key].desktop;
  if (windowWidth >= 576 && windowWidth <= 768) image = product[key].tablet;
  if (windowWidth <= 575) image = product[key].mobile;
  return image;
}
