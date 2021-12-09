import { useNavigate } from "react-router";
import { useState } from "react";
import { API_URL } from "../../consts";
import Navbar from "../Navbar";
import '../Homescreen/index.css';

export interface user {
    username?: string,
    password?: string,
    verifyPassword?: string,
  }

const Login = () => {
  const [user, setUser] = useState<user>({});
  const navigate = useNavigate();
  const [warn, setWarn] = useState(false);
  const login = () => {
    fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    }).then((status) => {
        console.log(user);
        console.log("constring", `${API_URL}/login`);
        console.log("status", status.status);
      if (status.status === 200) {
        setWarn(false);
        navigate("/profile");
      } else {
        setWarn(true);
        setUser({username: user.username, password: ""});
      }
    });
  };
  return (
    <div className="container body">
      <Navbar />
      <h1>Login</h1>
      {warn && (
        <div className="alert alert-danger">Incorrect username or password</div>
      )}
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
      <div className="mt-2">
      <button className="btn btn-primary me-2" onClick={login}>
        Login
      </button>
      <a href="/register">
      <button className="btn btn-primary">
          Register
      </button>
      </a>
      </div>
    </div>
  );
};

export default Login;
