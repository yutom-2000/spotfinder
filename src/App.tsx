import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import Homescreen from "./components/Homescreen";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Routes>
          <Route path={"/"} element={<Homescreen />} />
          <Route path={"/profile"} element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
