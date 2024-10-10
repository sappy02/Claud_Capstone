import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/bookingWidget";
import PlaceGallery from "../components/placeGallery";
import AddressLink from "../components/addressLink";

function PlaceP() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`)
      .then(response => {
        setPlace(response.data);
      });
  }, [id]);

  if (!place) return '';

  return (
    <div className="flex justify-center bg-gray-100 -mb-8 my-8 pt-8 mt-2 border-t-2 w-full">
      <div className="max-w-5xl px-8">
        <h1 className="text-3xl">{place.title}</h1>
        <AddressLink place={place} className={""} />
        <PlaceGallery place={place} />
        <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">Description</h2>
              {place.description}
            </div>
            <b>Check-in:</b> {place.checkIn}<br />
            <b>Check-Out:</b> {place.checkOut}<br />
            <b>Max number of guests:</b> {place.maxGuests}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
        </div>
      </div>
    </div>
  );
}

export default PlaceP;