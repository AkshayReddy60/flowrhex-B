// components/ProductDetails/ProductOne.jsx
import React from "react";

import first from '../../assetes/first.png';
import ProductDetails from "./ProductDetailes";

const ProductOne = () => (
  <ProductDetails
    image={first}
    series="FRHexeR Lab Series (Glass, SS316, PTFE)"
    title="FRHexeR – 1T / 5T"
    operatingConditions={[
      "Operating Temperature -10 ℃ to 100 ℃",
      "Operating Pressure Up to 6 bar",
      "Operating Volume 0.5 mL/module, 1 mL/module",
      "Operating Flow Rate: 0 to 10 mL/min, 0 to 25 mL/min",
    ]}
    applications={[
      "Liquid-Liquid reactions",
      "Photochemical reactions",
      "Basic flow evaluation",
    ]}
    features={[
      "Transparent body (glass/PTFE)",
      "Low volume reactor",
      "Suitable for lab scale",
      "Flexible assembly",
      "Easy visual inspection",
      "Cost effective",
    ]}
  />
);

export default ProductOne;
