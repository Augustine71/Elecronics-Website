import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

export const CustomHomeCard = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <Link to={`/dp/${product.prod_id}`}>
      <div className="home-card__main-container">
        <div>
          <div className="home-card__img-hover">
            <img
              className="home-card__img-container"
              src={product.img}
              alt="hello"
              width="360"
              height="360"
              loading="lazy"
            />
          </div>
          <div className="home-card__product-info">
            <div className="home-card__name">{product.name}</div>
            <div className="home-card__rating">
              <div className="home-card__rating-stars">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={Math.round(product.rating * 2) / 2}
                />
              </div>
              <div className="home-card__ratinginfo">
                <span>{product.rating}</span>
                <span>|</span>
                <span>({product.total_rating})</span>
                <img
                  src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1657884668/Little%20Joys/PDP/tick.png"
                  alt="verified-icon"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="home-card__price-ctn">
              <div className="home-card__price">
                ₹{product.discounted_price}
              </div>
              <div className="home-card__discounted-price">
                ₹{product.actual_price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
