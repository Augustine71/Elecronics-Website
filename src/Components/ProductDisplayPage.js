import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
import { Loader } from "./Loader";

import { ModalContext } from "./ModalContext";

import { fs } from "../Config/Config";

export const ProductDisplayPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const { productId } = useParams();
  const [json, setJson] = useState({});

  useEffect(() => {
    // Get a reference to the collection
    const collectionRef = fs.collection("Products");

    // Retrieve the document containing the array data
    collectionRef
      .doc(productId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setJson(data);
          console.log(data);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting array data: ", error);
      });
  }, []);

  const { isSmallScreen } = useContext(ModalContext);

  const [openPopUp, setOpenPopUp] = useState({
    text: "",
    icon: null,
  });

  return (
    <>
      <NavigationBar />
      {Object.keys(json).length !== 0 ? (
        <>
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
          <SimilarProducts
            data={json.similar_products}
            prod_cat={json.prod_cat}
          />
          <FaqSection questions={json.faqs} prod_cat={json.prod_cat} />
          <Footer type={"pdp"} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
