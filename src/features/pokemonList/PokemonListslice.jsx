import { createSlice } from "@reduxjs/toolkit";

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: {
    selectedPokemon: null,
  },
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setSelectedPokemon } = pokemonListSlice.actions;
export default pokemonListSlice.reducer;
