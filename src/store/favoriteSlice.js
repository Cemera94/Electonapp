import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
        totalFavorite: 0,
    },
    reducers: {
        addToFavorite: (state, action) => {
            const copyArray = [...state.favorites];

            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                copyArray.push(action.payload);
                state.totalFavorite++;
            } else {
                copyArray.splice(findIndex, 1);
                state.totalFavorite--;
            }

            state.favorites = copyArray;
        }
    }
})

export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;