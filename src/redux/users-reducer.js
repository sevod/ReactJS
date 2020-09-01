import {usersAPI} from "../api/api";

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
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    } else
                        return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    } else
                        return user;
                })
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
    return (dispath) => {
        dispath(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispath(toggleIsFetching(false));
            dispath(setUsers(data.items));
            dispath(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followThunkCreator = (usersId) => {
    return (dispath) => {
        dispath(toggleFollowingInProgress(true, usersId));
        usersAPI.follow(usersId).then(data => {
            if (data.resultCode == 0) {
                dispath(followSuccess(usersId));
            }
            dispath(toggleFollowingInProgress(false, usersId));
        });
    }
}

export const unFollowThunkCreator = (usersId) => {
    return (dispath) => {
        dispath(toggleFollowingInProgress(true, usersId));
        usersAPI.unfollow(usersId).then(data => {
            if (data.resultCode == 0) {
                dispath(unFollowSuccess(usersId))
            }
            dispath(toggleFollowingInProgress(false, usersId));

        });
    }
}

export default usersReducer;