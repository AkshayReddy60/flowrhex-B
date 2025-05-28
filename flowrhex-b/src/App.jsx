
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import TeamMemberDetails from './components/Team/Teammembers';
import About from './components/About/About';
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


