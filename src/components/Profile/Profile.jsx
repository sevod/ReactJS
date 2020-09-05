import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        debugger;
        return (
            <div className={s.content}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

export default Profile;