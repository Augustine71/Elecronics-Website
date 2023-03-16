import React from "react";

import { Rate } from "antd";
import { Link } from "react-router-dom";

export const ProductCard = ({ products }) => {
  return (
    <>
      <div className="all-products-product-together">
        <div className="all-products-heading">{products.heading}</div>
        <div className="gallery">
          {products.types.map((product) => (
            <Link to={`/dp/${product.prod_id}`}>
              <div class="home-card__main-container all-products">
                <div>
                  <div class="home-card__img-hover">
                    <img
                      class="home-card__img-container"
                      src={product.prod_img}
                      alt="hello"
                      width="360"
                      height="360"
                      loading="lazy"
                    />
                  </div>
                  <div class="home-card__product-info">
                    <div class="home-card__name">{product.name}</div>
                    <div class="home-card__rating">
                      <div class="home-card__rating-stars">
                        <Rate
                          disabled
                          allowHalf
                          defaultValue={Math.round(product.rating * 2) / 2}
                        />
                      </div>
                    </div>
                    <div class="home-card__price-ctn">
                      <div class="home-card__price">₹{product.disc_price}</div>
                      <div class="home-card__discounted-price">
                        ₹{product.actual_price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
