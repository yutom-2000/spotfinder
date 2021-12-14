const SpotListing = (spot) => {
  console.log(spot);
  const getType = () => {
    switch (spot.type) {
      case "entertainment":
        return <h4 className="text-warning">Entertainment</h4>;
      case "park":
        return <h4 className="text-success">Park</h4>;
      case "food":
        return <h4 className="text-info">Food</h4>;
      default:
        return "Unknown";
    }
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 border-end border-3">
          <img
            src={spot.image}
            style={{ "max-height": "100%", "max-width": "100%" }}
          ></img>
        </div>
        <div className="col">
          {getType()}
          <a href={`/spots/${spot._id}`}>
            <h4>{spot.name}</h4>
          </a>
          <p>{spot.description}</p>
        </div>
      </div>
    </li>
  );
};

export default SpotListing;
