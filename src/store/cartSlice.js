import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        setProductCart: (state, action) => {

            console.log(action.payload);
            let coppyAray = [...state.cart];

            let findIndex = null;

            coppyAray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return
                }
            })

            if (findIndex === null) {
                coppyAray.push({ ...action.payload, count: 1, cartTotal: action.payload.price });
                state.totalProduct++;
                state.totalPrice += action.payload.price;
            } else {
                coppyAray[findIndex].count++;
                coppyAray[findIndex].cartTotal += action.payload.price;
                state.totalPrice = subTotal(coppyAray)
            }

            state.cart = coppyAray;

        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;

            let coppyAray = [...state.cart]

            coppyAray[index].cartTotal += coppyAray[index].price * increment;

            state.totalPrice = subTotal(coppyAray)


            if (coppyAray[index].count === 1 && increment === -1) {
                coppyAray.splice(index, 1);
                state.totalProduct--
                state.totalPrice - action.payload.price;
            } else {
                coppyAray[index].count += increment;
            }

            state.cart = coppyAray;
        },
        removeItemHandler: (state, action) => {
            let copyArray = [...state.cart]

            let { index } = action.payload;

            copyArray.splice(index, 1);
            state.totalPrice = subTotal(copyArray)
            state.totalProduct--;

            state.cart = copyArray;
        }
    }
})

function subTotal(arr) {
    return arr.reduce((acc, current) => {
        return acc + current.cartTotal;
    }, 0)
}



export const { setProductCart, setPriceHandler, removeItemHandler } = cartSlice.actions;
export default cartSlice.reducer;