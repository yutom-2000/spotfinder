import React from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../consts";
import CreateSpot from "../CreateSpot";

const Map = (coords, isLogIn) => {
  console.log(coords);
  const onClick = ({ x, y, lat, lng, event }) =>
    console.log(x, y, lat, lng, event);
  return (
    <div className="row">
      <div className="col-8">
        <div style={{ height: "85vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            key={GOOGLE_API_KEY}
            center={coords}
            defaultZoom={13}
            onChange={(e) => console.log("change", e.center)}
          >
            <div
              className="rounded bg-danger"
              style={{ height: "10px", width: "10px" }}
            >
              .
            </div>
            <button lat={42} lng={-71} center={[42, -71]}>
              hello
            </button>
          </GoogleMapReact>
        </div>
      </div>
      <div className="col">
        {isLogIn ? <CreateSpot/> : "no"}
      </div>
    </div>
  );
};

export default Map;
