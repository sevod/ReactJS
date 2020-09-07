import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserProfile,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        } else if (!userId)
            this.props.history.push("/login");
        if (userId) {
            this.props.getUserProfileThunkCreator(userId);
            this.props.getUserStatusThunkCreator(userId);
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
