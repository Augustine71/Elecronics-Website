import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const MobileImageGallery = (props) => {
  const { imgs } = props;
  console.log(imgs);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="pdp__image-gallery">
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <div className="pdp__image-img">
            <img src={img.img} alt={img.alt} key={index} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
