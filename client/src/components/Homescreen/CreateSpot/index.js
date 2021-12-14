import { userInfo } from "os";
import { useState } from "react";
import { API_URL } from "../../../consts";
import { uploadImage } from "../../ProfileScreen/uploadImage";

const CreateSpot = (props) => {
  console.log("create spot", props.coords);
  const [spot, setSpot] = useState();
  console.log(spot);
  const [warn, setWarn] = useState(false);
  const uploadSpotPicture = uploadImage(spot, setSpot, "image");
  const registerSpot = () => {
    if (spot && spot.name && spot.description && spot.type && props.coords) {
        const b = {...spot, coords: [props.coords.lat, props.coords.lng]};
        console.log(b);
          fetch(`${API_URL}/spots`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(b),
            headers: {
                "content-type": "application/json",
              },
          }).then((status) => setSpot({}));
    setWarn(false);
    } else {
      setWarn(true);
    }
  };
  return (
    <>
      <div className="container bg-light rounded border border-1">
        <h1 className="">Register spot</h1>
        <hr />
        <div className="row">
          <div>
            <label for="placename">Place Name</label>
            <input
              id="placename"
              className="mb-2 form-control"
              placeholder="Place Name"
              value={spot && spot.name ? spot.name : ""}
              onChange={(e) => setSpot({ ...spot, name: e.target.value })}
              disabled={!props.active}
            ></input>
            <label for="desc">Description</label>
            <textarea
            disabled={!props.active}
              rows={5}
              id="desc"
              className="form-control"
              type={"text"}
              placeholder="Description"
              value={spot && spot.description ? spot.description : ""}
              onChange={(e) => setSpot({ ...spot, description: e.target.value })}
            ></textarea>
            <label for="spotPicture">Picture</label>
            <input
            disabled={!props.active}
                id="spotPicture"
                type={"file"}
                onChange={uploadSpotPicture}
                accept="image/*"
                className="mb-2 form-control"
              />
            <div className="row mb-1">
              <div
                className="col"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSpot({ ...spot, type: e.target.value });
                }}
              >
                <div>
                  <input
                  disabled={!props.active}
                    className="form-check-input"
                    id={"food"}
                    type={"radio"}
                    name="type"
                    value={"food"}
                    checked={spot && spot.type==="food" ? true : false}
                  ></input>
                  <label for="food">Food</label>
                </div>
                <div>
                  <input
                  disabled={!props.active}
                    className="form-check-input"
                    id={"entertainment"}
                    type={"radio"}
                    name="type"
                    value={"entertainment"}
                    checked={spot && spot.type==="entertainment" ? true : false}
                  ></input>
                  <label for="entertainment">Leisure</label>
                </div>
                <div>
                  <input
                  disabled={!props.active}
                    className="form-check-input"
                    id={"park"}
                    type={"radio"}
                    name="type"
                    value={"park"}
                    checked={spot && spot.type==="park" ? true : false}
                  ></input>
                  <label for="park">Park</label>
                </div>
              </div>
              <div className="col">
                <button disabled={!props.active} onClick={registerSpot} className="mt-4 btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-none ms-1 me-1 mt-3">
          {warn ?
            <p className="bg-danger text-white p-1">Ensure all fields are not empty</p> : ""}
        {props.active ? (
          <p>Drag the red dot over the spot you wish to add</p>
        ) : (
          <p className="bg-danger text-white ps-1 pe-1 pt-1 pb-1 rounded">
            Please log in to register a spot!
          </p>
        )}
      </div>
    </>
  );
};

export default CreateSpot;
