import { Route, Routes } from "react-router";
import Details from "./Details";
import Navbar from "../Navbar";

const Spots = () => {
    return (
        <div>
          <Navbar active={""} />
          <div className="container body">
            <Routes>
                <Route path="/:spotId" element={<Details />} />
            </Routes>
    
          </div>
        </div>
      );
}

export default Spots;