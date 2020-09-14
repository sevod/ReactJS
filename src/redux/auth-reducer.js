import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-net/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    initialized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getAuthUserThunk = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(getAuthUserThunk());
    } else {
        let action = stopSubmit("login", {_error: "Email or password is wrong"});
        dispatch(action);
    }
}

export const logoutThunk = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;