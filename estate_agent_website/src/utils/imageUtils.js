// First, let's create an image import utility (src/utils/imageUtils.js)
export const getImagePath = (imagePath) => {
    try {
      // Remove leading './' or '/' if present
      const cleanPath = imagePath.replace(/^\.?\//, '');
      // Use require to get the correct path
      return require(`../assets/${cleanPath}`).default;
    } catch (error) {
      // Return a placeholder image if the image cannot be found
      return '/api/placeholder/400/300';
    }
  };
  