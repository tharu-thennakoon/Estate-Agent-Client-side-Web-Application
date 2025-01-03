import React, { useState } from "react";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import "./properties.css";
import propertiesData from "../../components/lib/properties.json";
import FavoritesBar from "../../components/FavoritesBar/FavoritesBar";
import Map from "../../components/map/Map";

const Properties = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (propertyId) => {
    const property = propertiesData.properties.find(
      (p) => p.id === propertyId
    );
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === propertyId)
        ? prevFavorites.filter((fav) => fav.id !== propertyId)
        : [...prevFavorites, property]
    );
  };

  const handleDrop = (propertyId) => {
    const property = propertiesData.properties.find(
      (p) => p.id === propertyId
    );
    if (property && !favorites.some((fav) => fav.id === propertyId)) {
      setFavorites((prevFavorites) => [...prevFavorites, property]);
    }
  };

  const handleRemove = (propertyId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== propertyId)
    );
  };

  const handleClearAll = () => {
    setFavorites([]);
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
            onFavoriteToggle={handleFavorite}
          />
        ))}
      </div>
      <div className="mapSection">
        <Map />
      </div>
      <FavoritesBar
        favorites={favorites}
        onDrop={handleDrop}
        onRemove={handleRemove}
        onClearAll={handleClearAll}
      />
    </div>
  );
};

export default Properties;
