import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './property.css';

const PropertyCard = ({
  id,
  image, // This image is passed as a prop
  price,
  bedrooms = 0,
  bathrooms = 0,
  address,
  title,
  onFavoriteToggle,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  const handleFavoriteClick = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onFavoriteToggle(id, newFavoriteStatus);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', id);
  };

  const handleViewDetailsClick = () => {
    if (id) navigate(`/property/${id}`);  // Use navigate to go to the details page
  };

  return (
    <div
      className="property-card"
      draggable
      onDragStart={handleDragStart}
      aria-grabbed={isFavorite}
    >
      {/* Ensure the image source is valid */}
      <img src={image} alt={title} className="property-image" />
      <div className="property-info">
        <h4>{title}</h4>
        <p>{address}</p>
        <p>
          {price.toLocaleString()} LKR - {bedrooms} bedroom
          {bedrooms !== 1 ? 's' : ''}, {bathrooms} bathroom
          {bathrooms !== 1 ? 's' : ''}
        </p>
        <button onClick={handleViewDetailsClick} className="view-details-btn">
          View Details
        </button>
        <button
          onClick={handleFavoriteClick}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default PropertyCard;
