import React from "react";
import { CustomHomeCard } from "./CustomHomeCard";
import homeProducts from "../Json/homeProducts.json";
import { useNavigate } from "react-router-dom";

export const HomePageCategory = () => {
  const navigate = useNavigate();
  return (
    <>
      {homeProducts.map((products, index) => (
        <div
          className={`homePageCategory__container ${products.cat}`}
          id={`section${index + 1}`}
        >
          <div
            class={`homePageCategory__color-container ${products.cat}`}
          ></div>
          <div class="homePageCategory__content">
            <div class="homePageCategory__section ">
              <div class="homePageCategory__HeadingComponentWrapper">
                <div class="homePageCategory__uppercase">
                  <span class="normal">{products.heading}</span>
                </div>
              </div>
            </div>

            <div class="homePageCategory__productListingWrapper">
              <div class="homePageCategory__products-container">
                <div class="homePageCategory__cards-wrap">
                  {products.types.map((product) => (
                    <CustomHomeCard product={product} />
                  ))}
                </div>
              </div>
            </div>
            <button
              class={`homePageCategory__ViewAllButtonContainer ${products.cat}`}
              onClick={() => navigate(`/all-products#${products.cat}`)}
            >
              View All Products
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
