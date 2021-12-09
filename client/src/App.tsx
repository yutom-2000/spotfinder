import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import Homescreen from "./components/Homescreen";
import Profile from "./components/ProfileScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/ProfileScreen/Login";
import Register from "./components/ProfileScreen/Register";

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Routes>
          <Route path={"/"} element={<Homescreen />} />
          <Route path={"/profile"} element={<Profile />}/>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
