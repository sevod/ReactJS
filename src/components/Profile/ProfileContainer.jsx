import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`).then(response => {
        // });
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        });
    }
    render() {
        debugger;
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

export default connect(mapStateToProps, {setUserProfile, addPostActionCreator, updateNewPostTextActionCreator})(ProfileContainer);