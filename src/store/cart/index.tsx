import { createSlice } from "@reduxjs/toolkit";
import { productCartType } from "@/types/types";

const initialState = {
  cart: [],
  productsPrice: 'R$0'
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '[]');

      const existingProduct = localStorageProducts?.find(
        (item : any) => (item.productToAdd.id) === productToAdd.id
      );

      if (localStorageProducts.length < 5 && !existingProduct) {
        let newLocalStorageProducts;

        if(localStorageProducts[0] != undefined) 
        newLocalStorageProducts = [...localStorageProducts, {productToAdd}]
        else newLocalStorageProducts = [{productToAdd}]

        localStorage.setItem("cart-Items", JSON.stringify(newLocalStorageProducts));

        updateValues(state);
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '[]');

      const hasProduct = localStorageProducts?.filter((item : any) => item.productToAdd.id !== id);
      
      localStorage.setItem("cart-Items", JSON.stringify(hasProduct));
      
      updateValues(state);
    },
    increaseQuantityProduct: (state, action) => {
      const id = action.payload;

      const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
      const productIndex = localStorageProducts?.findIndex((item : any) => item.productToAdd.id === id);

      localStorageProducts[productIndex].productToAdd.quantity += 1;
      localStorage.setItem("cart-Items", JSON.stringify(localStorageProducts));

      updateValues(state);
    },
    decreaseQuantityProduct: (state, action) => {
      const id = action.payload;

      const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
      const productIndex = localStorageProducts?.findIndex((item : any) => item.productToAdd.id === id);

      if(localStorageProducts[productIndex].productToAdd.quantity > 1){
        localStorageProducts[productIndex].productToAdd.quantity -= 1;
        localStorage.setItem("cart-Items", JSON.stringify(localStorageProducts));
        updateValues(state);
      }
    },
    updateData: (state : any) => {
      state.cart = JSON.parse(localStorage.getItem("cart-Items") || '[]');
            
      state.productsPrice = JSON.parse(localStorage.getItem("cart-Items") || '[]')?.reduce((totalPrice : number, product : any) => 
      totalPrice + (parseFloat(product.productToAdd.price) * product.productToAdd.quantity), 0)
      || 'R$0';
    
      state.productsPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseFloat(state.productsPrice.toString())).slice(0, -3);
    }
  }
});

const updateValues = (state : any) => {
  state.cart = JSON.parse(localStorage.getItem("cart-Items") || '[]');
        
  state.productsPrice = JSON.parse(localStorage.getItem("cart-Items") || '[]')?.reduce((totalPrice : number, product : any) => 
  totalPrice + (parseFloat(product.productToAdd.price) * product.productToAdd.quantity), 0)
  || 'R$0';

  state.productsPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parseFloat(state.productsPrice.toString())).slice(0, -3);
}

export const { addProduct, removeProduct, increaseQuantityProduct, decreaseQuantityProduct, updateData } = cartSlice.actions;

export default cartSlice;