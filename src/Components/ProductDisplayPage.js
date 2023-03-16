import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PdpFirstFold } from "./PdpFirstFold";
import { useNavigate } from "react-router-dom";

export const ProductDisplayPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const { productId } = useParams();
  console.log(productId);
  const jsonFile = require(`../Json/${productId}.json`);
  const jsonData = jsonFile;
  console.log(jsonData.name);
  return <PdpFirstFold json={jsonData} />;
};
