import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaPen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-[#072E34] text-white py-10 px-6 md:px-20 text-sm font-['Roboto'] ">
      <div className="flex flex-col md:flex-row justify-between gap-10 p-20">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="font-light text-[36px] leading-[36px]">
            FLOW<span className="text-teal-400 font-medium">RHEX</span>
          </h2>
          <p className="text-teal-300 text-[16px] mb-4">PROBURGEON Pvt Ltd</p>
          <p className="text-[rgb(145,152,153)] text-[16px] font-light leading-[24px] mb-6 font-['Roboto']">
  Providing Process Intensified Solutions to make Conventional Chemical Production routes Greener, Safer, Smaller, Faster and Cost-Effective!
</p>
          <div className="flex space-x-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/3">
          <h3 className="text-[20px] font-medium leading-[20px] text-white font-['Roboto'] mb-2">
  Contact Us
</h3>

<p className="text-[20px] font-medium leading-[20px] text-white font-['Roboto'] mb-2">
  Registered Office
</p>
         <div className="space-y-3 text-white text-[16px] font-light leading-[24px] font-['Roboto']">
  <p className="flex items-start">
    <FaMapMarkerAlt className="mt-1 mr-2" />
    Regd. Address: A2-301, Shri Swami Landmark, Phase-II, Survey no. 3/15, Narhe-Ambegaon Road, Narhe, Pune 411041
  </p>
  <p className="flex items-center">
    <FaPhone className="mr-2" /> +91 9420586572
  </p>
  <p className="flex items-center text-red-400">
    <FaPen className="mr-2" />
    <a href="http://www.flowrhex.com" target="_blank" rel="noopener noreferrer">
      www.flowrhex.com
    </a>
  </p>
</div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h3 className="text-[20px] font-medium leading-[20px] text-white font-['Roboto'] mb-2">Contact Us</h3>
          <p className="text-[20px] font-medium leading-[20px] text-white font-['Roboto'] mb-2">Lab</p>
          <div className="space-y-3 text-[16px] font-light leading-[24px] font-['Roboto'] text-gray-300">
  <p className="flex items-start">
    <FaMapMarkerAlt className="mt-1 mr-2" />
    105, FlowRHEX® Lab, Chemical Engineering Department, National Institute of Technology Warangal, Warangal, Telangana 506004
  </p>
  <p className="flex items-center">
    <FaPhone className="mr-2" /> +91 9420586572
  </p>
  <p className="flex items-center text-red-400">
    <FaPen className="mr-2" />
    <a href="http://www.flowrhex.com" target="_blank" rel="noopener noreferrer">
      www.flowrhex.com
    </a>
  </p>
</div>
</div>

</div>
</div>
<div className="bg-[rgb(14,41,46)] p-10 ">
      {/* Footer Bottom */}
      <div className="text-center text-[12px] font-light leading-[24px] font-['Roboto'] text-[#919899] ">
  © Copyright 2019. All Rights Reserved.
</div>
</div>
    
    </>
  );
};

export default Footer;
