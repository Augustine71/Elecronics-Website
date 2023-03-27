import React, { useEffect, useState } from "react";

import { fs } from "../Config/Config";

import { NavigationBar } from "./NavigationBar";
import { AllProductsBanner } from "./AllProductsBanner";
import { AllProductsButtons } from "./AllProductsButtons";
import { ProductCard } from "./ProductCard";
import { Loader } from "./Loader";

export const AllProducts = () => {
  const [activeButton, setActiveButton] = useState("lp");
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveButton(hash);
    }
  }, []);

  useEffect(() => {
    // Get a reference to the collection
    const collectionRef = fs.collection("AllProductsJson");

    // Retrieve the document containing the array data
    collectionRef
      .doc("z2CBclW0Umo3QE06SCU7")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data().AllProductsJson;
          setAllProducts(data);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting array data: ", error);
      });
  }, []);

  const handleButtonClick = (data) => {
    setActiveButton(data);
    console.log(data);
  };

  return (
    <>
      <NavigationBar />
      {allProducts.length !== 0 ? (
        <>
          <AllProductsBanner />
          <div className="all-products-content">
            <AllProductsButtons
              activeButton={activeButton}
              handleButtonClick={handleButtonClick}
            />
            {allProducts.map((products) =>
              products.cat === activeButton ? (
                <ProductCard activeButton={activeButton} products={products} />
              ) : null
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
