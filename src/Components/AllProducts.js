import React, { useEffect, useState } from "react";

import AllProductsJson from "../Json/AllProducts.json";

import { NavigationBar } from "./NavigationBar";
import { AllProductsBanner } from "./AllProductsBanner";
import { AllProductsButtons } from "./AllProductsButtons";
import { ProductCard } from "./ProductCard";

export const AllProducts = () => {
  const [activeButton, setActiveButton] = useState("lp");
  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveButton(hash);
    }
  }, []);
  const handleButtonClick = (data) => {
    setActiveButton(data);
    console.log(data);
  };

  return (
    <>
      <NavigationBar />
      <AllProductsBanner />
      <div className="all-products-content">
        <AllProductsButtons
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        {AllProductsJson.map((products) =>
          products.cat === activeButton ? (
            <ProductCard activeButton={activeButton} products={products} />
          ) : null
        )}
      </div>
    </>
  );
};
