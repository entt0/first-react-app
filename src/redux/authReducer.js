import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';

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

export const authUser = () => async (dispatch) => {
    let data = await authAPI.checkAuthorization()

    if (data.resultCode === 0) {
        let {login, email, id} = data.data;
        dispatch(setUserData(login, email, id, true));
    }


}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.sendLoginFormData(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(authUser());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }
}


export const logout = () => async (dispatch) => {
    let data = await authAPI.logoutUser()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}


export default authReducer;