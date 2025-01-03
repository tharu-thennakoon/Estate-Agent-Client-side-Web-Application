import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const handleFavoriteToggle = (id, isFavorite) => {
    // Your favorite handling logic
    console.log(`Property ${id} is ${isFavorite ? 'favorited' : 'unfavorited'}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          id={property.id}
          image={property.picture}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.attached_bathroom ? 1 : 0}
          address={property.location}
          title={property.description}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};