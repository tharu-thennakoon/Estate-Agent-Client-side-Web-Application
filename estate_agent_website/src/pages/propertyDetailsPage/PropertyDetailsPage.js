import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import leaflet for custom icons
import propertiesData from '../../assets/properties.json';
import pinMap from '../../assets/pinMap.png';
import './propertyDetailsPage.css';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((prop) => prop.id === id);

  const formatPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 0,
  });

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: pinMap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  if (!property) {
    return <div className="error-message">Property not found</div>;
  }

  return (
    <div className="property-details-page">
      <h1>{property.type} in {property.location}</h1>
      <img src={property.picture} alt="Main Property" className="main-image" />
      <p>{property.description}</p>
      <p>Price: {formatPrice.format(property.price)}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms || 'N/A'}</p>
      <p>Tenure: {property.tenure}</p>

      <h3>Gallery</h3>
      <div className="gallery">
        {property.pictures.slice(0, 6).map((pic, index) => (
          <img key={index} src={pic} alt={`Gallery ${index + 1}`} />
        ))}
      </div>

      <h3>Floorplan</h3>
      <img src={property.floorplan} alt="Floorplan" className="floorplan-image" />

      <h3>Map Location</h3>
      <div className="map-container">
        <MapContainer
          center={[
            property.locationparams.latitude,
            property.locationparams.longitude,
          ]}
          zoom={15}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[
              property.locationparams.latitude,
              property.locationparams.longitude,
            ]}
            icon={customIcon}
          >
            <Popup>{property.location}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
