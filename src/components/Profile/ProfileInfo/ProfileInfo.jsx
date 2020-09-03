import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.top} src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>*/}
            {/*</div>*/}
            <div>
                <img className={s.face} src={props.profile.photos.large} />
                <ProfileStatus status ={"ЭТО МОЙ СТАТУС"} />
            </div>
        </div>
    );
}

export default ProfileInfo;