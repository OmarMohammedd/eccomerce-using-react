import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import CheckOut from './pages/CheckOut/CheckOut';
import { CartProvider } from './Context/Context';
import NotFound from './pages/NotFound';
import Account from './pages/account/Account';
import ProductDetails from './pages/ProductDetails/ProductDetails';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <React.StrictMode>
     <RouterProvider router={router} />
 </React.StrictMode>
</CartProvider>
);


