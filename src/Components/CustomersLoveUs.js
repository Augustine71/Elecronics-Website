import React from "react";
import { HomePageStars } from "./HomePageStars";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const CustomersLoveUs = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="customer-review-card__component">
      <div className="customer-review-card__main">Our Cutomers Love Us</div>
      <div className="carousel-list">
        <Slider {...settings}>
          <div className="customer-review-card__wrapper slick-slide">
            <div className=" customer-review-card__top">
              <div className="customer-review-card__image-container">
                <div className="customer-review-card__image">
                  <img
                    src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1658999525/Man%20Matters/Hair%20Gummies/0_Dark%20Blue/1605.png"
                    alt="Biotin Gummies"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-card__product">
                  Biotin Gummies
                </div>
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
                  family members. Man matters really creating a space for every
                  man to solve their mental physical or emotional problems.
                  Thankyou
                </div>
                <div className="customer-review-card__reviewer">
                  <span>Ayush </span>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-review-card__wrapper slick-slide">
            <div className=" customer-review-card__top">
              <div className="customer-review-card__image-container">
                <div className="customer-review-card__image">
                  <img
                    src="https://ik.manmatters.com/media/misc/pdp/6923914/vegain_500g_6x6_copy_HeW6XnVxN.png?tr=w-600"
                    alt="Vegain Plant Protein Powder"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-card__product">
                  Vegain Plant Protein Powder
                </div>
              </div>
              <div className="customer-review-card__review">
                <div className="customer-review-card__star">
                  <HomePageStars />
                </div>
                <div className="customer-review-card__review-title">
                  Best vegan supplement
                </div>
                <div className="customer-review-card__review-text">
                  I was using whey protein as I am a vegetarian and wanted to
                  switch to Vegan options. I felt I got good results from this.
                  It has multivitamins also to enhance absorption of protein
                  better and herbs like Ashwagandha also keeps energy High.{" "}
                </div>
                <div className="customer-review-card__reviewer">
                  <span>Hemanthkumar M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-review-card__wrapper slick-slide">
            <div className=" customer-review-card__top">
              <div className="customer-review-card__image-container">
                <div className="customer-review-card__image">
                  <img
                    src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642744155/Man%20Matters/New%20Pdps/ADS%20100%20%2B%20Massager/Anti-Dandruff-Shampoo-100ml-_-Scalp-Massager-with-Ingredients.png"
                    alt="Scalp Revitalising Kit"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-card__product">
                  Scalp Revitalising Kit
                </div>
              </div>
              <div className="customer-review-card__review">
                <div className="customer-review-card__star">
                  <HomePageStars />
                </div>
                <div className="customer-review-card__review-title">
                  Highly recommend these!
                </div>
                <div className="customer-review-card__review-text">
                  This Scalp Revitalising Kit is best for dandruff and hair fall
                  problems. Simple for use and full satisfied product.
                </div>
                <div className="customer-review-card__reviewer">
                  <span>Chetan R</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-review-card__wrapper slick-slide">
            <div className=" customer-review-card__top">
              <div className="customer-review-card__image-container">
                <div className="customer-review-card__image">
                  <img
                    src="https://ik.manmatters.com/media/misc/pdp/11954287/Beardmax_-_Mahesh1__2__uXniqDQ8h.png?tr=w-600"
                    alt="BeardMax 5% Minoxidil for Patchy Beard"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-card__product">
                  BeardMax 5% Minoxidil for Patchy Beard
                </div>
              </div>
              <div className="customer-review-card__review">
                <div className="customer-review-card__star">
                  <HomePageStars />
                </div>
                <div className="customer-review-card__review-title">
                  Perfect
                </div>
                <div className="customer-review-card__review-text">
                  My experience was great all thanks to Dr. Raj from man
                  matters. I was not getting the results I expected in 1st month
                  but I was firm that I will get result as I always took
                  followup appointment with Dr. Raj and he guided me with the
                  process, how to use, facts and myths. By 3rd month I was
                  getting some real results. It really works if you're
                  consistent.
                </div>
                <div className="customer-review-card__reviewer">
                  <span>Prateet S. </span>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-review-card__wrapper slick-slide">
            <div className=" customer-review-card__top">
              <div className="customer-review-card__image-container">
                <div className="customer-review-card__image">
                  <img
                    src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1658995057/New%20hero%20images/1613.png"
                    alt="GrowMax 5% Minoxidil"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-card__product">
                  GrowMax 5% Minoxidil
                </div>
              </div>
              <div className="customer-review-card__review">
                <div className="customer-review-card__star">
                  <HomePageStars />
                </div>
                <div className="customer-review-card__review-title">
                  Satisfied
                </div>
                <div className="customer-review-card__review-text">
                  I started finding positive results from the sixth month
                  onwards
                </div>
                <div className="customer-review-card__reviewer">
                  <span>Deepu </span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
