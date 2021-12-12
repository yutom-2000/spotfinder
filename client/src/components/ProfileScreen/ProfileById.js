import { useParams } from "react-router";

const ProfileById = () => {
    return <div>{useParams().id}</div>
}

export default ProfileById;