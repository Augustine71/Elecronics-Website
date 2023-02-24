import React from "react";

export const PdpSectionButtons = (props) => {
  return (
    <>
      <div
        onClick={() => props.changeSection("desc")}
        className={`pdp__section-button ${
          props.activeSection === "desc" ? "active" : ""
        }`}
      >
        Description
      </div>
      <div
        onClick={() => props.changeSection("details")}
        className={`pdp__section-button ${
          props.activeSection === "details" ? "active" : ""
        }`}
      >
        Features
      </div>
    </>
  );
};
