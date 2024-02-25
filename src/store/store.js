import { configureStore } from "@reduxjs/toolkit";

// all slaces
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        productStore: productSlice,
        cartStore: cartSlice
    }
})

export default store;