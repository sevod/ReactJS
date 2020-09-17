import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             savePhotoThunkCreator={props.savePhotoThunkCreator}
                             isOwner={props.isOwner}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

export default Profile;