import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div className={`footer-main-container ${type}`}>
      <div className="footer-container">
        <div className="brand-logo-container" onClick={() => navigate(`/`)}>
          <img
            className="brand-logo"
            src="https://imgur.com/uNq8BsK.jpg"
            alt="Be Bodywise"
            loading="lazy"
          />
        </div>
        <div className="footer-sections-container">
          <div
            className="footer-section-name"
            onClick={() => navigate(`/all-products`)}
          >
            All Products
          </div>
          <div
            className="footer-section-name"
            onClick={() => navigate(`/cart`)}
          >
            Cart
          </div>
          <div
            className="footer-section-name"
            onClick={() => navigate(`/all-products#mb`)}
          >
            Mobiles
          </div>
          <div
            className="footer-section-name"
            onClick={() => navigate(`/all-products#lp`)}
          >
            Laptops
          </div>
          <div
            className="footer-section-name"
            onClick={() => navigate(`/all-products#ap`)}
          >
            Earbuds
          </div>
          <div
            className="footer-section-name"
            onClick={() => navigate(`/all-products#tb`)}
          >
            Tablets
          </div>
        </div>

        <label className="copy-right-text">
          Copyright © 2023 StarFox. All rights reserved
        </label>
        <div className="social-media-icons-container">
          <div
            onClick={() => navigate(`https://www.instagram.com/`)}
            className="social-icon-container"
          >
            <img
              className="social-icon-image"
              src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/insta.png"
              loading="lazy"
              alt="Instagram"
            />
          </div>
          <div
            onClick={() => navigate(`https://www.facebook.com/`)}
            className="social-icon-container"
          >
            <img
              className="social-icon-image"
              src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/fb.png"
              loading="lazy"
              alt="Facebook"
            />
          </div>
          <div
            onClick={() => navigate(`https://www.youtube.com/`)}
            className="social-icon-container"
          >
            <img
              classNameName="social-icon-image"
              src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_50,c_limit/v1603435299/staging/Home/Images/youtube.png"
              loading="lazy"
              alt="Youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
