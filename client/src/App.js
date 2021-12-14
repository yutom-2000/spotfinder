import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import Homescreen from "./components/Homescreen";
import Profile from "./components/ProfileScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Spots from "./components/Spots";
import BookMarked from "./components/Bookmarked";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div id="root" style={{height: "100vh", background: "LightGray", overflow: "auto"}}>
        <Routes>
          <Route path={"/"} element={<Homescreen />} />
          <Route path={"/profile/*"} element={<Profile />}/>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />}/>
          <Route path={"/spots/*"} element={<Spots />}/>
          <Route path={"profile/saved"} element={<BookMarked/>}/>
          <Route path={"/error"} element={<Error error={"User not found"}/>} />
          <Route path={"*"} element={<div>Not Found</div>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
