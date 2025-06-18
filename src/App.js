// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import CareersPage from './pages/Careers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
