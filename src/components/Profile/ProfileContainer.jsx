import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserProfile,
    updateStatusThunkCreator,
    savePhotoThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator}
                savePhotoThunkCreator={this.props.savePhotoThunkCreator}
            />
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
        updateStatusThunkCreator,
        savePhotoThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
