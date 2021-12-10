import profile from './data/profileData.json';

const initialState = {
    profileData: profile
};

const profileData = (state = initialState, action: any) => {
    switch (action.type) {
        case 'fetch-profile':
            console.log('dispatch profile', action.profile);
             return({profileData: action.profile})
        case 'update-profile':
            return({profileData: action.profile});
        case 'save':
            const profileData = {
                ...state.profileData,
                bio: action.bio,
                firstName: action.firstName,
                lastName: action.lastName,
                location: action.location,
                dateOfBirth: action.birthday,
                website: action.website,
            };
            return(
                {...state, profileData: profileData}
            )
        default:
            return(state);
    }
}

export default profileData;