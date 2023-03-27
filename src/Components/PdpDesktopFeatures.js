import React from "react";

export const PdpDesktopFeatures = (props) => {
  return (
    <div class="pdp-key-features-box">
      <div class="pdp-feature-text">Key Features</div>
      <div class="pdp-keyfeature">
        <ul>
          {props.features.map((data) => (
            <li>
              {data.title}: {data.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
