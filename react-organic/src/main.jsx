import React from "react";
import ReactDOM from "react-dom/client";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Productdetails from "./pages/Productdetails";
import Shop from "./pages/Shop";



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },

      { path: "/about", element: <About /> },
      
      { path: "/blog", element: <Blog /> },
        { path: "/blogdetails", element: <Blogdetails /> },
      { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout/> },
      { path: "/contact", element: <Contact /> },
        { path: "/productdetails", element: <Productdetails /> },
          { path: "/shop", element: <Shop /> },
     
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
