import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setUserData = (login, email, id) => ({type: SET_USER_DATA, data: {login, email, id}});

export const authUser = () => {
    return (dispatch) => {
        authAPI.checkAuthorization()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, email, id} = data.data;
                    dispatch(setUserData(login, email, id));
                }
            });
    }
}



export default authReducer;