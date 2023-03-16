import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const HomeBanner = () => {
  const { isSmallScreen } = useContext(ModalContext);
  return (
    <div className="homepage__banner">
      <img
        src={
          isSmallScreen
            ? "https://imgur.com/48yg02T.jpg"
            : "https://imgur.com/dQun32O.jpg"
        }
        alt="homepage__banner"
      />
    </div>
  );
};
