import Navbar from "../Navbar";
import './index.css'
import { useState } from "react";
import Map from './maps/Map';
import { useNavigate } from "react-router";
import { API_URL } from "../../consts";
import { useEffect } from "react";

const Homescreen = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
          method: "POST",
          credentials: "include",
        })
          .then((res) => {
            return res.json();
          })
          .then((user) => {
            setUser(user);
          })
          .catch((e) => setUser(undefined));
      };
      useEffect(getProfile, [navigate]);

  //const loc: coords | undefined = location();
  return (
    <div>
      
        <Navbar active={'home'}/>
        
      <div className='container body'>
          
              {user ? Map([42, -71], true) : Map([30, 0], false)}
              
          
      </div>
      
    </div>
  );
};

export default Homescreen;
