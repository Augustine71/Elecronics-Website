import React from "react";
import { Rate } from "antd";

export const RatingComponent = () => {
  return (
    <div className="ratings__main-container">
      <h2 class="rating__header-component">Ratings &amp; Reviews</h2>
      <div>
        <div class="rating__styledReviewContainer">
          <div class="left">
            <div class="ratings__overview">
              <div class="rating__container">
                <span class="number">4.4</span>
                <div class="rating__styledWrapper">
                  <Rate allowHalf defaultValue={2.5} />
                </div>
              </div>
              <div class="rating__total-reviews">
                <span>1208 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ratings__reviews-container">
        <div className="ratings__reviews-container-wrapper">
          <span class="mob__title"> Very nice shampoo</span>
          <span class="review__body">
            makes my hair so soft and controls hair fall.
          </span>
          <div className="ratings__reviews-container-left-wrapper">
            <div class="ratings-and-reviews__bottom-left">
              <div class="ratings-and-reviews__author">
                <p>BHAVIN</p>
                <span>
                  <img
                    src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                    alt="verified mark"
                  />
                </span>
              </div>
              <div class="ratings-and-reviews__date">02/01/2023</div>
            </div>
          </div>
        </div>
        <div className="ratings__reviews-container-wrapper">
          <span class="mob__title"> Very nice shampoo</span>
          <span class="review__body">
            makes my hair so soft and controls hair fall.
          </span>
          <div className="ratings__reviews-container-left-wrapper">
            <div class="ratings-and-reviews__bottom-left">
              <div class="ratings-and-reviews__author">
                <p>BHAVIN</p>
                <span>
                  <img
                    src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                    alt="verified mark"
                  />
                </span>
              </div>
              <div class="ratings-and-reviews__date">02/01/2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
