import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    addPostActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map
    (
        dialogs => (<DialogItem name={dialogs.name} id={dialogs.id}/>)
    );

    let messagesElements = props.state.messagesData.map(
        messagesData => (<Message message={messagesData.message}/>)
    );

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };

    let onSendMessageClick = () => {
        let action = addMessageActionCreator()
        props.dispatch(action);
    };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} value={props.state.newMessageBody} placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;