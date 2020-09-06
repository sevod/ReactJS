import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 =  maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newMessageBody'} placeholder={'Enter your message'} validate = {[required, maxLength50]}/>
            </div>
            <div>
                <Field component={'button'}>Add message</Field>
            </div>
        </form>)
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux;