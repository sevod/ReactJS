import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;
        this.props.getUserProfileThunkCreator(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator})(WithUrlDataContainerComponent);