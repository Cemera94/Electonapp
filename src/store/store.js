import { configureStore } from "@reduxjs/toolkit";

// all slaces
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        productStore: productSlice
    }
})

export default store;