import { useState } from "react";
import { API_URL, IMGUR_API_UPLOAD } from "../../consts";
import { useNavigate } from "react-router";
import { uploadImage } from "./uploadImage";

const EditProfile = (user, setUser) => {
  const [warn, setWarn] = useState(false);
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState();
  const [img, setimg] = useState();
  const uploadProfilePicture = uploadImage(user, setUser, "profilePicture");
  const uploadBannerPicture = uploadImage(user, setUser, "bannerPicture");
  const save = () => {
    console.log(user);
    console.log(confirm);
    if (
      !user.password ||
      user.password !== confirm ||
      user.role === undefined
    ) {
      setWarn(true);
    } else {
      user.joinDate = new Date();
      fetch(`${API_URL}/users`, {
        method: "PUT",
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
        console.log("this one?");
        setWarn(true);
      });
    }
  };
  console.log(user.birthday);
  return (
    <div className="container">
      <div
        className="container container-sm pt-1 pb-2 rounded bg-light"
        style={{ maxWidth: "700px" }}
      >
        <h1 className="mb-4">Edit Profile</h1>
        {warn && (
          <div className="alert alert-danger container container-sm">
            Invalid edits
          </div>
        )}
        <form>
          <label for="username">Username:</label>
          <input
            id="username"
            value={user.username}
            readOnly
            placeholder="Username"
            className="mb-2 form-control disabled"
          />
          <div className="form-group row pb-3">
            <label className="col-2" for="firstname">
              First name:
            </label>
            <input
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              placeholder="First name"
              className="col-4 rounded border border-1"
              id="firstname"
            />
            <label className="col-2" for="lastname">
              Last name:
            </label>
            <input
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              placeholder="Last name"
              className="col-4 rounded border border-1"
              id="lastname"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1">
              Birthday
            </span>
            <input
              value={String(user.birthday).substring(0, 10)}
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              type="date"
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="col">
              <label for="password">Password:</label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                type="text"
                className="mb-2 form-control"
                id="password"
              />
            </div>
            <div className="col">
              <label for="confirmpassword">Confirm password:</label>
              <input
                onChange={(e) => setConfirm(e.target.value)}
                value={confirm}
                placeholder="Verify password"
                type="text"
                className="form-control"
                id="confirmpassword"
              />
            </div>
          </div>
          <div className="row">
            <div className="col border border-1 rounded">
              <label for="profilepicture">Upload Profile Picture:</label>
              <input
                id="profilepicture"
                type={"file"}
                onChange={uploadProfilePicture}
                accept="image/*"
                className="mb-2 form-control"
              />
              <img className="pb-1" src={user.profilePicture} style={{"max-width": "100%", "max-height": "100%"}}/>
            </div>
            <div className="col border border-1 rounded">
              <label for="bannerpicture">Upload Banner Picture:</label>
              <input
                id="bannerpicture"
                type={"file"}
                onChange={uploadBannerPicture}
                accept="image/*"
                className="mb-2 form-control"
              />
              <img className="pb-1" src={user.bannerPicture} style={{"max-width": "100%", "max-height": "100%"}}/>
            </div>
          </div>

          <div className="form-group float-end mt-4">
            <button className="btn btn-primary bg-danger ps-2 pe-2">
              Discard changes
            </button>
          </div>
          <div className="mt-4">
            <div className="form-group">
              <input
                onClick={(e) => {
                  e.preventDefault();
                  save();
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

export default EditProfile;
