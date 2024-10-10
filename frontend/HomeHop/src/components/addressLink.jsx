import PropTypes from 'prop-types';
import { Place } from "../pages/Places";

function AddressLink({ place, className }) {
  return (
    <div className={className}>
      {/* Render the address link here */}
      {place.address}
    </div>
  );
}

AddressLink.propTypes = {
  place: PropTypes.shape({
    address: PropTypes.string.isRequired,
    // Add other properties of Place if needed
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default AddressLink;