import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/HomePage/Home';
import Properties from './pages/propertiesPage/Properties';
import FilterPage from './pages/propertiesPage/FilterPage'; // Import FilterPage
import About from './pages/aboutPage/About';
import Contact from './pages/contactPage/Contact';
import Footer from './components/footer/Footer'; // Import Footer
import PropertyDetailsPage from './pages/propertyDetailsPage/PropertyDetailsPage'; // Import PropertyDetailsPage
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} /> {/* Property Details Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* Show Footer only on the Contact page */}
      {location.pathname === '/contact' && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
