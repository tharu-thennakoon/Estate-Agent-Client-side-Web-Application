import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import properties from './properties.json'; // Assuming you saved the data in a JSON file.

const PropertyList = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (id, isFavorite) => {
    if (isFavorite) {
      setFavorites((prev) => [...prev, id]);
    } else {
      setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== id));
    }
  };

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          id={property.id}
          image={property.picture}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.attached_bathroom ? 1 : 0}
          address={property.location}
          title={property.description}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default PropertyList;
