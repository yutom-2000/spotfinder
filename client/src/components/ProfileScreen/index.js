import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { API_URL } from "../../consts";
import "../Homescreen/index.css";
import Navbar from "../Navbar";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ProfileById from "./ProfileById";

const ProfileScreen = () => {
  return (
    <div className="container">
      <Navbar active="profile" />
      <div className={"body"} style={{ position: "relative" }}>
        <Routes>
          <Route path={"/:id"} element={<ProfileById/>} />
          <Route path={"/"} element={<Profile/>} />
          <Route path={"/edit"} element={<EditProfile/>} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileScreen;
