import { useState } from "react";
import { userData } from "./Profile";
import { user } from "./Login";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [user, setUser] = useState<user>({} as user);
  const [userData, setUserData] = useState<userData>({} as userData);
  
  return (
    <div>
      <div className={"row"}>
        <div className={"col-9"}>
          <h6 className={"mb-0"}>{`${userData.firstname} ${userData.lastname}`}</h6>
          {`${userData.spots?.length} Spots`}
        </div>
      </div>
      <div className={"position-relative bg-dark"}>
        <img className={"img-fluid"} src={userData.bannerPicture} alt={"..."} />
      </div>
      <div className={"position-relative"}>
        <img
          src={userData.profilePicture}
          className={"rounded-circle position-absolute ms-2"}
          width={"125px"}
          height={"125px"}
          style={{ top: "-62.5px", border: "5px solid black" }}
          alt={"..."}
        />
      </div>
      <div>
        <div className={"row"}>
          {/* <div className={"col-8"}>
                </div> */}
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
        <h5 className={"mb-0"}>{`${userData.firstname} ${userData.lastname}`}</h5>
        {`@${userData.handle} #${userData._id}`}
        <p className={"mb-1 mt-2"}>{userData.bio}</p>
        <span>
          <i className={"fas fa-globe"} />
          Birthday: {userData.birthday} &nbsp;&nbsp;&nbsp;
          <i className={"fas fa-calendar"} />
          Join Date: {userData.joindate}
        </span>
      </div>
      <div>
        <span className={""}>
          <span className={""}>{userData.following?.length}</span> Following
          &nbsp;&nbsp;
          <span>{userData.followers?.length}</span> Followers
        </span>
      </div>
    </div>
  );
};

export default EditProfile;
