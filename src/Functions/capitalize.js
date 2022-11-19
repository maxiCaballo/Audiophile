export const capitalize = (str) => {
  return str.replace(/\b\w/g, (substr) => substr.toUpperCase());
};
