import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const DELETE_POST = 'DELETE_POST'



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


export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export const updateUserPhoto = (image) => {
    return (dispatch) => {
        profileAPI.changeAvatar(image)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changePhoto(image))
                }
            });
    }
}

export default profileReducer;