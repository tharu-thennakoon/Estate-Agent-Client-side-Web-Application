import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './property.css';

const PropertyCard = ({ id, image, price, bedrooms, bathrooms, address, title, onFavouriteToggle }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();

  const formatPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
  });

  // Handle Favourite button click
  const handleFavouriteClick = () => {
    const newFavouriteStatus = !isFavourite;
    setIsFavourite(newFavouriteStatus);
    onFavouriteToggle(id, newFavouriteStatus); // Pass the updated state to parent
  };

  // Handle drag start event for drag and drop
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', id);
  };

  // Handle View Details button click (navigates to property details page)
  const handleViewDetailsClick = () => {
    navigate(`/property/${id}`); // Navigate to the property details page
  };

  return (
    <div className="property-card" draggable onDragStart={handleDragStart}>
      <img src={image} alt="Property" className="property-image" />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{address}</p>
        <div className="property-details">
          <span>{formatPrice.format(price)}</span>
          <span>{bedrooms} bedroom{bedrooms > 1 ? 's' : ''}</span>
          <span>{bathrooms || 0} bathroom{bathrooms > 1 ? 's' : ''}</span>
        </div>
        <button onClick={handleViewDetailsClick}>View Details</button> {/* View Details button */}
        <button className="favourite-button" onClick={handleFavouriteClick}>
          {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
