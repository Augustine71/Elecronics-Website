import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export const HomePageStars = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const starWidth = width > breakPoint ? 25 : 18;

  return (
    <React.Fragment>
      <FaStar size={starWidth} color={"rgba(228, 174, 44, 1)"} />
      <FaStar size={starWidth} color={"rgba(228, 174, 44, 1)"} />
      <FaStar size={starWidth} color={"rgba(228, 174, 44, 1)"} />
      <FaStar size={starWidth} color={"rgba(228, 174, 44, 1)"} />
      <FaStar size={starWidth} color={"rgba(228, 174, 44, 1)"} />
    </React.Fragment>
  );
};
