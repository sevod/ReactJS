import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {




    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState().MessagesPage;

            let onNewMessageChange = (body) => {
                let action = updateNewMessageTextActionCreator(body);
                store.dispatch(action);
            };

            let onSendMessageClick = () => {
                let action = addMessageActionCreator()
                store.dispatch(action);
            };
            return (
                <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogs={state.dialogs}
                    messagesData={state.messagesData}
                />)
        }
        }</StoreContext.Consumer>
    );
}

export default DialogsContainer;