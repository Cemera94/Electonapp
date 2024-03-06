import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categories: [],
        searchValue: ""
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})

export const { setProducts, setCategories, setSearchValue } = productSlice.actions;
export default productSlice.reducer;