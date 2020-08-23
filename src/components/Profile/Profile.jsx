import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postData = {props.state.postData} addPost ={props.addPost}/>
        </div>
    );
}

export default Profile;