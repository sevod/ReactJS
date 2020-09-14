import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAKE": {
            return {
                ...state,
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true};
                //     } else
                //         return user;
                // })
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userId, "id", {followed: true})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true};
                //     } else
                //         return user;
                // })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userId, "id", {followed: false})
                // users: state.users.map((user) => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false};
                //     } else
                //         return user;
                // })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(userId => userId != action.userId)]
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispath) => {
        dispath(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispath(setUsers(data.items));
        dispath(setTotalUsersCount(data.totalCount));
        dispath(toggleIsFetching(false));
    }
}

export const followUnfollowFlow = async (dispath, usersId, apiMethod, actionCreator) => {
    dispath(toggleFollowingInProgress(true, usersId));
    let data = await apiMethod(usersId);
    if (data.resultCode == 0) {
        dispath(actionCreator(usersId))
    }
    dispath(toggleFollowingInProgress(false, usersId));
}

export const followThunkCreator = (usersId) => {
    return async (dispath) => {
        followUnfollowFlow  (dispath, usersId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unFollowThunkCreator = (usersId) => {
    return async (dispath) => {
        followUnfollowFlow  (dispath, usersId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess);
    }
}

export default usersReducer;