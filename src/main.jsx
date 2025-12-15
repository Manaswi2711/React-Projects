import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./features/About.jsx";
import Contact from "./features/Contact";
import Destinations from "./features/Destination.jsx";
import Packages from "./features/Packages.jsx";
import Home from "./components/Home.jsx";
import BookNow from "./features/BookNow.jsx";
import Ticket from "./features/Ticket.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element:<Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/Destination",
        element:<Destinations></Destinations>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/booknow",
        element:<BookNow></BookNow>,
      },
       {
        path: "/ticket",
        element:<Ticket></Ticket>,
      },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);