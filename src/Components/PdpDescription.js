import React, { useState } from "react";
import { PdpSectionButtons } from "./PdpSectionButtons";
import { PdpOverview } from "./PdpOverview";
import { PdpFeatures } from "./PdpFeatures";

export const PdpDescription = (props) => {
  const [activeSection, setActiveSection] = useState("desc");

  function changeSection(sec) {
    setActiveSection(sec);
  }

  return (
    <div className="pdp__product-desc-section">
      <div className="pdp__section-buttons">
        <PdpSectionButtons
          changeSection={changeSection}
          activeSection={activeSection}
        />
      </div>
      {activeSection === "desc" && (
        <PdpOverview data={props.desc} prod_cat={props.prod_cat} />
      )}
      {activeSection === "details" && <PdpFeatures data={props.features} />}
    </div>
  );
};
