import { createSlice } from "@reduxjs/toolkit";

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { addFavorite } = pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;
