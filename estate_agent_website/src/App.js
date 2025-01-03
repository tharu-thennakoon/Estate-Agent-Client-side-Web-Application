import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './components/navbar/Navbar';
import Home from './pages/HomePage/Home';
import Properties from './pages/propertiesPage/Properties';
import FilterPage from './pages/propertiesPage/FilterPage'; // Import FilterPage
import About from './pages/aboutPage/About';
import Contact from './pages/contactPage/Contact';
import Footer from './components/footer/Footer'; // Import Footer
import PropertyDetailsPage from './pages/propertyDetailsPage/PropertyDetailsPage'; // Import PropertyDetailsPage
import SignInPage from './pages/authPage/SignInPage'; // Import SignInPage
import SignUpPage from './pages/authPage/SignUpPage'; // Import SignUpPage
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './App.css';

// Create a separate component to manage location and footer rendering
const AppWithLocation = () => {
  const location = useLocation(); // Hook to get the current location

  // Conditionally render Footer on pages other than SignIn and SignUp
  const showFooter = !['/signin', '/signup'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/signin" element={<SignInPage />} /> {/* Sign In Page */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Sign Up Page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWithLocation />
    </Router>
  );
};

export default App;
