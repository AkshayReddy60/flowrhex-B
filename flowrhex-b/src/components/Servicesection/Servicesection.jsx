import React from "react";
import { Link } from "react-router-dom";

function ServiceSection({ title, description, image, reverse }) {
  return (
    <div className={`shadow-md p-6 sm:p-8 my-6 mx-2 sm:mx-4 rounded-lg flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-2 sm:p-4">
        <img src={image} alt={title} className="w-full rounded-md object-cover" />
      </div>
      <div className="md:w-1/2 p-2 sm:p-4 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{title}</h2>

        {description.map((para, index) => (
          <p
            key={index}
            className="font-roboto text-[14px] sm:text-[15px] font-normal leading-[22px] sm:leading-[24px] text-[#919899] mb-4"
          >
            {para}
          </p>
        ))}

        <Link
          to="/contact"
          className="bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700 w-max mx-auto md:mx-0"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default ServiceSection;
