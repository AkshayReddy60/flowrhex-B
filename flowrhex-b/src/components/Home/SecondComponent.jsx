import React from "react";
import { FaUserAlt, FaLightbulb, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionIcon = ({ IconComponent }) => (
  <motion.div
    whileHover={{
      scale: 1.4,
      backgroundColor: "#f87171", // red-400
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500 text-white mx-auto mb-4"
  >
    <IconComponent size={28} />
  </motion.div>
);

const SingleWindowSolution = () => {
  const cards = [
    {
      iconComponent: FaUserAlt,
      title: "When you know, what you need",
      desc: "We deliver Intensified Flow Reactors as per user requirement with desired MOC, desired size, shape and volume of flow...",
      button: "Customized Products",
    },
    {
      iconComponent: FaLightbulb,
      title: "When you want to develop in flow",
      desc: "We believe intensification should happen at the root scale i.e. right from start. Along with transforming available chemistries,…",
      button: "Process Development",
    },
    {
      iconComponent: FaPaperPlane,
      title: "Intensifying only reaction is not enough",
      desc: "We are applying intensification for different unit operations such as distillation, crystallization, absorption,…",
      button: "View All",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide max-w-2xl mx-auto">
        Single Window Solution with Flow Chemistry and Process Intensification
      </h2>
      <p className="text-teal-600 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
        FlowRHEX ® offers unique solutions based on flow chemistry and process intensification techniques. We provide service and support right from introducing Process Intensification to complete process development using intensified tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <article
            key={index}
            className="bg-white p-8 shadow-md border rounded-lg text-center"
          >
            <MotionIcon IconComponent={card.iconComponent} />
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">{card.desc}</p>
            <button
              type="button"
              className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label={card.button}
            >
              {card.button}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SingleWindowSolution;
