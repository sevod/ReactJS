import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>
            </div>
            <div>
                ava + dis
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;