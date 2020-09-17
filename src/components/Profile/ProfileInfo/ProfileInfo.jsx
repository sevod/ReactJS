import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {

    const onMainPhotoSelected = (event) => {
        if (event.target.files[0])
            props.savePhotoThunkCreator(event.target.files[0]);
    }
debugger;
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.top} src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>*/}
            {/*</div>*/}
            <div>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
                {props.isOwner && <div><input type={"file"} onChange={onMainPhotoSelected}/></div>}
                <ProfileStatusWithHooks status ={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;