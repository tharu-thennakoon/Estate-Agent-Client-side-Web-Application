// Function to fetch properties from JSON file
async function fetchProperties() {
    const response = await fetch('./assets/properties.json');
    const data = await response.json();
    return data.properties;
}

// Function to display properties
function displayProperties(properties) {
    const container = document.getElementById('properties-container');
    
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        
        propertyCard.innerHTML = `
            <img src="${property.picture}" alt="${property.type}">
            <h2>${property.type}</h2>
            <div class="price">${formatPrice(property.price)}</div>
            <div class="location">${property.location}</div>
            <div class="details">${property.description}</div>
        `;
        
        container.appendChild(propertyCard);
    });
}

// Format price with currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LKR'
    }).format(price);
}

// Fetch and display properties
fetchProperties()
    .then(properties => displayProperties(properties))
    .catch(error => console.error('Error loading properties:', error));
