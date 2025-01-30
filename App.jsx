import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./Pages/Cart";
import { ProductsData } from "./Api/Api";
import Product from "./Components/Product";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ProductsData
      },
      {
        path: "/product/:id",
        element:<Product/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

function App() {
  return (
    <div className="font-titleFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
