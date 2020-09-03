import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unFollow, unFollowThunkCreator
} from "../../redux/users-reducer";
import {getUsers, usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default  compose(
    connect(mapStateToProps,
        {setCurrentPage, toggleFollowingInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator}),
    withAuthRedirect)(UsersContainer);

// export default connect(mapStateToProps,
//     {setCurrentPage, toggleFollowingInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator}
// )(AuthRedirectComponent);