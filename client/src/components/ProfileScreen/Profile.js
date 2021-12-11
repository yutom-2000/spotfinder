import { Link } from "react-router-dom";
import { API_URL } from "../../consts";
import { useNavigate } from "react-router";

const Profile = (user) => {
  const navigate = useNavigate();
  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    }).then((res) => navigate("/"));
  };
  console.log(user.followers);
  return (
    <div className="container bg-light pt-1 pb-2 rounded">
      <div className={"row"}>
        <div className={"col-9"}>
          <h6 className={"mb-0"}>{`${user.firstName} ${user.lastName}`}</h6>
          {`${user.spots ? user.spots.length : 0} Spots`}
        </div>
        <div className="col-3">
          <button
            className="rounded-pill float-end alert alert-danger mt-1 pt-1 pb-1"
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
              <span className="float-end">
            <Link  to={"/profile/edit"}>
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
            </span>
          </div>
        </div>
      </div>
      <div>
        <h5 className={"mb-0"}>{`${user.firstName} ${user.lastName}`}</h5>
        {`#${user._id}`}
        <p className={"mb-1 mt-2"}>{user.bio}</p>
        <span>
          <i className={"fas fa-globe"} />
          Birthday: {String(user.birthday).substring(0, 10)} &nbsp;&nbsp;&nbsp;
          <i className={"fas fa-calendar"} />
          Join Date: {String(user.joinDate).substring(0, 10)}
        </span>
      </div>
      <div>
        <span className={""}>
          <span className={""}>{user.following? user.following.length : 0}</span> Following
          &nbsp;&nbsp;
          <span>{user.followers ? user.followers.length : 0}</span> Followers
        </span>
      </div>
    </div>
  );

  // return(<div>
  //     <div className={"row"}>

  //     </div>
  // </div>)
};

export default Profile;
