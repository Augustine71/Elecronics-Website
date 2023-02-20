import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomePageStars } from "./HomePageStars";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Slick = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638423724/Man%20Matters/skin%20gummies/Skin-gummies--1month-pack_1600X1200.jpg"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1633087623/Man%20Matters/Beardgro/Product%20images/Beard-Gro-_1200X1600.jpg"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622962588/Man%20Matters/Performance%20clean%20up/endure%20gel/Endure-Delay-Gel_1200X1600.jpg"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166798/Creatine-Monohydrate_1200X1600__I_DsP8Am1.jpg?tr=w-600"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1658999525/Man%20Matters/Hair%20Gummies/0_Dark%20Blue/1605.png"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-card__wrapper">
        <div className=" customer-review-card__top">
          <div className="customer-review-card__image-container">
            <div className="customer-review-card__image">
              <img
                src="https://ik.manmatters.com/media/misc/pdp/26166770/Untitled_design__87__xSPyzqrDy.png?tr=w-600"
                alt="Biotin Gummies"
                loading="lazy"
              />
            </div>
            <div className="customer-review-card__product">Biotin Gummies</div>
          </div>
          <div className="customer-review-card__review">
            <div className="customer-review-card__star">
              <HomePageStars />
            </div>
            <div className="customer-review-card__review-title">
              Highly Effective
            </div>
            <div className="customer-review-card__review-text">
              Gummies give me a wonderful results and i will buy more for my
              family members. Man matters really creating a space for every man
              to solve their mental physical or emotional problems. Thankyou
            </div>
            <div className="customer-review-card__reviewer">
              <span>Ayush </span>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
