
import React from "react";

const FRHexerModels = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://www.flowrhex.com/assets/frontend/images/226bd-slider11.jpg')" }} // Replace with actual path
    >
      
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 border-white border z-10 ${
            pos === "top-left" && "top-10 left-10 border-r-0 border-b-0"
          } ${pos === "top-right" && "top-10 right-10 border-l-0 border-b-0"}
            ${pos === "bottom-left" && "bottom-10 left-10 border-r-0 border-t-0"}
            ${pos === "bottom-right" && "bottom-10 right-10 border-l-0 border-t-0"}`}
        ></div>
      ))}

      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h4 className="text-lg md:text-xl mb-2">We are dedicated to make</h4>
        <h1 className="text-3xl md:text-6xl font-bold text-teal-400 leading-tight">
          Process Intensification & Flow<br /> Chemistry
        </h1>
        <p className="mt-4 text-sm md:text-base max-w-2xl">
          A day to day practise ... Our mission is to make conventional chemical production routes Greener, safer, smaller, faster and cost-effective!
        </p>
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded shadow-lg">
          Discover Now
        </button>
        <div className="flex mt-10 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default FRHexerModels;