import React from "react";
import { FaGem, FaCloud, FaCloudUploadAlt, FaRocket } from "react-icons/fa";
import FRHexerModels from "./FirstComponent";
import SingleWindowSolution from "./SecondComponent";
import StatsDisplay from "./StatsDispaly";
import HowWeWork from "./HowWeWork";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";


const MotionIcon = ({ IconComponent }) => (
  <motion.div
    whileHover={{
      scale: 2.0,
      backgroundColor: "#f87171", // Tailwind red-400
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="text-white text-2xl"  
  >
    <IconComponent />
  </motion.div>
);

const features = [
  {
    icon: <FaGem className="text-teal-500 text-2xl" />,
    title: "Young Intensification Techies",
    description:
      "We are process intensification enthusiasts, dedicated to making the technology end-to-end applicable for chemical processes along with complete automation.",
  },
  {
    icon: <FaRocket className="text-teal-500 text-2xl" />,
    title: "We are a Startup!!!",
    description:
      "FlowRHEX® is a DIPP, Govt. of India recognized startup. As a startup, we are flexible and adaptable to your needs. Also, we are affordable to everyone.",
  },
  {
    icon: <FaCloudUploadAlt className="text-teal-500 text-2xl" />,
    title: "Renowned Experts for Back-end Support",
    description:
      "We have wide expertise with academic and industrial process intensification and flow chemistry experts on our advisory board.",
  },
  {
    icon: <FaCloud className="text-teal-500 text-2xl" />,
    title: "Our Vision",
    description:
      "To make process intensification and flow chemistry available, applicable, and affordable for chemical industries and create a greener impact on the Indian Chemical Industry by providing end-to-end intensified turn-key plants.",
  },
];

const Home = () => {
  return (
    <>
      <FRHexerModels />
      <SingleWindowSolution />
      <section className="px-4 py-10 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-900 p-6 rounded-lg">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              FRHexeR – Glass Series
            </h2>
            <p className="text-teal-300 mb-4 leading-relaxed">
              Mass Transfer and Heat Transfer are key drivers for any chemical
              process. FlowRHEX® reactors help in providing intense mixing and
              efficient heat transfer. For multiphase reactions, interfacial mass
              transfer is very important. This video shows air - coloured water
              intense mixing in a single module of the reactor. Along with glass
              micro-reactors, we provide SS316/SS316L and Hastelloy C276 plate type
              microreactors. Other materials of constructions like{" "}
              <span className="font-bold underline text-white">
                Tantalum Coated / Silicon Carbide
              </span>{" "}
              are available on demand.
            </p>
            <button
              type="button"
              className="mt-4 px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded transition focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Learn more
            </button>
          </div>

          {/* Video */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full max-h-[400px] rounded-lg object-cover"
              aria-label="FlowRHEX Glass Series product video demonstrating intense mixing"
            >
              <source
                src="https://www.flowrhex.com/assets/frontend/images/Product%20Video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mt-10 flex flex-col md:flex-row items-start gap-10">
          {/* Title Section */}
          <div className="w-full md:w-[40%]">
            <h2
  className="text-center mb-6"
  style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '38px',
    color: 'rgb(17, 51, 58)',
  }}
>
  Why Choose Us?
</h2>

          </div>

          {/* Features */}
          <div className="md:w-[60%]">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p
  style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '24px',
    color: 'rgb(145, 152, 153)',
  }}
>
  {feature.description}
</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StatsDisplay/>
      <HowWeWork/>
      <Footer/>
    </>
  );
};

export default Home;
