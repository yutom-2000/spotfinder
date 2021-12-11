import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { API_URL } from "../../consts";
import "../Homescreen/index.css";
import Navbar from "../Navbar";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const ProfileScreen = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
          return res.json()})
      .then((user) => {
          console.log("index", user);
        setUser(user);
      })
      .catch((e) => navigate("/login"));
  };
  useEffect(getProfile, [navigate]);
  return (
    <div className="container">
      <Navbar active="profile" />

      <div className={"body"} style={{ position: "relative" }}>
        <Routes>
          <Route path={"/"} element={Profile(user)} />
          <Route path={"/edit"} element={EditProfile(user)}/>
        </Routes>
      </div>
    </div>
  );
};

export default ProfileScreen;
