import React, {useEffect} from "react";

import {Link} from "react-router-dom";

// const selectProfileData = (state) => {
//     console.log("state", state.profileData);
//     return (state.profileData.profileData);
// }

const Profile = () => {
    const profileData = useSelector(selectProfileData);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch));
    return (
        <div>
            <div className={"row"}>
                <div className={"col-1"}>
                    <i className={"fas fa-arrow-left align-bottom pl-2"}/>
                </div>
                <div className={"col"}>
                    <h6 className={"mb-0"}>{`${profileData.firstName} ${profileData.lastName}`}</h6>
                    {`${profileData.tweetCount} Tweets`}
                </div>
            </div>
            <div className={"position-relative"}>
                <img className={"img-fluid w-100"} src={profileData.bannerPicture} alt={"..."}/>
            </div>
            <div className={"position-relative"}>
                <img src={profileData.profilePicture} className={"rounded-circle position-absolute ms-2"}
                     width={"125px"} height={"125px"}
                     style={{top: '-62.5px', border: '5px solid black'}}
                     alt={'...'}
                />

            </div>
            <div>
                <div className={"row"}>
                    <div className={"offset-sm-8 offset-md-9"}>
                        <Link to={"/a8/twitter/profile/edit"}>
                            <button className={"mt-3 me-3 rounded-pill pt-1 pb-1 ps-2 pe-2 mb-3"}
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
                {`@${profileData.handle}`}
                <p className={"mb-1 mt-2 text-white"}>
                    {profileData.bio}
                </p>
                <span>
                    <i className={"fas fa-map-marker-alt"}/> {profileData.location} &nbsp;&nbsp;&nbsp;
                    <i className={"fas fa-globe"}/> {profileData.dateOfBirth} &nbsp;&nbsp;&nbsp;
                    <i className={"fas fa-calendar"}/> {profileData.dateJoined}
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
};

export default Profile;