import React, { useState } from 'react';

const PropertyCard = ({ 
  id,
  image,
  price,
  bedrooms = 0,
  bathrooms = 0,
  address,
  title,
  onFavoriteToggle 
}) => {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleFavoriteClick = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onFavoriteToggle(id, newFavoriteStatus);
  };

  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
      <div className="relative h-48 w-full bg-gray-200">
        {imageError ? (
          <div className="flex items-center justify-center h-full w-full bg-gray-100">
            <div className="text-4xl text-gray-400">📷</div>
            <span className="text-sm text-gray-500">Image not available</span>
          </div>
        ) : (
          <img
            src={image.startsWith('/') ? image : `/${image}`}
            alt={title}
            onError={handleImageError}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        <p className="text-gray-600 mb-2 truncate">{address}</p>
        <p className="text-gray-800 font-bold mb-4">
          {price.toLocaleString()} LKR
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>🛏️ {bedrooms} Bed{bedrooms !== 1 ? 's' : ''}</span>
          <span>🚿 {bathrooms} Bath{bathrooms !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button 
            onClick={() => window.location.href = `/property/${id}`}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`px-4 py-2 rounded border transition-colors ${
              isFavorite 
                ? 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200' 
                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;