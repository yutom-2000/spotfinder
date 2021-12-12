import { useParams } from "react-router";

const ProfileById = () => {
    const params = useParams().id;
    return <div>abc {params}</div>
}

export default ProfileById;