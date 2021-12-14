import Navbar from "../Navbar";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../consts";

const Search = (props) => {
  const p = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [spots, setSpots] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const constructQuery = () => {
    let params = new URLSearchParams();
    console.log(type);
    name && params.append("name", name);
    author && params.append("author", author);
    type && (type !== "Any") ? params.append("type", type) : params.delete("type");
    console.log(params.toString());
    return params.toString();
  };
  const getSpots = () => {
    console.log("DOING GET");
    fetch(`${API_URL}/spots/query?` + p.toString(), {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((spots) => setSpots(spots));
  };

  useEffect(getSpots, [navigate]);

  return (
    <div>
      <Navbar active={"search"} />

      <div className="container body">
        <div className="rounded container bg-light">
          <h1>Search</h1>
          <hr />
          <ul className="list-group pt-2 pb-3">
            <li className="list-group-item">
              <div className="row">
                <div className="col-6 border-end">
                  <div className="row">
                    <div className="col-10">
                      <input
                        className="form-control"
                        placeholder="Search for Spot Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-2">
                      <div className="float-end">
                        <a href={`/search?` + constructQuery()}>
                          <button className="btn btn-primary">Search</button>
                        </a>
                        {/* <button onClick={(e) => constructQuery()}>click</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <select 
                  onChange={(e) => setType(e.target.value)}
                  className="form-select" name={"type"} id={"type"}>
                    <option>Any</option>
                    <option value={"food"}>Food</option>
                    <option value={"entertainment"}>Entertainment</option>
                    <option value={"park"}>Park</option>
                  </select>
                </div>
              </div>
              <div className="row">
                  <div className="col pt-2">
                      <label htmlFor="author">Author Id:</label>
                <input
                id={"author"}
                  className="form-control"
                  placeholder="Search for Author ID"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                </div>
              </div>
            </li>
            <SearchResults spots={spots} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
