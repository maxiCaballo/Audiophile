import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  products: [],
};
/* 
//Reference of how the structure of the object has to be 
const objectStructure = {
  id: 0,
  name: "",
  shortName:"",
  slug: "",
  quantity: 0,
  unitPrice:0,
  totalPrice: 0,
};
 */

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleCart: (state) => {
      state.open = !state.open;
    },
    addProducts: (state, action) => {
      const { id, quantity, unitPrice } = action.payload;
      if (action.payload.quantity > 0) {
        const productAlreadyExist = state.products.find(
          (product) => product.id === id
        );
        if (productAlreadyExist) {
          productAlreadyExist.quantity += quantity;
          productAlreadyExist.totalPrice += unitPrice * quantity;
        } else {
          state.products.push({
            ...action.payload,
            totalPrice: unitPrice * quantity,
          });
        }
      }
    },
    addOne: (state, action) => {
      const { id: productId } = action.payload;
      const product = state.products.find(({ id }) => id === productId);
      product.quantity += 1;
      product.totalPrice = product.unitPrice * product.quantity;
    },
    substractOne: (state, action) => {
      const { id: productId } = action.payload;
      const product = state.products.find(({ id }) => id === productId);
      product.quantity > 0 ? (product.quantity -= 1) : (product.quantity = 0);
      product.totalPrice = product.unitPrice * product.quantity;
    },
    removeAllProducts: (state) => {
      state.products.length = 0;
    },
    removeOneProduct: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity === 1) {
        state.products = state.products.filter((item) => item.id !== productId);
      }
    },
  },
});

export const {
  toogleCart,
  addProducts,
  removeAllProducts,
  addOne,
  substractOne,
  removeOneProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
