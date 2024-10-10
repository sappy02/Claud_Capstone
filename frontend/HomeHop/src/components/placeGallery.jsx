import { useState } from "react";
import PropTypes from 'prop-types';

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        {/* ... rest of your full photo view component ... */}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Your grid layout for thumbnail view */}
      {/* Consider improving accessibility here */}
      {place.photos?.[0] && (
        <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer" src={'http://localhost:4000/uploads/' + place.photos[0]} alt={`First photo of ${place.title}`} />
      )}
      {/* ... other images ... */}
    </div>
  );
};

PlaceGallery.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default PlaceGallery;