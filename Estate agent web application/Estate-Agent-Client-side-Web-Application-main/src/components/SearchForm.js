import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    postcode: '',
    dateAfter: null
  });

  const propertyTypes = [
    { value: 'any', label: 'Any' },
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData(prevState => ({
      ...prevState,
      [actionMeta.name]: selectedOption ? selectedOption.value : ''
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      dateAfter: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="type">Property Type</label>
        <Select
          id="type"
          name="type"
          options={propertyTypes}
          value={propertyTypes.find(option => option.value === formData.type)}
          onChange={handleSelectChange}
          placeholder="Select Property Type"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="minPrice">Min Price</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={formData.minPrice}
          onChange={handleChange}
          placeholder="Min Price"
        />
      </div>

      <div className="form-group">
        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleChange}
          placeholder="Max Price"
        />
      </div>

      <div className="form-group">
        <label htmlFor="minBedrooms">Min Bedrooms</label>
        <input
          type="number"
          id="minBedrooms"
          name="minBedrooms"
          value={formData.minBedrooms}
          onChange={handleChange}
          placeholder="Min Bedrooms"
        />
      </div>

      <div className="form-group">
        <label htmlFor="maxBedrooms">Max Bedrooms</label>
        <input
          type="number"
          id="maxBedrooms"
          name="maxBedrooms"
          value={formData.maxBedrooms}
          onChange={handleChange}
          placeholder="Max Bedrooms"
        />
      </div>

      <div className="form-group">
        <label htmlFor="postcode">Postcode</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Postcode"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateAfter">Date Added After</label>
        <DatePicker
          id="dateAfter"
          name="dateAfter"
          selected={formData.dateAfter}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="Select a Date"
        />
      </div>

      <button type="submit" className="btn-search">Search</button>
    </form>
  );
};

export default SearchForm;
