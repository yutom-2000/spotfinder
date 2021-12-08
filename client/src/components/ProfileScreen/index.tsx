import { Routes, Route } from "react-router";
import "../Homescreen/index.css"
import Navbar from "../Navbar";
import Profile from "./Profile";

const ProfileScreen = () => {
  return (
    <div className="container">
      <Navbar active="profile" />

      <div
        className={"body"}
        style={{ position: "relative" }}
      >
        <Profile/>
        <Routes>
          <Route path={"/profile/edit"} element={<Profile />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileScreen;
