// FavoritesBar.js
import React from 'react';

const FavoritesBar = ({ favorites, onDrop }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const propertyId = event.dataTransfer.getData('text/plain');
    onDrop(propertyId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="favoritesBar"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>Favorites</h2>
      <div className="favoriteProperties">
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          favorites.map((favorite) => (
            <div key={favorite.id} className="favoriteItem">
              <p>{`${favorite.type} - ${favorite.location}`}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesBar;
