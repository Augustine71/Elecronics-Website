import React, { useEffect } from "react";

export const PdpPopUp = (props) => {
  useEffect(() => {
    if (props.openPopUp) {
      const timeout = setTimeout(() => {
        props.setOpenPopUp("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [props.openPopUp]);

  return (
    <div className={`pdp_popup ${props.openPopUp.text ? "show" : ""}`}>
      {props.openPopUp.text && (
        <div>
          {props.openPopUp.icon}
          {props.openPopUp.text}
        </div>
      )}
    </div>
  );
};
