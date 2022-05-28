import useWindowWidth from "./useWindowWidth";

//This function receives two parameters, the product object and the object key to obtain the image.
//Then depending on the width of the screen, it returns the corresponding image.
export function GetImageProductByWindowWidth(product, key) {
  const windowWidth = useWindowWidth();
  let image;
  if (windowWidth >= 769)
    image = require(`../${product[key].desktop.slice(2)}`);
  if (windowWidth >= 576 && windowWidth <= 768)
    image = require(`../${product[key].tablet.slice(2)}`);
  if (windowWidth <= 575) image = require(`../${product[key].mobile.slice(2)}`);
  return image;
}

//this function returns an object with the images of the product gallery depending on the width of the screen.
export function GetGalleryImageByWindowWidth(product) {
  const windowWidth = useWindowWidth();
  const image = {
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
//This function return the image of others product component
export function GetOthersProductImageByWindowWidth(product) {
  const windowWidth = useWindowWidth();
  let image;

  if (windowWidth >= 769) {
    image = require(`../${product.image.desktop.slice(2)}`);
  }
  if (windowWidth >= 576 && windowWidth <= 768) {
    image = require(`../${product.image.tablet.slice(2)}`);
  }
  if (windowWidth <= 991) {
    image = require(`../${product.image.mobile.slice(2)}`);
  }
  return image;
}
