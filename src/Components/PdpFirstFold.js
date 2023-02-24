import React from "react";
import { MobileImageGallery } from "./MobileImageGallery";
import { PdpDetails } from "./PdpDetails";
import { FaqSection } from "./FaqSection";
import { CustomHomeCard } from "./CustomHomeCard";
import { PdpDescription } from "./PdpDescription";

import { NavigationBar } from "./NavigationBar";
import { RatingComponent } from "./RatingComponent";
import Slider from "react-slick";

import homeProducts from "../Json/homeProducts.json";

export const PdpFirstFold = (props) => {
  const { json } = props;

  return (
    <>
      <NavigationBar />
      <div className="pdp__content-together">
        <MobileImageGallery imgs={json.imgs} />
        <PdpDetails
          name={json.name}
          actualPrice={json.actual_price}
          discountedPrice={json.disc_price}
        />
      </div>
      <PdpDescription desc={json.prod_desc} features={json.features} />
      <RatingComponent />
      <div class="homePageCategory__productListingWrapper">
        <div class="homePageCategory__products-container">
          <div class="homePageCategory__cards-wrap">
            {homeProducts[1].types.map((product) => (
              <CustomHomeCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <FaqSection questions={json.faqs} />

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