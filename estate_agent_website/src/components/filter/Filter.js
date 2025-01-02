// Fetching the JSON data
fetch('./properties.json')  // Adjust the path to your JSON file
  .then(response => response.json())
  .then(properties => {
    // Filter function
    function filterProperties({ type, priceRange, minBedrooms }) {
      return properties.filter(property => {
        const isTypeMatch = type ? property.type === type : true;
        const isPriceInRange = priceRange
          ? property.price >= priceRange.min && property.price <= priceRange.max
          : true;
        const isBedroomMatch = minBedrooms ? property.bedrooms >= minBedrooms : true;

        return isTypeMatch && isPriceInRange && isBedroomMatch;
      });
    }

    // Example usage
    const filters = {
      type: 'House',
      priceRange: { min: 150000000, max: 300000000 },
      minBedrooms: 2
    };

    const filteredProperties = filterProperties(filters);
    console.log(filteredProperties);
  })
  .catch(error => console.error('Error loading properties:', error));
