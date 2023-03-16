import React, { useContext, useState } from "react";
import { MobileImageGallery } from "./MobileImageGallery";
import { CustomImageSlider } from "./CustomImageSlider";
import { PdpDetails } from "./PdpDetails";
import { FaqSection } from "./FaqSection";
import { CustomHomeCard } from "./CustomHomeCard";
import { PdpDescription } from "./PdpDescription";
import { PdpOverview } from "./PdpOverview";
import { PdpPopUp } from "./PdpPopUp";
import { SimilarProducts } from "./SimilarProducts";

import { NavigationBar } from "./NavigationBar";
import { RatingComponent } from "./RatingComponent";

import { ModalContext } from "./ModalContext";

export const PdpFirstFold = (props) => {
  const { isSmallScreen } = useContext(ModalContext);
  const { json } = props;

  const [openPopUp, setOpenPopUp] = useState({
    text: "",
    icon: null,
  });

  return (
    <>
      <NavigationBar />

      <PdpPopUp setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
      <div className="pdp__content-together">
        {isSmallScreen ? (
          <MobileImageGallery imgs={json.imgs} />
        ) : (
          <CustomImageSlider imgs={json.imgs} />
        )}
        <PdpDetails
          json={json}
          setOpenPopUp={setOpenPopUp}
          prod_cat={json.prod_cat}
        />
      </div>
      {isSmallScreen ? (
        <PdpDescription
          desc={json.prod_desc}
          features={json.features}
          prod_cat={json.prod_cat}
        />
      ) : (
        <PdpOverview data={json.prod_desc} prod_cat={json.prod_cat} />
      )}
      <RatingComponent prod_cat={json.prod_cat} prod_id={json.prod_id} />
      <SimilarProducts data={json.similar_products} prod_cat={json.prod_cat} />
      <FaqSection questions={json.faqs} prod_cat={json.prod_cat} />

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
