import Navbar from "../Navbar";
import { API_URL } from "../../consts";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import SpotListing from "./SpotListing";

const BookMarked = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const getProfile = () => {
        fetch(`${API_URL}/profile/saved`, {
          method: "GET",
          credentials: "include",
        })
          .then((res) => {
            return res.json();
          })
          .then((user) => {
            setUser(user);
          })
          .catch((e) => {
            console.log(e);  
            navigate("/login")});
      };
      useEffect(getProfile, [navigate]);
    return <div>
    <Navbar active={""} />
    <div className="container body ">
        <div className="bg-light p-2 border border-1 rounded">
      <h1>Bookmarked Spots</h1>
      <ul className="list-group">
          {user && user.spots.map((spot) => SpotListing(spot))}
      </ul>
      </div>
    </div>
  </div>
}

export default BookMarked;