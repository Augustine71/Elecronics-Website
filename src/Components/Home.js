import React, { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import { HomePageCategory } from "./HomePageCategory";
import { CustomerReviews } from "./CustomerReviews";
import { DeliveryInstructions } from "./DeliveryInstructions";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { auth, fs } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  return (
    <>
      <NavigationBar />
      <img src="https://imgur.com/ZvvBNgZ.jpg" />

      <HomePageCategory />
      <CustomerReviews />
      <DeliveryInstructions />
      <ToastContainer />
    </>
  );
};
