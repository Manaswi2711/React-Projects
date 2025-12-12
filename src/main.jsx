import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import App from "./App";
import PokemonDetails from "./features/pokemonDetails/PokemonDeatils";
import PokemonList from "./features/pokemonList/PokemonList";
import Home from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { 
        path: "/home",
        element:<Home></Home>
      },
      { 
        path: "/pokemon",
        element:<PokemonList></PokemonList>
      },
      { path: "pokemon/:name", 
        element:<PokemonDetails></PokemonDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
