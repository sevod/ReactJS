import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map
    (
        dialogs => (<DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id}/>)
    );

    let messagesElements = props.messagesData.map(
        messagesData => (<Message message={messagesData.message} key={messagesData.id}/>)
    );

    const addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
            </div>
            <div>
                <Field component={'button'}>Add message</Field>
            </div>
        </form>)
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;