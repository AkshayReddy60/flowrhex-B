// components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaExchangeAlt, FaHome, FaGem } from "react-icons/fa";
import { GiNestedHexagons } from "react-icons/gi";
import { motion } from "framer-motion";


import Footer from "../Footer/Footer";



const productItems = [
  { icon: <FaExchangeAlt size={24} />, text: "Running Batch Process – Intensify !" },
  { icon: <GiNestedHexagons size={24} />, text: "Developing a Process – Intensification at start itself" },
  { icon: <FaHome size={24} />, text: "Our Product, Your Process – Your Intellectual Property !" },
  { icon: <FaGem size={24} />, text: "Research, Scale up and production – All with intensification !" },
];

function Products() {
  return (
    <div className="font-sans text-gray-700">
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">Home</Link> / <span className="text-[rgb(236,92,66)]">Products</span>
          </p>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <p className="text-lg py-6 text-gray-500">
           FlowRHEX® Technologies provide range of products based on flow chemistry and process intensification. 
           Our main focus is to provide safer, efficient and miniaturized solution to chemical processes. 
           We intend to share our cutting edge technology with every interested use. With this goal, our motivated team is developing innovative products for chemical unit operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <h2 className="font-roboto text-[40px] font-medium text-[#11333A] mb-12">Utilize Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {productItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-slate-800">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }} className="border-2 border-slate-800 p-4 rounded-md mb-4">
                {item.icon}
              </motion.div>
              <p className="font-medium text-lg text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Sections */}
      <ProductOne />
      <ProductTwo/>
      <ProductThree />
      <ProductFour/>
      <Footer/>
    </div>
  );
}

export default Products;
