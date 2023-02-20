import React from "react";

export const Footer = () => {
  return (
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
  );
};
