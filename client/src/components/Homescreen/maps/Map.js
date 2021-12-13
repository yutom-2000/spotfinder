import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../consts";

const Map = (coords, setLoc) => {
  console.log(coords);
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
            <button lat={42} lng={-71} center={[42, -71]}>
              hello
            </button>
          </GoogleMapReact>
        </div>
  );
};

export default Map;
