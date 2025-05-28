// components/ProductDetails/ProductTwo.jsx
import React from "react";
import ProductDetails from "./ProductDetailes";
import producttwo from "../../assets/producttwo.png";

const ProductTwo = () => (
  <ProductDetails
    image={producttwo}
    series="FRHexeR Pilot Series (SS316, Hastelloy, PTFE)"
    title="FRHexeR – 10T / 25T"
    operatingConditions={[
      "Operating Temperature -10 ℃ to 150 ℃",
      "Operating Pressure Up to 10 bar",
      "Operating Volume 3 mL/module, 10 mL/module",
      "Operating Flow Rate: 0 to 1 L/min",
    ]}
    applications={[
      "Process development",
      "Pilot scale reaction optimization",
      "Scale up studies",
    ]}
    features={[
      "Robust construction",
      "Customizable modules",
      "Intermediate scale throughput",
      "Material flexibility (SS316/Hastelloy/PTFE)",
      "Excellent heat and mass transfer",
    ]}
  />
);

export default ProductTwo;
