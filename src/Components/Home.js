import React, { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import { HomeBanner } from "./HomeBanner";
import { HomePageCategory } from "./HomePageCategory";
import { CustomerReviews } from "./CustomerReviews";
import { DeliveryInstructions } from "./DeliveryInstructions";
import { HomeNavigationButtons } from "./HomeNavigationButtons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (index) => {
    setActiveButton(index);
    const section = document.getElementById(`section${index + 1}`);
    const sectionTop = section.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const height = 100; // set the desired height here
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    window.scrollBy(0, sectionTop - scrollTop - height);
  };

  return (
    <>
      <NavigationBar />
      <HomeBanner />
      <HomeNavigationButtons
        handleButtonClick={handleButtonClick}
        activeButton={activeButton}
      />
      <HomePageCategory />
      <CustomerReviews />
      <DeliveryInstructions />
      <ToastContainer />
    </>
  );
};
