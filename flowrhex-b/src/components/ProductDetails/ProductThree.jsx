// components/ProductDetails/ProductThree.jsx
import React from "react";
import ProductDetails from "./ProductDetailes";
import productthree from "../../assets/productthree.png";

const ProductThree = () => (
  <ProductDetails
    image={productthree}
    series="FRHexeR Industrial Series (SS316, Hastelloy, PTFE)"
    title="FRHexeR – 100T / 500T"
    operatingConditions={[
      "Operating Temperature -10 ℃ to 200 ℃",
      "Operating Pressure Up to 15 bar",
      "Operating Volume > 50 mL/module",
      "Operating Flow Rate: > 1 L/min",
    ]}
    applications={[
      "Continuous manufacturing",
      "Bulk chemical production",
      "High throughput synthesis",
    ]}
    features={[
      "Industrial-grade materials",
      "Modular for scaling",
      "High flow rate support",
      "Excellent durability",
      "Process automation ready",
    ]}
  />
);

export default ProductThree;
