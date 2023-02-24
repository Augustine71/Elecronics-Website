import React from "react";

export const PdpOverview = (props) => {
  return (
    <ul className="pdp__section">
      {props.data.map((data) => (
        <li>{data}</li>
      ))}
    </ul>
  );
};
