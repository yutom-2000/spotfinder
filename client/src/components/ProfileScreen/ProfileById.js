import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../consts";

const ProfileById = () => {
  const userId = useParams().id;
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [user, setUser] = useState();
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((profile) => {
        setProfile(profile);
      })
      .catch((e) => setProfile(undefined));
  };

  const getUser = () => {
    console.log("getting user");
    fetch(`${API_URL}/users/${userId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        console.log("here");
        return res.json();
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        if (user === null) {
            navigate("/error")
        }
      });
  };

  const init = () => {
    getProfile();
    getUser();
    console.log("init");
  };
  useEffect(init, [navigate]);

  const follow = () => {
    fetch(`${API_URL}/users/${userId}/follow`, {
        method: 'POST',
        credentials: "include",
    })
  };

  const deleteProfile = () => {
    console.log("delete");
    if (userId === profile._id) {
      //if logged in to this account, log out first
      fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    }
    fetch(`${API_URL}/users/${userId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((_) => {
      console.log("deleted by API");
      navigate("/");
    });
  };
  return (
    <div className="container bg-light pt-1 pb-2 rounded">
      <div className={"row"}>
        <div className={"col-9"}>
          <h6 className={"mb-0"}>{`${user && user.firstName} ${
            user && user.lastName
          }`}</h6>
          {`${user && user.spots ? user.spots.length : 0} Spots`}
        </div>
        <div className="col-3">
          
            <button
                disabled={! (profile && profile.role === "ADMIN")}
              className={`rounded-pill float-end btn btn-danger mt-1 pt-1 pb-1`}
              onClick={deleteProfile}
            >
              Delete Profile
            </button>
          
        </div>
      </div>
      <div className={"position-relative bg-dark"}>
        <img
          className={"img-fluid"}
          src={user && user.bannerPicture}
          alt={"..."}
        />
      </div>
      <div className={"position-relative"}>
        <img
          src={user && user.profilePicture}
          className={"rounded-circle position-absolute ms-2"}
          width={"125px"}
          height={"125px"}
          style={{ top: "-62.5px", border: "5px solid black" }}
          alt={"..."}
        />
      </div>
      <div>
        <div className={"row"}>
          <div className={"col offset-9 offset-lg-10"}>
            <span className="float-end">
              <button
                disabled={!profile}
                className={
                  "btn btn-primary mt-3 me-0 rounded-pill pt-1 pb-1 ps-2 pe-2 mb-3"
                }
                onClick={follow}
              >
                Follow profile
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <h5 className={"mb-0"}>{`${user && user.firstName} ${
          user && user.lastName
        }`}</h5>
        {`#${user && user._id}`}
        <p className={"mb-1 mt-2"}>{user && user.bio}</p>
        <span>
          <i className={"fas fa-globe"} />
          Birthday:{" "}
          {String(user && user.birthday ? user.birthday : "hidden").substring(
            0,
            10
          )}{" "}
          &nbsp;&nbsp;&nbsp;
          <i className={"fas fa-calendar"} />
          Join Date: {String(user && user.joinDate).substring(0, 10)}
        </span>
      </div>
      <div>
        <span className={""}>
          <span className={""}>
            {user && user.following ? user.following.length : 0}
          </span>{" "}
          Following &nbsp;&nbsp;
          <span>{user && user.followers ? user.followers.length : 0}</span>{" "}
          Followers
        </span>
      </div>
    </div>
  );
};

export default ProfileById;
