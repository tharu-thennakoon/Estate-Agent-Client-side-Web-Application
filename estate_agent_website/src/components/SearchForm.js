import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="form-group">
        <label htmlFor="propertyType">Property Type:</label>
        <select id="propertyType" name="propertyType">
          <option value="any">Any</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="minPrice">Min Price:</label>
        <input type="number" id="minPrice" name="minPrice" placeholder="Min Price" />
      </div>
      <div className="form-group">
        <label htmlFor="maxPrice">Max Price:</label>
        <input type="number" id="maxPrice" name="maxPrice" placeholder="Max Price" />
      </div>
      <div className="form-group">
        <label htmlFor="minBedrooms">Min Bedrooms:</label>
        <input type="number" id="minBedrooms" name="minBedrooms" placeholder="Min Bedrooms" />
      </div>
      <div className="form-group">
        <label htmlFor="maxBedrooms">Max Bedrooms:</label>
        <input type="number" id="maxBedrooms" name="maxBedrooms" placeholder="Max Bedrooms" />
      </div>
      <div className="form-group">
        <label htmlFor="dateAdded">Date Added:</label>
        <input type="date" id="dateAdded" name="dateAdded" />
      </div>
      <div className="form-group">
        <label htmlFor="postcode">Postcode Area:</label>
        <input type="text" id="postcode" name="postcode" placeholder="Postcode" />
      </div>
      <button type="submit" className="cta-button">Search Properties</button>
    </form>
  );
};

export default SearchForm;
