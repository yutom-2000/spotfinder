import React, {useEffect} from "react";
import "../reducers/profileData";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const selectProfileData = (state : any) => {
    console.log("state", state);
    return (state.profileData);
}

const Profile = () => {
    const profileData = useSelector(selectProfileData);
    const dispatch = useDispatch();
    //useEffect(() => fetchProfile(dispatch));
    return (
        <div>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className={"fas fa-arrow-left align-bottom pl-2"}/>
                </div>
                <div className={"col"}>
                    <h6 className={"mb-0"}>{`${profileData.firstName} ${profileData.lastName}`}</h6>
                    {`${profileData.spotCount} Spots`}
                </div>
            </div>
            <div className={"position-relative bg-dark"}>
                <img className={"img-fluid"} src={profileData.bannerPicture} alt={"..."}/>
            </div>
            <div className={"position-relative"} >
                <img src={profileData.profilePicture} className={"rounded-circle position-absolute ms-2"}
                     width={"125px"} height={"125px"}
                     style={{top: '-62.5px', border: '5px solid black'}}
                     alt={'...'}
                />

            </div>
            <div>
                <div className={"row"}>
                    {/* <div className={"col-8"}>
                    </div> */}
                    <div className={"col offset-9 offset-lg-10"}>
                        <Link to={"/profile/edit"}>
                            <button className={"mt-3 me-0 rounded-pill pt-1 pb-1 ps-2 pe-2 mb-3"}
                                    style={{background: 'black', border: '1px solid white', color: 'white'}}
                            >
                                Edit profile
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div>
                <h5 className={"mb-0"}>{`${profileData.firstName} ${profileData.lastName}`}</h5>
                {`@${profileData.handle} #${profileData._id}`}
                <p className={"mb-1 mt-2"}>
                    {profileData.bio}
                </p>
                <span>
                    <i className={"fas fa-map-marker-alt"}/>Location: {profileData.location} &nbsp;&nbsp;&nbsp;
                    <i className={"fas fa-globe"}/>Birthday: {profileData.dateOfBirth} &nbsp;&nbsp;&nbsp;
                    <i className={"fas fa-calendar"}/>Join Date: {profileData.dateJoined}
                </span>
            </div>
            <div>
                <span className={""}>
                    <span className={""}>{profileData.followingCount}</span> Following &nbsp;&nbsp;
                    <span>{profileData.followersCount}</span> Followers
                </span>
            </div>


        </div>
    )

// return(<div>
//     <div className={"row"}>

//     </div>
// </div>)
}

export default Profile;