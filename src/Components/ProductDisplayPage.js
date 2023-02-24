import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PdpFirstFold } from "./PdpFirstFold";

export const ProductDisplayPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId } = useParams();
  console.log(productId);
  const jsonFile = require(`../Json/${productId}.json`);
  const jsonData = jsonFile;
  console.log(jsonData.name);
  return <PdpFirstFold json={jsonData} />;
};
