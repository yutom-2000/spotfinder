import { FC } from "react";
import location, { coords } from "../Location";
import Navbar from "../Navbar";
import './index.css'

const Homescreen = () => {
  //const loc: coords | undefined = location();
  return (
    <div>
      
        <Navbar active={'home'}/>
      
      <div className='container body'>
      {/* {loc?.latitude}, {loc?.longitude}{" "} */}
      </div>
      
    </div>
  );
};

export default Homescreen;
