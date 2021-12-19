import {profileAPI} from "../api/api";

const ADD_POST = 'profileReducer/ADD-POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const CHANGE_PHOTO = 'profileReducer/CHANGE_PHOTO';
const DELETE_POST = 'profileReducer/DELETE_POST'


let initialState = {
    posts: [
        {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
        {id: 2, message: 'I want to be a programmer', likes: 5},
        {id: 3, message: 'YO', likes: 4},
    ],
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: action.newPostText, likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case CHANGE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }

        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const changePhoto = (photos) => ({type: CHANGE_PHOTO, photos});
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.setProfile(userId);
    dispatch(setUserProfile(data));
}


export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));

}


export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}


export const updateUserPhoto = (image) => async (dispatch) => {
    let data = await profileAPI.changeAvatar(image)

    if (data.resultCode === 0) {
        dispatch(changePhoto(image))
    }

}


export default profileReducer;