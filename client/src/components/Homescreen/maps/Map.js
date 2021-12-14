import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { API_URL, GOOGLE_API_KEY } from "../../../consts";
import Spot from "./Spot";

const Map = (coords, setLoc) => {
  console.log(coords);
  const [spots, setSpots] = useState([]);
  const getSpots = () => {
      fetch(`${API_URL}/spots`, {
          method: "GET",
          credentials: "include",
      }).then((res) => res.json()).then((spots) => setSpots(spots));
  }
  useEffect(getSpots, [coords]);
  return (
        <div style={{ height: "85vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            key={GOOGLE_API_KEY}
            center={coords}
            defaultZoom={13}
            onChange={(e) => {console.log("change", e.center)
        setLoc(e.center)}}
          >
            <div
              className="rounded bg-danger"
              style={{ height: "10px", width: "10px" }}
            >
              .
            </div>
            <button lat={42} lng={-71}>
              hello
            </button>
            {spots.map((spot) => {
            return <Spot lat={spot.coords[0]} lng={spot.coords[1]} spot={spot} />})}
          </GoogleMapReact>
        </div>
  );
};

export default Map;
