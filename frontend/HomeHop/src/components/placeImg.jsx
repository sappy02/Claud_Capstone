import { Place } from "./pages/PlacesPage";

function PlaceImg({ place, index = 0, className = '' }) {
  // Check if there are no photos
  if (!place.photos || place.photos.length === 0) {
    return null; // Return null for no render in React
  }

  // Set default className if none provided - corrected the class names
  if (!className) {
    className = 'w-full h-full aspect-square object-cover';
  }

  return (
    <img 
      className={className} 
      src={`http://localhost:4000/uploads/${place.photos[index]}`} 
      alt={`Photo ${index + 1} of ${place.title || 'the place'}`} 
    />
  );
}

export default PlaceImg;