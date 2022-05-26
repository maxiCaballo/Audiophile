import useWindowWidth from "./useWindowWidth";

//This function receives two parameters, the product object and the object key to obtain the image.
//Then depending on the width of the screen, it returns the corresponding image.
export function GetImageProductByWindowWidth(product, key) {
  const windowWidth = useWindowWidth();
  let image;
  if (windowWidth >= 769) image = product[key].desktop;
  if (windowWidth >= 576 && windowWidth <= 768) image = product[key].tablet;
  if (windowWidth <= 575) image = product[key].mobile;
  return image;
}

//this function returns an object with the images of the product gallery depending on the width of the screen.
export function GetGalleryImageByWindowWidth(product) {
  const windowWidth = useWindowWidth();
  let image = {
    first: "",
    second: "",
    third: "",
  };

  if (windowWidth >= 769) {
    image.first = require(`../${product.gallery.first.desktop.slice(2)}`);
    image.second = require(`../${product.gallery.second.desktop.slice(2)}`);
    image.third = require(`../${product.gallery.third.desktop.slice(2)}`);
  }
  if (windowWidth >= 576 && windowWidth <= 768) {
    image.first = require(`../${product.gallery.first.tablet.slice(2)}`);
    image.second = require(`../${product.gallery.second.tablet.slice(2)}`);
    image.third = require(`../${product.gallery.third.tablet.slice(2)}`);
  }
  if (windowWidth <= 575) {
    image.first = require(`../${product.gallery.first.mobile.slice(2)}`);
    image.second = require(`../${product.gallery.second.mobile.slice(2)}`);
    image.third = require(`../${product.gallery.third.mobile.slice(2)}`);
  }
  return image;
}
