import React, { useState } from 'react';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import './properties.css';
import propertiesData from '../../components/lib/properties.json';
import FavoritesBar from '../../components/FavoritesBar/FavoritesBar'; // Importing the FavoritesBar component
import Map from '../../components/map/Map';


const Properties = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (propertyId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(propertyId)
        ? prevFavorites.filter((id) => id !== propertyId)
        : [...prevFavorites, propertyId]
    );
  };

  const handleDrop = (propertyId) => {
    if (!favorites.includes(propertyId)) {
      setFavorites((prevFavorites) => [...prevFavorites, propertyId]);
    }
  };

  return (
    <div className="propertiesPage">
      <div className="propertiesList">
        <h1>Available Properties</h1>
        {propertiesData.properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.picture}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            address={property.location}
            title={`${property.type} - ${property.location}`}
            onFavouriteToggle={handleFavorite}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', property.id)}
          />
        ))}
      </div>
      <div className="mapSection">
        <Map />
      </div>
      <FavoritesBar favorites={favorites} onDrop={handleDrop} />
    </div>
  );
};

export default Properties;
