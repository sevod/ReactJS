import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className = {s.content}>
        <div>
          <img src ='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg' />
        </div>
        <div>
          ava + dis
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div className = {s.posts}>
            <div className = {s.item}>
              post 1
            </div>
            <div className = {s.item}>
              post 1
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;