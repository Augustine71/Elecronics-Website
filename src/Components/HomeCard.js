import React from "react";
import { HomePageStars } from "./HomePageStars";

export const HomeCard = () => {
  return (
    <div className="home-card__main-container">
      <div>
        <div className="home-card__img-hover" data-isenabled="false">
          <img
            className="home-card__img-container"
            src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638423724/Man%20Matters/skin%20gummies/Skin-gummies--1month-pack_1600X1200.jpg"
            alt="hello"
            width="360"
            height="360"
            loading="lazy"
          />
        </div>
        <div className="home-card__product-info">
          <div className="home-card__rating">
            <div className="home-card__rating-stars">
              <HomePageStars />
            </div>
            <div className="home-card__ratinginfo">
              <span>4.2</span>
              <span>|</span>
              <span>(36)</span>
              <img
                src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1657884668/Little%20Joys/PDP/tick.png"
                alt="verified-icon"
                loading="lazy"
              />
            </div>
          </div>
          <div className="home-card__name">
            Hair Cleansing and Conditioning Kit
          </div>
          <div className="home-card__price-ctn">
            <div className="home-card__price">₹749</div>
            <div className="home-card__discounted-price">₹998</div>
          </div>
        </div>
      </div>
      <button className="atc-btn category-primary-atc-btn">Add to Cart</button>
    </div>
  );
};
