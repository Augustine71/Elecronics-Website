import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { NotFound } from "./Components/NotFound";
import { Cart } from "./Components/Cart";
import { AllProducts } from "./Components/AllProducts";
import { MyOrders } from "./Components/MyOrders";
import { ProductDisplayPage } from "./Components/ProductDisplayPage";
import { OrderDetails } from "./Components/OrderDetails";
import { LogInModal } from "./Components/LogInModal";
import { SignUpNModal } from "./Components/SignUpModal";
import { RatingModal } from "./Components/RatingModal";
import { AddToCart } from "./Components/AddToCart";

import { ModalProvider } from "./Components/ModalContext";

import { Compo } from "./Components/Compo";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-details/:orderId" element={<OrderDetails />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/compcheck" element={<Compo />} />
          <Route path="/dp/:productId" element={<ProductDisplayPage />} />
          <Route path="/add-to-cart/:productId" element={<AddToCart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <LogInModal />
        <SignUpNModal />
        <RatingModal />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
