import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesP";
import AccountNav from "../AccountNav";

function Profile() {
  const { user, setUser, ready } = useContext(UserContext);
  const navigate = useNavigate();

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "Loading...";
  }

  async function logout() {
    try {
      await axios.post("/logout");
      navigate("/");
      setUser(null); // Changed to null as undefined might not be expected in all contexts
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && (
        <PlacesPage />
      )}
    </div>
  );
}

export default Profile;