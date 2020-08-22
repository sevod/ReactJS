import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map
    (
        dialogs => (<DialogItem name={dialogs.name} id={dialogs.id}/>)
    );

    let messagesElements = props.messagesData.map(
      messagesData => (<Message message={messagesData.message} />)
    );

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;