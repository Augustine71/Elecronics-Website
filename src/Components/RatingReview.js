import React from "react";

export const RatingReview = ({ data }) => {
  return (
    <div className="ratings__reviews-container-wrapper">
      <span class="mob__title"> {data.title}</span>
      <span class="review__body">{data.desc}</span>
      <div className="ratings__reviews-container-left-wrapper">
        <div class="ratings-and-reviews__bottom-left">
          <div class="ratings-and-reviews__author">
            <div>{data.name}</div>
            <div>
              <img
                src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                alt="verified mark"
                loading="lazy"
              />
            </div>
          </div>
          <div class="ratings-and-reviews__date">{data.date}</div>
        </div>
      </div>
    </div>
  );
};
