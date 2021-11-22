import React from "react";
import logo from "./logo.svg";
import "./vendors/css/bootstrap.min.css";
import Homescreen from "./components/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="root" className="container">
        <Routes>
          <Route path={"/"} element={<Homescreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
