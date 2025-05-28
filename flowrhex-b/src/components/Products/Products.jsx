import React from "react";
import { FaExchangeAlt, FaFlask, FaHome, FaGem, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import producttwo from "../../assets/producttwo.png";
import productthree from "../../assets/productthree.png";
import productfour from "../../assets/productfour.png";
import { motion } from "framer-motion";
import { GiNestedHexagons } from "react-icons/gi";

// Highlights section
const productItems = [
  {
    icon: <FaExchangeAlt size={24} />,
    text: "Running Batch Process – Intensify !",
  },
  {
    icon: <GiNestedHexagons size={24} />,
    text: "Developing a Process – Intensification at start itself",
  },
  {
    icon: <FaHome size={24} />,
    text: "Our Product, Your Process – Your Intellectual Property !",
  },
  {
    icon: <FaGem size={24} />,
    text: "Research, Scale up and production – All with intensification !",
  },
];

// Product data
const productData = [
  {
    image: producttwo,
    series: "FRHexeR Metal Series (SS316, Hastelloy - C276)",
    title: "FRHexeR – 10T / 50T / 200T",
    operatingConditions: [
      "Operating Temperature -30 ℃ to 200 ℃",
      "Operating Pressure Up to 20 bar",
      "Operating Volume 1 mL/module, 6 mL/module, 16 mL/module",
      "Operating Flow Rate: 0 to 25 mL/min, 20 to 120 mL/min, 100 to 500 mL/min",
    ],
    applications: [
      "Liquid-Liquid reactions",
      "Liquid-gas reactions",
      "Multi-Step reactions",
    ],
    features: [
      "High heat and mass transfer",
      "Low volume reactor",
      "Suitable for lab scale",
      "Flexible assembly",
      "MOC selective chemical compatibility",
      "Tantalum Coated, Silicon Carbide, Inconel, Monel, etc. MOC Reactors on Demand",
    ],
  },
  {
    image: productthree,
    series: "FRHexeR Tube Series",
    title: "FRHexeR – Spiral Tube / 3D-Mixing Tube",
    operatingConditions: [
      "Operating Temperature -30 ℃ to 200 ℃",
      "Operating Pressure Up to 25 bar",
      "Operating Volume Up to 300 mL",
      "Operating Flow Rate Up to 600 mL/min (Capacity selective flow rates)",
      "Operating MoC SS316, Hastelloy",
    ],
    applications: [
      "Liquid-Liquid reactions",
      "Liquid-gas reactions",
      "Multi-Step reactions",
      "Possibility of Slurry Reactions",
    ],
    features: [
      "High heat and mass transfer",
      "Desired volume reactor",
      "Suitable for lab, kilo, pilot, production scale",
      "Flexible assembly",
      "MOC selective chemical compatibility",
    ],
  },
];

// Reusable component
function ProductDetails({ image, series, title, operatingConditions, applications, features }) {
  return (
    <section className=" py-16 px-6">
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
              <ul
  className="space-y-2"
  style={{
    fontFamily: "'Roboto', sans-serif",
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '21px',
    color: 'rgb(138, 138, 138)',
  }}
>
                {operatingConditions.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-base text-gray-900">Applications</h5>
              <ul
  className="space-y-2"
  style={{
    fontFamily: "'Roboto', sans-serif",
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '21px',
    color: 'rgb(138, 138, 138)',
  }}
>
                {applications.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-base text-gray-900">Features</h5>
              <ul
  className="space-y-2"
  style={{
    fontFamily: "'Roboto', sans-serif",
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '21px',
    color: 'rgb(138, 138, 138)',
  }}
>
                {features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Products Component
function Products() {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Header */}
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">Home</Link> / <span className="text-[rgb(236,92,66)]">Products</span>
          </p>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-12 ">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <p className="text-lg py-6 text-gray-500">
            FlowRHEX® is an innovation and development-based technology provider in the area of flow chemistry and process intensification. We are your companion in transforming a process from conventional route to flow chemistry, right from evaluation phase to complete development.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50 text-center">
      <h2 className="font-roboto text-[40px] font-medium leading-[38px] text-[#11333A] mb-12">
  Utilize Our Products
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {productItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-slate-800">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-2 border-slate-800 p-4 rounded-md mb-4"
            >
              {item.icon}
            </motion.div>
            <p className="font-medium text-lg text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Product Details Sections */}
      {productData.map((product, index) => (
        <ProductDetails key={index} {...product} />
      ))}

      {/* Custom Unit Section */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <img
            src={productfour}
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
    </div>
  );
}

export default Products;
