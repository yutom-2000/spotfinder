import { useNavigate } from "react-router";
import Navbar from "../Navbar";

const Error = (props) => {
    const navigate = useNavigate();
    return <div>
      <Navbar />

      <div className="container body">
        <div className="row">
          <h1>Error: <span className="text-danger">{props.error}</span></h1>
          <button onClick={(e) => navigate(-2)}>Go Back to where you were...</button>
        </div>

      </div>
    </div>
}

export default Error;