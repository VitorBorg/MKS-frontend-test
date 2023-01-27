import { createSlice } from "@reduxjs/toolkit";
import { productCartType } from "@/types/types";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart-Items") || "[]")
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productToAdd } = action.payload;
      const existingProduct = state.cart.find(
        (item : productCartType) => item.productToAdd.id === productToAdd.id
      );

      if (!existingProduct) {
        state.cart.push({ productToAdd });
        localStorage.setItem("cart-Items", JSON.stringify(state.cart));
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item : productCartType) => item.productToAdd.id !== id);
      localStorage.setItem("cart-Items", JSON.stringify(state.cart));
    },
    increaseQuantityProduct: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex(
        (item : productCartType) => item.productToAdd.id === id
      );

      state.cart[productIndex].productToAdd.quantity += 1;
      localStorage.setItem("cart-Items", JSON.stringify(state.cart));
    },
    decreaseQuantityProduct: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex(
        (item : productCartType) => item.productToAdd.id === id
      );

      if (state.cart[productIndex].productToAdd.quantity > 0)
        state.cart[productIndex].productToAdd.quantity -= 1;
      localStorage.setItem("cart-Items", JSON.stringify(state.cart));
    }
  }
});

export const { addProduct, removeProduct, increaseQuantityProduct, decreaseQuantityProduct } = cartSlice.actions;

export default cartSlice.reducer;