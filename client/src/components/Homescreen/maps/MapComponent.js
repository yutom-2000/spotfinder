import { GoogleApiWrapper, Map } from "google-maps-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL, DEFAULT_POSITION } from "../../../consts";

const onMapClick = (e, a, p) => {
  console.log(e);
  console.log(a);
  console.log(p.latLng.lat());
  console.log(p.latLng.lng());
};

// export class Container extends React.Component {
//     render() {
//       if (!this.props.loaded) {
//         return <div>Loading...</div>
//       }
//       if (navigator && navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition((pos) => {
//               const coords = pos.coords;
//           })
//       }
//       return (
//         <div><Map
//         onClick={onMapClick}
//         google={this.props.google}
//         initialCenter={{lat: 42, lng: -71}}/></div>
//       )
//     }
//   }

const Container = (props) => {
    const [center, setCenter] = useState(DEFAULT_POSITION);
    const [places, setPlaces] = useState()
    const navigate = useNavigate();
    const getPlaces = () => {
        fetch(`${API_URL}/places`, {
            method: "GET",
            credentials: "include"
        }).then((res) => res.json()).then((places) => setPlaces(places));
    }
    const getCenter = () => {
        navigator.geolocation.getCurrentPosition((loc) => {
            console.log(loc);
            console.log("stuff", loc.coords.longitude);
            setCenter({lng: loc.coords.longitude, lat: loc.coords.latitude});
        });
    }
useEffect(getPlaces, [navigate]);
useEffect(getCenter, [])
  if (!props.loaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Map
        onClick={onMapClick}
        google={props.google}
        initialCenter={center}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA6b_YGEvRT3n8q5VGdXzmTbcnJKeqyyMY",
})(Container);
