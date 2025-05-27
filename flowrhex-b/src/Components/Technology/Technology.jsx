import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChartPie,
  FaArrowDown,
  FaUser,
  FaFireAlt,
  FaClock,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { BiTrendingUp } from "react-icons/bi";
import { LuMountainSnow } from "react-icons/lu";

const benefits = [
  {
    icon: FaChartPie,
    title: "High efficiency and Process performance",
  },
  {
    icon: FaArrowDown,
    title: "Lower size and operating volumes of production equipment",
  },
  {
    icon: BiTrendingUp,
    title:
      "Highly Improved Heat and Mass Transfer providing Integrated Operating Conditions",
  },
  {
    icon: FaUser,
    title: "Higher rate of returns with lower CAPEX / OPEX",
  },
  {
    icon: LuMountainSnow,
    title:
      "Reduction in synthesis steps with straightforward and inline operations",
  },
  {
    icon: SiGoogleanalytics,
    title: "Precise Parameter Control with easier Automation of the Operation",
  },
  {
    icon: FaFireAlt,
    title:
      "Improved Safety with reduced risks and hazards with lower Environmental Impact",
  },
  {
    icon: FaClock,
    title: "Shorter Process Development and Scale-up times",
  },
  {
    icon: FaChartPie,
    title: "Drastic reduction in Plant size",
  },
];

function Technology() {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Banner */}
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Technology</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[rgb(236,92,66)]">Technology</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-roboto text-[40px] font-medium leading-[40px] text-[rgb(17,51,58)] mb-8">
            PROCESS INTENSIFICATION AND FLOW CHEMISTRY
          </h2>
          <p className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
            Process Intensification is making a process either chemical or
            non-chemical highly efficient by featuring process miniaturization,
            safety and cost effectiveness to that process. Process
            Intensification can be achieved by reducing the size of equipment,
            time for production, costs involved with the production and risk and
            hazards associated with the process. Many unit operations in
            chemical industry like mixing, heat transfer, reaction, distillation
            are being intensified by developing new units or methodologies for
            specific operations.
          </p>
          <p className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
            Flow Chemistry is carrying out a chemical process in continuous way.
            It provides multiple advantages to a process such as integrated
            operating conditions, precise parameter control, easier automation,
            safety and intensified heat and mass transfer, etc. With the use of
            microchannel technology and flow chemistry, many unit operations can
            be easily intensified.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-roboto text-[40px] font-medium leading-[38px] text-[rgb(17,51,58)] mb-4">
            Why opt for Process Intensification
          </h3>
          <p className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
            Following characteristic features are good reasons to plump for
            Process Intensification and Flow Chemistry
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {benefits.map(({ icon: IconComponent, title }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-12 hover:shadow-md transition"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    color: "#ef4444", // Tailwind red-500
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="text-teal-500 text-6xl mb-4 mx-auto flex justify-center items-center"
                >
                  <IconComponent />
                </motion.div>
                <p className="text-gray-700 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-roboto text-[20px] font-normal leading-[30px] text-[rgb(68,68,68)]">
            At FlowRHEX®, we are dedicated to implement intensification for different unit operations, with the aim of developing end to end intensified processes. Currently, we have received government grant for development of Intensified Distillation Unit. Simultaneously we are working on developing Intensified Crystallization based solution.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Technology;
