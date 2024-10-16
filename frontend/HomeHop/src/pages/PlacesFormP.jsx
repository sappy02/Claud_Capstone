import { useEffect, useState } from "react";
import Perks from "../components/perks";
import PhotosUploader from "../components/photosUploader";
import axios from "axios";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";

function PlacesFormP() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };

    if (id) {
      await axios.put("/places", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        <PreInput header="Title" description="Title for you place. Should be short and catchy as in advertisement" />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title, for example: My lovely apt"
        />
        <PreInput header="Address" description="Address of this place" />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        <PreInput header="Photos" description="Photos of this place" />
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <PreInput header="Description" description="Description of this place" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <PreInput header="Perks" description="Select all the perks of your place" />
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        <PreInput header="Extra info" description="House rules, etc" />
        <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />
        <PreInput header="Check in&out times" description="Add check in and out times, remember to have some time for cleaning the room between guests" />
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="14"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="11"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Prices per night</h3>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div>
          <button className="primary my-4">Save</button>
        </div>
      </form>
    </div>
  );
}

function PreInput({ header, description }) {
  return (
    <>
      <h2 className="text-2xl mt-4">{header}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </>
  );
}

export default PlacesFormP;