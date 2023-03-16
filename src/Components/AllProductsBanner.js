import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const AllProductsBanner = () => {
  const { isSmallScreen } = useContext(ModalContext);
  return (
    <div className="homepage__banner">
      <img
        src={
          isSmallScreen
            ? "https://imgur.com/P5WsX2U.jpg"
            : "https://imgur.com/VSWcnxZ.jpg"
        }
        alt="homepage__banner"
      />
    </div>
  );
};
