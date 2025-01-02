import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../../components/lib/properties.json';
import './propertyDetailsPage.css';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((prop) => prop.id === id);

  const formatPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
  });

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="propertyDetails">
      <h1>{property.type} in {property.location}</h1>
      <img src={property.picture} alt="Property" />
      <p>{property.description}</p>
      <p>Price: {formatPrice.format(property.price)}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms || 'N/A'}</p>
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

export default PropertyDetailsPage;
