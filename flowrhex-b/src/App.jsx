<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Technology from './Components/Technology/Technology';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import TeamMemberDetails from './Components/Team/Teammembers';
import About from './Components/About/About';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/:id" element={<TeamMemberDetails />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
=======

import React from "react"

function App() {
 

  return (
    <>
      
    </>
  )
}

export default App
>>>>>>> b9f50670f8dc3a9032f609b191e0c39bdcc89345
