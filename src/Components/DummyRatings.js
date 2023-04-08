import React from "react";

export const DummyRatings = () => {
  return (
    <>
      <div className="ratings__reviews-container-wrapper">
        <span class="mob__title"> Very good product</span>
        <span class="review__body">
          The build quality is good and the design is sleek. The device is
          user-friendly and easy to navigate, making it a great addition to any
          home or office setup.
        </span>
        <div className="ratings__reviews-container-left-wrapper">
          <div class="ratings-and-reviews__bottom-left">
            <div class="ratings-and-reviews__author">
              <div>BHAVIN</div>
              <div>
                <img
                  src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                  alt="verified mark"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="ratings-and-reviews__date">02/01/2023</div>
          </div>
        </div>
      </div>
      <div className="ratings__reviews-container-wrapper">
        <span class="mob__title"> Satisfied</span>
        <span class="review__body">
          I was really impressed with this electronic device! It's fast,
          reliable, and has a sleek design. I would definitely recommend it to
          others looking for a high-quality product.
        </span>
        <div className="ratings__reviews-container-left-wrapper">
          <div class="ratings-and-reviews__bottom-left">
            <div class="ratings-and-reviews__author">
              <div>BHAVIN</div>
              <div>
                <img
                  src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                  alt="verified mark"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="ratings-and-reviews__date">02/01/2023</div>
          </div>
        </div>
      </div>
    </>
  );
};
