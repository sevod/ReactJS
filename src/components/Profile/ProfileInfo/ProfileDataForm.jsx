import React from "react";
import {CreateField, TextArea, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataFormReduxForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full name</b>
            {CreateField("Full name", "fullName", [], Input)}
        </div>

        <div>
            <b>Looking for a job:</b>
            {CreateField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills:</b>
            {CreateField("My professional skills", "lookingForAJobDescription", [], TextArea)}
        </div>

        <div>
            <b>About me:</b>
            {CreateField("About me", "aboutMe", [], TextArea)}
        </div>

        <b>Contacts: </b>
        {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key} :</b> {CreateField(key, "contacts." + key, [], Input)}
            </div>
        })}

        {error &&
        <div className={style.formSummaryError}>
            {error}
        </div>
        }

        <div>
            <button>save profile</button>
        </div>
    </form>
}

const ProfileDataForm = reduxForm({form: 'edit-profile'})(ProfileDataFormReduxForm);

export default ProfileDataForm;
