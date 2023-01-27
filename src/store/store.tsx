import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cart/index"

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;