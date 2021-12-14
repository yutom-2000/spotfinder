import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../consts";
import { useEffect, useState } from "react";
import CommentList from "../CommentList";

const Details = () => {
  const { spotId } = useParams();
  const [spot, setSpot] = useState();
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  const deleteSpot = () => {
      fetch(`${API_URL}/spots/spotId`, {
          method: "DELETE",
          credentials: "include",
      }).then((res) => {
          navigate("/")
      });
  }
  const bookmarkSpot = () => {
      fetch(`${API_URL}/profile/saveSpot/${spotId}`, {
          method: "PUT",
          credentials: "include",
      }).then((res) => res.json()).then((profile) => setProfile(profile)).then((_) => navigate("/profile/saved"))
  };
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((profile) => {
        setProfile(profile);
      })
      .catch((e) => setProfile(undefined));
  };
  const getSpot = () => {
    fetch(`${API_URL}/spots/${spotId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((spot) => {
        console.log(spot);
        setSpot({...spot, type: spot.type[0].toUpperCase() + spot.type.substring(1)});
      });
  };
  const init = () => {
    getProfile();
    getSpot();
    console.log(profile);
  };
  console.log(spot);
  useEffect(init, []);
  return (<>
    <div className="p-3 bg-light rounded position-relative"> 
     <h2 className="text-success">{`${spot && spot.type}`}</h2>
      
      <div className="row mt-3">
          <div className="col-8">
              <img className="border border-2 p-1 rounded" src={spot && spot.image} style={{"width": "100%", "height": "100%"}}>
              </img>
          </div>
          <div className="col-4">
          <h1>{`${spot && spot.name}`}</h1>
              <hr/>
              <h3>Description</h3>
              <p>
              {`${spot && spot.description ? spot.description : "No Description"}`}
              </p>
          </div>
      </div>
      <span className=" position-absolute mb-3 me-3" style={{bottom: "0px", right: "0px"}}>
          {profile && profile.role==="ADMIN" ? <button onClick={deleteSpot} className="btn btn-danger me-2">Delete spot</button> : <></>}
      <button onClick={bookmarkSpot} className={`btn btn-primary ${profile ? "" : "disabled"}`}>
          Bookmark
      </button>
      </span>
    </div>
    <div>
    <CommentList spotId={spotId}/>
</div>
</>
  );
};

export default Details;
