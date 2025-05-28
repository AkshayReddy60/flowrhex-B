import React from "react";
import { Link } from "react-router-dom";

import serviceone from '../../assets/serviceone.png'
import servicetwo from '../../assets/servicetwo.png'
import servicethree from '../../assets/servicethree.png'
import servicefour from '../../assets/servicefour.png'
import Servicesection from "../Servicesection/Servicesection";


const servicesData = [
  {
    title: "Introduction to Technology",
    description: 
    ["Connect with us to get introduced to the process intensification and flow chemistry. Whether you are a big entity or a startup or a self motivated researcher, we are fully interested in getting you acquainted with the process intensification and flow chemistry technology. Visit us or call us at your site to learn more about intensification techniques. Depending upon your interest, we provide a know-how and training program about our technology.",


    "Before starting a project, as per customer requirement we develop non disclosure agreements about the information to be discussed with us. We discuss in detail about the process and project with your experts to get complete idea about driver for the technology implementation. Based upon the detailed discussion, we suggest about the possibility for application of intensification. With the thorough discussion about process, we determine the actual requirement and the suitable optimized solution for it. We also take support from our experts channel as per requirement.",


        "With the observations and conclusions from discussion, we develop on paper solution and strategy concerning customer requirements. We intend to avoid unnecessary steps and longer time for technology implementation, by providing complete transparency and professionalism at each stage. Join us for on paper discussion to move forward with the technology transformation."],
    image:serviceone,
  },
  {
    title: "Fast Track Tests & Quality Feasibility Tests",
    description: [
        "With idea of giving flavor of technology for actual chemistries or processes to our customers, we have defined these services. Followed by on paper discussions, we provide Fast Track Tests or Quality Feasibility Tests as per the decided project strategy. These services are defined to demonstrate our technology and products and their excellent features. Flexibility is maintained while offering these services.",

"As names suggest, fast track tests are tests carried out to develop trend of results with few samples by varying key operating parameters, to show the working of our products and technology for particular process. Quality feasibility tests are defined to provide longer exposure to our technology and develop more number of samples to determine the extent of optimization. Depending upon the interest of customer, we choose to offer these services either at in house research and development facility or on customer site as per project requirement."
        
    ],
    image: servicetwo,
    reverse: true,
  },
  {
    title: "Process Development & Optimization",
    description: [
        "Customer delight is our motto! Keeping in mind that small exposure to the technology might not be enough, we have developed Process Optimization and Process Development services. As per the customer request or project requirement, we deliver these services either at in-house Research and Development lab or on customer site using our intensified solutions.",

"With intention of providing ready to start solution, we provide complete optimization of the chemical processes using our intensified solutions as per customer requirement. With this service, we will be giving complete set of operating conditions with the product, where the process performance and results will be at the peak. Further, to develop intensified chemical processes directly using our intensified solutions, we deliver process development services as per customer requirement. Also, we utilize our expertise to develop new and innovative solution for particular unit operation as per project requirement. We intend to give completely a ready plug and play process based on intensified products."
    ],
    image: servicethree,
  },
  {
    title: "Dosing Solution",
    description: [
        "Dosing line is an inseparable part of flow chemistry. With requirement of a dedicated dosing line for the operation, we provide dosing solutions along with our intensified products. As per project requirement, we deliver compatible dosing solutions for wide range of chemicals with selective MOC as metal based or metal free systems. Depending upon customer request, we provide fully automated dosing solutions for wide range of flow rates."
    ],
    image: servicefour,
    reverse: true,
  }
];

function Services() {
  return (
    <div className="font-sans text-gray-700">
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">Home</Link> / <span className="text-[rgb(236,92,66)]">Services</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
         <h1 className="font-roboto text-[35px] font-medium leading-[46px] text-[#11333A] mb-4">
  Our Services
</h1>
          <p className="font-roboto text-[17px] font-normal leading-[24px] text-[#777777] py-6">
  FlowRHEX® is an innovation and development based technology provider in the area of flow chemistry and process intensification. We are your companion in transforming a process from conventional route to flow chemistry, right from evaluation phase to complete development. Our approach is to give you a smoother transformation of your process to flow chemistry.
</p>

        </div>
        
      </section>

      <div className="max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <Servicesection key={index} {...service} />
          ))}
        </div>
    </div>
  );
}

export default Services;
