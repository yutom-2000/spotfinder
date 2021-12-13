import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
import Map from "./MapComponent";

const render = (status) => {
  return <h1>{status}</h1>;
};

export const MapWrapper = () => {
  return (
    <Wrapper apiKey={"AIzaSyA6b_YGEvRT3n8q5VGdXzmTbcnJKeqyyMY"} render={render}>
      <MapComponent />
    </Wrapper>
  );
};
