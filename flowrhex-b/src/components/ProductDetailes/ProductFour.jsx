import React from "react";
import { Link } from "react-router-dom";  
import Productfour from '../../assets/productfour.png';

function ProductFour() {
  return (
    <section className="py-16  px-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={Productfour}
          alt="Customized Unit"
          className="w-full h-auto rounded-md mb-8 object-cover shadow-md"
        />
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Customized Unit</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          With our innovative and technological skills, we have kept scope for customized units as per project requirements.
          Along with our dedicated products, we intend to develop new products tailored to a particular process requirement on lab scale
          and scale them to meet your production needs.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Tubular flow reactor customization is one of our specialties. Multiple inlet-outlet tubular reactors as per your
          process requirement for multistep processing, residence time and scale-up can be provided at highly affordable costs.
        </p>
        <p className="font-medium text-[24px] leading-[24px] text-[rgb(6,115,108)] font-['Roboto'] ">
          Want to learn more about customized products? Reach out to us…
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#1a4e58] text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default ProductFour;
