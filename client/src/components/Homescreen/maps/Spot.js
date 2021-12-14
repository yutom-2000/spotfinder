import { useNavigate } from "react-router";

const Spot = (props) => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`/spots/${props.spot && props.spot._id}`);
  };
  const getClassName = () => {
    switch (props.spot && props.spot.type) {
      case "food":
        return "btn btn-info btn-sm";
      case "entertainment":
        return "btn btn-warning btn-sm";
        case "park":
            return "btn btn-success btn-sm";
    }
  };
  return (
    <button className={getClassName()} onClick={goToDetails}>
      {props.spot.name}
    </button>
  );

  // <a href={`/spots/${props.spot && props.spot._id}`}>
  //     <h6 className="rounded">{props.spot.name}</h6>
  // </a>
};

export default Spot;
