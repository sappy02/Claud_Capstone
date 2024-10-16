import PropTypes from 'prop-types';
import { PlacesP } from "../pages/PlacesP";

export default function AddressLink({ place, className }) {
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

