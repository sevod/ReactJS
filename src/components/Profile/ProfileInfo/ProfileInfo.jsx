import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (event) => {
        if (event.target.files[0])
            props.savePhotoThunkCreator(event.target.files[0]);
    }
    const onSubmit = (formData) => {
        props.saveProfileThunkCreator(formData).then(
            () => {
                setEditMode(false);
            }
        );

    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.top} src='https://gazeta.spb.ru/wp-content/uploads/2019/06/beach-2179624_960_720.jpg'/>*/}
            {/*</div>*/}
            <div>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <div><input type={"file"} onChange={onMainPhotoSelected}/></div>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                {editMode ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile = {props.profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}


            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <b>Full name</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>

        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit profile</button>
        </div>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle} :</b> {contactValue}</div>
}

export default ProfileInfo;