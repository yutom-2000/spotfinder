import { Link } from "react-router-dom";
import { API_URL } from "../../consts";
import { useNavigate } from "react-router";

const EditProfile = (user) => {
  const navigate = useNavigate();
  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    }).then((res) => navigate("/"));
  };
  return (
    <div className="container bg-light pt-1 pb-2 rounded">
      <div className={"row"}>
        <div className={"col-9"}>
          <h6 className={"mb-0"}>{`${user.firstName} ${user.lastName}`}</h6>
          {`${user.spotCount} Spots`}
        </div>
        <div className="col-3">
          <button
            className="rounded-pill float-end alert alert-danger pt-1 pb-1"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className={"position-relative bg-dark"}>
        <img className={"img-fluid"} src={user.bannerPicture} alt={"..."} />
      </div>
      <div className={"position-relative"}>
        <img
          src={user.profilePicture}
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
            <Link to={"/profile/edit"}>
              <button
                className={"mt-3 me-0 rounded-pill pt-1 pb-1 ps-2 pe-2 mb-3"}
                style={{
                  background: "black",
                  border: "1px solid white",
                  color: "white",
                }}
              >
                Edit profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h5 className={"mb-0"}>{`${user.firstName} ${user.lastName}`}</h5>
        {`@${user.handle} #${user._id}`}
        <p className={"mb-1 mt-2"}>{user.bio}</p>
        <span>
          <i className={"fas fa-globe"} />
          Birthday: {user.dateOfBirth} &nbsp;&nbsp;&nbsp;
          <i className={"fas fa-calendar"} />
          Join Date: {user.dateJoined}
        </span>
      </div>
      <div>
        <span className={""}>
          <span className={""}>{user.followingCount}</span> Following
          &nbsp;&nbsp;
          <span>{user.followersCount}</span> Followers
        </span>
      </div>
    </div>
  );
};

export default EditProfile;
