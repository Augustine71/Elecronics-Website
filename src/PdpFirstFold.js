import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavigationBar } from "./Components/NavigationBar";
import { RatingComponent } from "./Components/RatingComponent";
import Slider from "react-slick";

export const PdpFirstFold = () => {
  const [activeSection, setActiveSection] = useState("desc");

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
    <>
      <NavigationBar />
      <div className="pdp__content-together">
        <div className="pdp__image-gallery">
          <Slider {...settings}>
            <div className="pdp__image-img">
              <img
                src="https://ik.manmatters.com/media/misc/pdp/26166752/90s-Gummies--with-Ingredients-_600X600__Z3FZJ8Cj8c.png?tr=w-600"
                alt="Scalp Revitalising Kit"
                loading="lazy"
              />
            </div>
            <div className="pdp__image-img">
              <img
                src="https://ik.manmatters.com/media/misc/pdp/26166752/90s-Gummies--with-Ingredients-_600X600__Z3FZJ8Cj8c.png?tr=w-600"
                alt="Scalp Revitalising Kit"
                loading="lazy"
              />
            </div>
            <div className="pdp__image-img">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166752/3_S0qNg2yE0.png?tr=w-600"
                alt="Scalp Revitalising Kit"
                loading="lazy"
              />
            </div>
            <div className="pdp__image-img">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/v1656056228/Man%20Matters/Hair%20Gummies/ViewAllImages30/Image-4-_1200X1200.jpg"
                alt="Scalp Revitalising Kit"
                loading="lazy"
              />
            </div>
            <div className="pdp__image-img">
              <img
                src="https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613025965/Man%20Matters/Proven%20results/Hair-gummy-edits-_1.jpg"
                alt="Scalp Revitalising Kit"
                loading="lazy"
              />
            </div>
          </Slider>
        </div>
        <div className="pdp__product-details-section">
          <div className="pdp__product-name">Acne Control Foaming Wash</div>
          <div className="pdp__product-price-section">
            <span class="pdp__price-section__rupee">₹</span>
            <span class="pdp__price-section__discounted_price">1099</span>
            <span class="pdp__price-section__actual_price">₹1299</span>
          </div>
          <div class="pdp__inclusive-of-taxes">MRP Inclusive of all Taxes</div>
          <div className="pdp__add-to-cart">Add to Cart</div>
        </div>
      </div>
      <div className="pdp__product-desc-section">
        <div className="pdp__section-buttons">
          <div
            onClick={() => setActiveSection("desc")}
            className={`pdp__section-button ${
              activeSection === "desc" ? "active" : ""
            }`}
          >
            Description
          </div>
          <div
            onClick={() => setActiveSection("details")}
            className={`pdp__section-button ${
              activeSection === "details" ? "active" : ""
            }`}
          >
            Details
          </div>
        </div>
        {activeSection === "desc" && (
          <div className="pdp__section">
            Add a sophisticated touch to your overall appearance by wearing this
            waist belt from Crusset that comes in a navy hue. Crafted from the
            finest quality canvas, this belt exudes a textured pattern. It
            features a buckle closure that allows the ease of wearing and makes
            it highly versatile. This belt is light in weight and will
            definitely add a touch of charm to your look.
          </div>
        )}
        {activeSection === "details" && (
          <div className="pdp__section">
            <div>
              <div class="pdp__classification">
                <div class="pdp__classificationKey">Belt Size</div>
                <div class="pdp__classificationValue">Free Sizeinches</div>
              </div>
              <div class="pdp__classification">
                <div class="pdp__classificationKey">Color</div>
                <div class="pdp__classificationValue">Navy</div>
              </div>
              <div class="pdp__classification">
                <div class="pdp__classificationKey">Feature1</div>
                <div class="pdp__classificationValue">Casual</div>
              </div>
              <div class="pdp__classification">
                <div class="pdp__classificationKey">Material Type</div>
                <div class="pdp__classificationValue">Canvas</div>
              </div>
              <div class="pdp__classification">
                <div class="pdp__classificationKey">Type of Belt</div>
                <div class="pdp__classificationValue">Waist Belt</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <RatingComponent />
      <div className="footer__container">
        <div className="footer__company-section">
          <img
            className="footer__company-logo"
            src="https://imgur.com/JyP11Ru.jpg"
          />
          <div className="footer__company-info">
            High level experience in web design and development knowledge,
            producing quality work.
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__primary-links">
            <div className="footer__link">About</div>
            <div className="footer__link">Features</div>
            <div className="footer__link">Pricing</div>
          </div>
          <div className="footer__secondary-links">
            <div className="footer__link">Gallery</div>
            <div className="footer__link">Team</div>
          </div>
        </div>
        <div className="footer__socials">
          <div className="footer__socials-heading">Follow Us</div>
          <div className="footer__social-links">
            <img
              className="footer__social-link"
              src="https://imgur.com/oEUMWYg.jpg"
            />
            <img
              className="footer__social-link"
              src="https://imgur.com/TOwYGgZ.jpg"
            />
            <img
              className="footer__social-link"
              src="https://imgur.com/rH8ujgq.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
