import React from "react";
import { CustomHomeCard } from "./CustomHomeCard";

export const SimilarProducts = ({ data, prod_cat }) => {
  return (
    <div className={`similar-products-container ${prod_cat}`}>
      <div className="similar_products-heading">Similar Products</div>
      <div class="homePageCategory__products-container">
        <div class="homePageCategory__cards-wrap">
          {data.map((product) => (
            <CustomHomeCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
