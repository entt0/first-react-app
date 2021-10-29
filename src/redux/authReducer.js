import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }
        default:
            return state;
    }
};

export const setUserData = (login, email, id, isAuth) => ({type: SET_USER_DATA, payload: {login, email, id, isAuth}});

export const authUser = () => {
    return (dispatch) => {
      return authAPI.checkAuthorization()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, email, id} = data.data;
                    dispatch(setUserData(login, email, id, true));
                }
            });
        return 'to'
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.sendLoginFormData(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authUser());
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}));
                }

            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logoutUser()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }
            });
    }
}


export default authReducer;