import Navbar from "../Navbar";
import './index.css'
import { uploadImage } from "../ProfileScreen/uploadImage";
import { useState } from "react";

const Homescreen = () => {
    const [user, setUser] = useState({key: "a"});

  //const loc: coords | undefined = location();
  return (
    <div>
      
        <Navbar active={'home'}/>
        <input
                id="profilepicture"
                type={"file"}
                onChange={uploadImage(user, setUser, "profilePicture")}
                accept="image/*"
                placeholder="Username"
                className="mb-2 form-control body"
              />
      <div className='container body'>
      {/* {loc?.latitude}, {loc?.longitude}{" "} */}
      </div>
      
    </div>
  );
};

export default Homescreen;
