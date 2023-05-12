import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Products from "./assets/Pages/Products.jsx";
import Layout from './assets/Component/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:productId", element: <Products /> },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)


// khai báo đường dẫn động
 //    /products/:productId