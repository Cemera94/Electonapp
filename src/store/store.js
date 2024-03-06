import { configureStore } from "@reduxjs/toolkit";

// all slaces
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
    reducer: {
        productStore: productSlice,
        cartStore: cartSlice,
        favoriteStore: favoriteSlice
    }
})

export default store;