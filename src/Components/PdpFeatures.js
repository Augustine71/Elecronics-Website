import React from "react";

export const PdpFeatures = (props) => {
  return (
    <div className="pdp__section-2">
      <div>
        {props.data.map((data) => (
          <div class="pdp__classification">
            <div class="pdp__classificationKey">{data.title}</div>
            <div class="pdp__classificationValue">{data.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
