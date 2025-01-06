// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SearchPage from "./components/SearchPage";
import PropertyDetails from "./components/PropertyDetails";
import NavBar from "./components/NavBar"; // Import NavBar
import "./App.css";

function App() {
  // Load favorites from localStorage or initialize as an empty array
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Update localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a property to favorites if it's not already added
  const handleAddToFavorites = (property) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === property.id)) {
        return [...prevFavorites, property];
      }
      return prevFavorites;
    });
  };

  // Remove a property from favorites by ID
  const handleRemoveFavorite = (propertyId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((property) => property.id !== propertyId)
    );
  };

  // Clear all favorites
  const handleClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="app">
          {/* Header Section */}
          <header className="app-header">
            
            <NavBar /> {/* Navigation Bar */}
          </header>

          {/* Main Content */}
          <main className="app-main">
            <Routes>
              <Route
                path="/"
                element={
                  <SearchPage
                    favorites={favorites}
                    onAddToFavorites={handleAddToFavorites}
                    onRemoveFavorite={handleRemoveFavorite}
                    onClearFavorites={handleClearFavorites}
                  />
                }
              />
              <Route
                path="/property/:id"
                element={
                  <PropertyDetails
                    favorites={favorites}
                    onAddToFavorites={handleAddToFavorites}
                    onRemoveFavorite={handleRemoveFavorite}
                  />
                }
              />
            </Routes>
          </main>

          {/* Footer Section */}
          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Estate Explorer. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
