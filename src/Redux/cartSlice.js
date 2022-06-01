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
      const { id, quantity, totalPrice } = action.payload;
      if (action.payload.quantity > 0) {
        const productAlreadyExist = state.products.find(
          (product) => product.id === id
        );
        if (productAlreadyExist) {
          productAlreadyExist.quantity += quantity;
          productAlreadyExist.totalPrice += totalPrice;
        } else state.products.push(action.payload);
      }
    },
    removeAllProducts: (state) => {
      state.products.length = 0;
    },
  },
});

export const { toogleCart, addProducts, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
