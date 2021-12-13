const CreateSpot = () => {
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
            ></input>
            <label for="desc">Description</label>
            <textarea
              rows={5}
              id="desc"
              className="form-control"
              type={"text"}
              placeholder="Description"
            ></textarea>
            <div className="row mb-1">
              <div className="col">
                <div>
                  <input
                    className="form-check-input"
                    id={"food"}
                    type={"checkbox"}
                  ></input>
                  <label for="food">Food</label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    id={"entertainment"}
                    type={"checkbox"}
                  ></input>
                  <label for="entertainment">Leisure</label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    id={"park"}
                    type={"checkbox"}
                  ></input>
                  <label for="park">Park</label>
                </div>
              </div>
              <div className="col">
                <button className="mt-4 btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-none ms-1 me-1 mt-3">
          <p>
              Drag the red dot over the spot you wish to add
          </p>
      </div>
    </>
  );
};

export default CreateSpot;
