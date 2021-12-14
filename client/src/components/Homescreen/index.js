import Navbar from "../Navbar";
import "./index.css";
import { useState } from "react";
import Map from "./maps/Map";
import { useNavigate } from "react-router";
import { API_URL } from "../../consts";
import { useEffect } from "react";
import CreateSpot from "./CreateSpot";

const Homescreen = () => {
  const [user, setUser] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUser(user);
      })
      .catch((e) => setUser(undefined));
  };
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    const [lat, lng] = [position.coords.latitude, position.coords.longitude];

    setLocation([lat, lng]);
  });
  useEffect(getProfile, [navigate]);

  //const loc: coords | undefined = location();
  console.log(location);
  return (
    <div>
      <Navbar active={"home"} />

      <div className="container body">
        <div className="row">
          <div className="col-8">{Map(location, setLocation)}</div>
          <div className="col-4"><CreateSpot coords={location} active={user ? true : false}/></div>
        </div>

      </div>
    </div>
  );
};

export default Homescreen;
