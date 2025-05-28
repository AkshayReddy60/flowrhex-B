import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdEmail, MdPhone, MdSubject, MdMessage, MdOutlinePhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";
import maps from "../../assets/maps.png";

function Contact({
  pageTitle = "Contact Us",
  breadcrumbText = "Contact",
  contactDetails = {
    phone: "+91 9420586572",
    address: `A2-301, Shri Swami Landmark,\nPhase-II, Survey no. 3/15,\nNarhe-Ambegaon Road, Narhe, Pune 411041`,
    website: "https://www.flowrhex.com"
  },
  buttonText = "Send Message",
  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted data:", data);

    
  }
}) {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Header */}
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">Home</Link> / <span className="text-[rgb(236,92,66)]">{breadcrumbText}</span>
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="flex justify-center my-8">
        <img
          src={maps}
          alt="Map location"
          className="w-full max-w-6xl rounded shadow-lg"
        />
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-around items-center text-center mb-12 gap-8">
            <div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <MdOutlinePhoneAndroid className="text-teal-500 text-5xl mx-auto mb-2" />
              </motion.div>
              <p className="font-roboto text-[16px] font-normal leading-6 text-[#36b4ad]">
                Phone: <a href={`tel:${contactDetails.phone}`} className="font-medium underline">{contactDetails.phone}</a>
              </p>
            </div>

            <div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaMapMarkerAlt className="text-teal-500 text-5xl mx-auto mb-2" />
              </motion.div>
              <p className="font-roboto text-[16px] font-normal leading-6 text-[#444444]">
                {contactDetails.address.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>

            <div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <MdEmail className="text-teal-500 text-5xl mx-auto mb-2" />
              </motion.div>
              <a href={contactDetails.website} className="text-teal-600 font-medium" target="_blank" rel="noopener noreferrer">
                {contactDetails.website}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Input: Full Name - req.body.name */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-teal-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none"
                  required
                />
              </div>

              {/* Input: Email - req.body.email */}
              <div className="relative">
                <MdEmail className="absolute left-3 top-3 text-teal-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none"
                  required
                />
              </div>

              {/* Input: Phone - req.body.phone */}
              <div className="relative">
                <MdPhone className="absolute left-3 top-3 text-teal-500" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none"
                />
              </div>

              {/* Input: Subject - req.body.subject */}
              <div className="relative">
                <MdSubject className="absolute left-3 top-3 text-teal-500" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Input: Message - req.body.message */}
            <div className="relative">
              <MdMessage className="absolute left-3 top-3 text-teal-500" />
              <textarea
                name="message"
                rows="8"
                placeholder="Message"
                className="pl-10 pr-4 pt-3 w-full border rounded resize-none focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-6">
              <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded shadow-md transition">
                {buttonText}
              </button>
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}

export default Contact;
