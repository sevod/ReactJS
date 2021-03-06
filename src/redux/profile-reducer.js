import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELL_POST = 'DELL_POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 30},
        {id: 3, message: 'Yo!', likesCount: 1},
        {id: 4, message: 'Yo!', likesCount: 0}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: "no status"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, {id: 5, message: action.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }
        case DELL_POST: {
            return {
                ...state,
                postData: [...state.postData.filter(post => post.id != action.numberOfPost)],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_PHOTO_SUCCESS : {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostActionCreator = (numberOfPost) => ({type: DELL_POST, numberOfPost});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId) => async (dispath) => {
    let response = await usersAPI.getProfile(userId);
    dispath(setUserProfile(response));
}
export const getUserStatusThunkCreator = (userID) => async (dispatch) => {
    let response = await profileAPI.getStatus(userID);
    dispatch(setStatus(response));
}
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.data.photos))
}
export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
    const UserId = getState().auth.id;
    debugger;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0)
        dispatch(getUserProfileThunkCreator(UserId));
    else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;