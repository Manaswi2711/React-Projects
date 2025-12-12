import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "../features/pokemonList/pokemonListSlice";
import pokemonDetailsReducer from "../features/pokemonDetails/pokemonDetailsSlice";
import { pokemonApi } from "../services/pokemonApi";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(pokemonApi.middleware),
});
