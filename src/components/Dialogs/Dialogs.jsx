import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

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

export default Dialogs;