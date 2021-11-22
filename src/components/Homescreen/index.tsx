import { SSL_OP_EPHEMERAL_RSA } from "constants";
import React from "react";
import { Form } from "react-bootstrap";

const Homescreen = () => {
  let loc = null;
  navigator.geolocation.getCurrentPosition((location) => {
    loc = location;
    console.log(loc);
  });

  return <Form>{loc}</Form>;
};

export default Homescreen;
