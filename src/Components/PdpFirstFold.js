import React, { useContext, useState } from "react";
import { MobileImageGallery } from "./MobileImageGallery";
import { CustomImageSlider } from "./CustomImageSlider";
import { PdpDetails } from "./PdpDetails";
import { FaqSection } from "./FaqSection";
import { PdpDescription } from "./PdpDescription";
import { PdpOverview } from "./PdpOverview";
import { PdpPopUp } from "./PdpPopUp";
import { SimilarProducts } from "./SimilarProducts";
import { Footer } from "./Footer";

import { NavigationBar } from "./NavigationBar";
import { RatingComponent } from "./RatingComponent";

import { ModalContext } from "./ModalContext";

export const PdpFirstFold = (props) => {
  const { isSmallScreen } = useContext(ModalContext);
  const { json } = props;

  const [openPopUp, setOpenPopUp] = useState({
    text: "",
    icon: null,
  });

  return (
    <>
      <NavigationBar />

      <PdpPopUp setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
      <div className="pdp__content-together">
        {isSmallScreen ? (
          <MobileImageGallery imgs={json.imgs} />
        ) : (
          <CustomImageSlider imgs={json.imgs} />
        )}
        <PdpDetails
          json={json}
          setOpenPopUp={setOpenPopUp}
          prod_cat={json.prod_cat}
        />
      </div>
      {isSmallScreen ? (
        <PdpDescription
          desc={json.prod_desc}
          features={json.features}
          prod_cat={json.prod_cat}
        />
      ) : (
        <PdpOverview data={json.prod_desc} prod_cat={json.prod_cat} />
      )}
      <RatingComponent prod_cat={json.prod_cat} prod_id={json.prod_id} />
      <SimilarProducts data={json.similar_products} prod_cat={json.prod_cat} />
      <FaqSection questions={json.faqs} prod_cat={json.prod_cat} />

      <Footer type={"pdp"} />
    </>
  );
};
