import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categories: [],
        singleProduct: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProductCart: (state, action) => {
            let coppyAray = [...state.singleProduct];

            let findIndex = null;

            coppyAray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return
                }
            })

            if (findIndex === null) {
                coppyAray.push({ ...action.payload, count: 1 });
            } else {
                coppyAray[findIndex].count++;
            }

            state.singleProduct = coppyAray;
        }
    }
})

export const { setProducts, setProductCart } = productSlice.actions;
export default productSlice.reducer;