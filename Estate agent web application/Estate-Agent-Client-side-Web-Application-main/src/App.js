// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SearchPage from "./components/SearchPage";
import PropertyDetails from "./components/PropertyDetails";
import NavBar from "./components/NavBar"; // Import NavBar
import About from "./components/About"; // Import About
import Contact from "./components/contact"; // Import Contact
import SignUp from "./components/SignUp"; // Import SignUp
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (property) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === property.id)) {
        return [...prevFavorites, property];
      }
      return prevFavorites;
    });
  };

  const handleRemoveFavorite = (propertyId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((property) => property.id !== propertyId)
    );
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="app">
          <header className="app-header">
            <NavBar /> {/* Navigation Bar */}
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<SearchPage favorites={favorites} onAddToFavorites={handleAddToFavorites} onRemoveFavorite={handleRemoveFavorite} onClearFavorites={handleClearFavorites} />} />
              <Route path="/property/:id" element={<PropertyDetails favorites={favorites} onAddToFavorites={handleAddToFavorites} onRemoveFavorite={handleRemoveFavorite} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} /> {/* SignUp Route */}
            </Routes>
          </main>

          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Estate Explorer. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
