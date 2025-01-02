import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../../assets/search.png';

const SearchBar = ({ onSearch, navigateToFilterPage, advanced = false }) => {
  const [query, setQuery] = useState({
    tenure: '', // Tenure type (For Sale/To Rent)
    location: '', // City location
    propertyType: '', // Property type (House, Flat, Any)
    minPrice: '', // Minimum price (Advanced)
    maxPrice: '', // Maximum price (Advanced)
    minBedrooms: '', // Minimum bedrooms (Advanced)
    maxBedrooms: '', // Maximum bedrooms (Advanced)
    dateAdded: '', // Date added (Advanced)
    postcodeArea: '' // Postcode area (Advanced)
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleTenureChange = (tenure) => {
    setQuery((prev) => ({ ...prev, tenure }));
  };

  const validate = () => {
    const newErrors = {};
    
    // Validate Location
    if (!query.location) {
      newErrors.location = 'Location is required';
    }
    
    // Validate Price Range
    if (query.minPrice && query.maxPrice && query.minPrice > query.maxPrice) {
      newErrors.priceRange = 'Min Price cannot be greater than Max Price';
    }

    // Validate Bedrooms Range
    if (query.minBedrooms && query.maxBedrooms && query.minBedrooms > query.maxBedrooms) {
      newErrors.bedroomsRange = 'Min Bedrooms cannot be greater than Max Bedrooms';
    }

    // Validate Date Added (Check if it's not a future date)
    if (query.dateAdded && new Date(query.dateAdded) > new Date()) {
      newErrors.dateAdded = 'Date Added cannot be in the future';
    }

    // Validate Postcode Area (A simple regex for valid UK postcodes)
    if (query.postcodeArea && !/^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i.test(query.postcodeArea)) {
      newErrors.postcodeArea = 'Invalid postcode format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate the form before submitting
    if (!validate()) {
      return; // Don't submit if validation fails
    }

    if (navigateToFilterPage) {
      navigateToFilterPage(query); // Navigate to FilterPage with the query
    } else {
      onSearch(query); // Perform local filtering (used for advanced filters)
    }
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        {/* Tenure Buttons */}
        <div className="tenure">
          <button
            type="button"
            className={query.tenure === 'For sale' ? 'active' : ''}
            onClick={() => handleTenureChange('For sale')}
          >
            For Sale
          </button>
          <button
            type="button"
            className={query.tenure === 'To rent' ? 'active' : ''}
            onClick={() => handleTenureChange('To rent')}
          >
            To Rent
          </button>
        </div>

        {/* Location Field */}
        <input
          type="text"
          name="location"
          placeholder="City Location"
          value={query.location}
          onChange={handleInputChange}
        />
        {errors.location && <span className="error">{errors.location}</span>}

        {/* Advanced Fields (Only visible on FilterPage) */}
        {advanced && (
          <>
            {/* Property Type Field */}
            <select
              name="propertyType"
              value={query.propertyType}
              onChange={handleInputChange}
            >
              <option value="">Property Type</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Any">Any</option>
            </select>

            {/* Price Range Fields */}
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={query.minPrice}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={query.maxPrice}
              onChange={handleInputChange}
            />
            {errors.priceRange && <span className="error">{errors.priceRange}</span>}

            {/* Bedrooms Range Fields */}
            <input
              type="number"
              name="minBedrooms"
              placeholder="Min Bedrooms"
              value={query.minBedrooms}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxBedrooms"
              placeholder="Max Bedrooms"
              value={query.maxBedrooms}
              onChange={handleInputChange}
            />
            {errors.bedroomsRange && <span className="error">{errors.bedroomsRange}</span>}

            {/* Date Added Field */}
            <input
              type="date"
              name="dateAdded"
              value={query.dateAdded}
              onChange={handleInputChange}
            />
            {errors.dateAdded && <span className="error">{errors.dateAdded}</span>}

            {/* Postcode Area Field */}
            <input
              type="text"
              name="postcodeArea"
              placeholder="Postcode Area (e.g., NW1)"
              value={query.postcodeArea}
              onChange={handleInputChange}
            />
            {errors.postcodeArea && <span className="error">{errors.postcodeArea}</span>}
          </>
        )}

        {/* Search Button */}
        <button type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
