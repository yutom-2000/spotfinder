import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../consts";
import Navbar from "../Navbar";
import { user } from "./Login";
import '../Homescreen/index.css';

const Register = () => {
  const [user, setUser] = useState({});
  const [warn, setWarn] = useState(false);
  const navigate = useNavigate();
  const register = () => {
    if (user.password !== user.verifyPassword) {
      setWarn(true);
    } else {
        console.log(`{${API_URL}/register}`);
      fetch(`${API_URL}/register`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      }).then((status) => {
        if (status.status === 200) {
          setWarn(false);
          navigate("/profile");
        }
        setWarn(true);
      });
    }
  };
  return (
    <div className="container body">
      <h1>Register</h1>
      {warn && <div className="alert alert-danger">Registration unsuccessful. Check that password and verify password are the same </div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="password"
        className="form-control"
      />
      <input
        onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
        placeholder="verify password"
        type="password"
        className="form-control"
      />
      <div className="mt-2">
      <button className="btn btn-primary" onClick={register}>
        Register
      </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Register;
