// components/ProductDetails/ProductDetails.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const ProductDetails = ({
  image,
  series,
  title,
  operatingConditions,
  applications,
  features,
}) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <img src={image} alt={series} className="rounded-md shadow-md w-full" />
        </div>
        <div>
          <h4 className="text-red-600 font-semibold">{series}</h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-800">
            <div>
              <h5 className="font-semibold mb-2 text-base text-gray-900">Operating Conditions</h5>
              <ul className="space-y-2 text-gray-600 text-[15px] font-medium leading-[21px]">
                {operatingConditions.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-base text-gray-900">Applications</h5>
              <ul className="space-y-2 text-gray-600 text-[15px] font-medium leading-[21px]">
                {applications.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-base text-gray-900">Features</h5>
              <ul className="space-y-2 text-gray-600 text-[15px] font-medium leading-[21px]">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
