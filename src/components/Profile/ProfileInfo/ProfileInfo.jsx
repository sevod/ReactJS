import React from 'react';
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.top} src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>
            </div>
            <div>
                <img className={s.face} src={props.profile.photos.large} />
            </div>
        </div>
    );
}

export default ProfileInfo;