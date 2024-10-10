import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { UserContextProvider } from './contexts/UserContext';

// page components
import IndexP from './pages/IndexP';
import LoginP from './pages/LoginP';
import RegisterP from './pages/RegisterP';
import ProfileP from './pages/ProfileP';
import PlacesP from './pages/PlacesP';
import PlacesFormP from './pages/PlacesFormP';
import PlaceP from './pages/PlaceP';
import BookingsP from './pages/BookingsP';
import BookingP from './pages/BookingP';

// layout component
import Layout from './containers/Layout';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexP />} />
          <Route path="/login" element={<LoginP />} />
          <Route path="/register" element={<RegisterP />} />
          <Route path="/account" element={<ProfileP />} />
          <Route path="/account/places" element={<PlacesP />} />
          <Route path="/account/places/new" element={<PlacesFormP />} />
          <Route path="/account/places/:id" element={<PlacesFormP />} />
          <Route path="/place/:id" element={<PlaceP />} />
          <Route path="/account/bookings" element={<BookingsP />} />
          <Route path="/account/bookings/:id" element={<BookingP />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;