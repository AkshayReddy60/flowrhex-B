

import React from "react";

const StatsDisplay = () => {
  const stats = [
    { value: "32", label: "Over all years of experience" },
    { value: "4", label: "Number projects completed" },
    { value: "4", label: "Number of projects in progress" },
    { value: "7", label: "Startup Competition Finalists and Awards" },
    { value: "1", label: "Government Grant" },
  ];

  return (
    <div className="w-full py-24 bg-gradient-to-r from-teal-400 to-red-400 text-white flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="mt-2 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;