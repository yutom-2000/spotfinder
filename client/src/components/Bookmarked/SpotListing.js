const SpotListing = (spot) => {
  console.log(spot);
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
            <a href={`/spots/${spot._id}`}><h4>{spot.name}</h4></a>
            <p>{spot.description}</p>
        </div>
      </div>
    </li>
  );
};

export default SpotListing;
