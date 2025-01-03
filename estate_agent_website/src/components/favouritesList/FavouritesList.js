import React from 'react';
import './FavouritesList.css'; // Import the CSS file here
import properties from './lib/properties.json'; // Adjust the path if necessary

function FavouritesList() {
  return (
    <div>
      <h2>Favourite Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h3>{property.type} - {property.bedrooms} Bedrooms</h3>
            <p><strong>Price:</strong> {property.price.toLocaleString()}</p>
            <p><strong>Location:</strong> {property.location}</p>
            <p>{property.description}</p>
            <img src={property.picture} alt={`${property.type} - ${property.location}`} width="300" />
            <div>
              <h4>Additional Pictures:</h4>
              {property.pictures.map((pic, index) => (
                <img key={index} src={pic} alt={`Property picture ${index + 1}`} width="100" />
              ))}
            </div>
            <p><strong>Floor Plan:</strong></p>
            <img src={property.floorplan} alt="Floor Plan" width="300" />
            <p><em>Added on: {property.added.month} {property.added.day}, {property.added.year}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesList;
