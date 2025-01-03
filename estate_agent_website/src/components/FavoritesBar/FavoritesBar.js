import React from "react";
import "./favoritesBar.css";

const FavoritesBar = ({ favorites, onDrop, onRemove, onClearAll }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const propertyId = event.dataTransfer.getData("text/plain"); // Retrieve the ID from the drag data
    onDrop(propertyId); // Call onDrop with the ID
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow the drop by preventing the default behavior
  };

  return (
    <div
      className="favorites-bar"
      onDrop={handleDrop} // Drop handler
      onDragOver={handleDragOver} // Allow drag over
    >
      <h3>Favorites</h3>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div>
          {favorites.map((favorite) => (
            <div className="favorite-item" key={favorite.id}>
              {`${favorite.type} - ${favorite.location}`}
              <button
                className="remove-btn"
                onClick={() => onRemove(favorite.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="clear-all-btn" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoritesBar;
