import React from "react";
import { HomePageCategory } from "./HomePageCategory";
import { Footer } from "./Footer";
import { Slick } from "./Slick";
import { DeliveryInstructions } from "./DeliveryInstructions";

export const Compo = () => {
  return (
    <>
      <HomePageCategory />
      <Slick />
      <DeliveryInstructions />
      <Footer />
    </>
  );
};
