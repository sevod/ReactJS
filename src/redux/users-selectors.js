import {createSelector} from "reselect";

export const getUsers = (state) => {
    console.log("getUsers");
    return state.usersPage.users;
    //return state.usersPage.users.filter(u => true); //for test/lesson
}

export const getUsersSelector = (state) => {
    //return state.usersPage.users;
    return getUsers(state).filter(users => true); //for test/lesson
}

export const getUsersSuperSelector = createSelector(getUsers,(users) => {
    console.log("createSelector");
    return users.filter(users => true);
});


export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}