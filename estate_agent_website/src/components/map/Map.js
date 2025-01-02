import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import leaflet to create custom icons
import properties from '../../components/lib/properties.json';
import pinMap from '../../assets/pinMap.png';
import './map.css';

const Map = () => {
  const locations = properties.properties.map((property) => ({
    name: property.location,
    position: [property.locationparams.latitude, property.locationparams.longitude],
  }));

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: pinMap, // Path to your custom pin image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point for the icon (where the icon's tip will be placed)
    popupAnchor: [0, -32], // Adjust popup position based on the icon size
  });

  return (
    <div className="mapContainer">
      <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={customIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
