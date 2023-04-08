import React from "react";

export const CustomSlide = ({ title, description, image }) => (
  <div className="customSlide" style={{ width: "360 px", height: "480 px" }}>
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={image} alt={title} loading="lazy" />
  </div>
);
