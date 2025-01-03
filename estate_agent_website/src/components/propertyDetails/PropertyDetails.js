import React from 'react';
import './propertyDetails.css';  // Import the CSS file here

const PropertyDetails = ({ property, onClose }) => {
  return (
    <div className="property-details">
      <button className="close-btn" onClick={onClose}>Close</button>
      <img src={property.picture} alt={property.type} />
      <h2>{property.type}</h2>
      <p>{property.description}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: {property.price.toLocaleString()} LKR</p>
      <p>Location: {property.location}</p>
      <p>Tenure: {property.tenure}</p>
      <h3>Gallery</h3>
      <div className="gallery">
        {property.pictures.map((pic, index) => (
          <img key={index} src={pic} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <h3>Floorplan</h3>
      <img src={property.floorplan} alt="Floorplan" />
    </div>
  );
};

export default PropertyDetails;
