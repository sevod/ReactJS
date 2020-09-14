import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage, toggleFollowingInProgress,
    unFollowThunkCreator
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        let pageSize = this.props.pageSize;
        this.props.getUsersThunkCreator(page, pageSize);
        this.props.setCurrentPage(page);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        //users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {setCurrentPage, toggleFollowingInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator}),
    withAuthRedirect)(UsersContainer);
