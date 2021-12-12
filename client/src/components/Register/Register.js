import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../consts";
import Navbar from "../Navbar";
import "../Homescreen/index.css";

const Register = () => {
  const [user, setUser] = useState({});
  const [warn, setWarn] = useState(false);
  const navigate = useNavigate();

  const register = () => {
      console.log(user);
    if (!user.password || user.password !== user.verifyPassword || user.role === undefined) {
      setWarn(true);
    } else {
      user.joinDate = new Date();
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
    <div className="container">
      <Navbar />
      <div
        className="container container-sm body pt-1 pb-3 rounded bg-light"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="mb-4">Register</h1>
        {warn && (
          <div className="alert alert-danger mb-4 mt-4">
            Registration unsuccessful.
          </div>
        )}
        <form>
          <input
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            placeholder="First name"
            className="mb-2 form-control"
          />
          <input
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            placeholder="Last name"
            className="mb-2 form-control"
          />
          <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1">
              Birthday
            </span>
            <input
              value={user.birthday}
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              type="date"
              className="form-control"
            />
          </div>
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="mb-2 form-control"
          />
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            type="password"
            className="mb-2 form-control"
          />
          <input
            onChange={(e) =>
              setUser({ ...user, verifyPassword: e.target.value })
            }
            placeholder="Verify password"
            type="password"
            className="form-control"
          />
          <div className="form-group float-end mt-4">
            <select
              class="form-select w-auto"
              aria-label="Default select example"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option selected>Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>
          <div className="mt-4">
            <div className="form-group">
              <input
                onClick={(e) => {
                  e.preventDefault();
                  register();
                }}
                value="Submit"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
