import { useState } from "react";

export interface coords {
  latitude: number,
  longitude: number
};


const Location = () => {
  const [loc, setLoc] = useState<coords>();
  navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {
    setLoc({latitude: location.coords.latitude, longitude: location.coords.longitude});
  });

  const location = () => {
    if (loc) {
      return `${loc.latitude}, ${loc.longitude}`;
    } else {
      fetch("http://geolocation-db.com/json/", { method: "GET" })
        .then((loc) => loc.json())
        .then((data) => setLoc({latitude: data.latitude, longitude: data.longitude}));
        setLoc({latitude: 0, longitude: 0});
    }
  };

  location();

  return loc;
};

export default Location;