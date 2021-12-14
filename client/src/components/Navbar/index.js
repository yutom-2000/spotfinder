import { useEffect, useState } from "react";
import { API_URL } from "../../consts";
import { useNavigate } from "react-router";

const Navbar = ({ active }) => {
  const [user, setUser] = useState({});
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
          return res.json()})
      .then((user) => {
        setUser(user);
      })
      .catch((e) =>  {
      setUser(undefined)});
  };
  useEffect(getProfile, []);
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand" href="/">
          Spotfinder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={"nav-link " + (active === "home" ? "active" : "")}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "nav-link " + (active === "advanced" ? "active" : "")
                }
                href="/search"
              >
                Advanced Search
              </a>
            </li>
            <li className="nav-item">
              <a href="/profile/saved" className={`nav-link ${user ? "" : "disabled"}`}>
                Saved
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Quick Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <a href="/profile" className="ms-2 me-2 ">
            <img
              className="rounded-circle wd-avatar-image"
              src={user ? user.profilePicture : "/images/profile/guest.png"}
              alt={"..."}
              width="40px"
              height="40px"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
