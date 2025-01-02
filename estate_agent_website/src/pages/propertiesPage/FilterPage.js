import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Map from '../../components/map/Map';
import propertiesData from '../../components/lib/properties.json';
import './filterPage.css';

const FilterPage = () => {
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

  useEffect(() => {
    const query = location.state?.query || {};
    filterProperties(query); // Filter with basic criteria
  }, [location.state]);

  const filterProperties = (query) => {
    const results = propertiesData.properties.filter((property) => {
      const matchesTenure = query.tenure ? property.tenure === query.tenure : true;
      const matchesLocation = query.location
        ? property.location.toLowerCase().includes(query.location.toLowerCase())
        : true;

      return matchesTenure && matchesLocation;
    });

    setFilteredProperties(results);
  };

  const handleAdvancedSearch = (query) => {
    const results = propertiesData.properties.filter((property) => {
      const matchesTenure = query.tenure ? property.tenure === query.tenure : true;
      const matchesLocation = query.location
        ? property.location.toLowerCase().includes(query.location.toLowerCase())
        : true;
      const matchesMinPrice = query.minPrice ? property.price >= query.minPrice : true;
      const matchesMaxPrice = query.maxPrice ? property.price <= query.maxPrice : true;
      const matchesMinBedrooms = query.minBedrooms
        ? property.bedrooms >= query.minBedrooms
        : true;
      const matchesMaxBedrooms = query.maxBedrooms
        ? property.bedrooms <= query.maxBedrooms
        : true;

      return (
        matchesTenure &&
        matchesLocation &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms
      );
    });

    setFilteredProperties(results);
  };

  return (
    <div className="filterPage">
      <h1>Advanced Property Filter</h1>
      <SearchBar onSearch={handleAdvancedSearch} advanced={true} />
      <div className="propertiesList">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.picture}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            address={property.location}
            title={`${property.type} - ${property.location}`}
          />
        ))}
      </div>
      <div className="mapSection">
        <Map />
      </div>
    </div>
  );
};

export default FilterPage;
