import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().MessagesPage;

    //
    // let dialogsElements = state.dialogs.map
    // (
    //     dialogs => (<DialogItem name={dialogs.name} id={dialogs.id}/>)
    // );
    //
    // let messagesElements = state.getState().messagesData.map(
    //     messagesData => (<Message message={messagesData.message}/>)
    // );
    //



    let onNewMessageChange = (body) => {
        let action = updateNewMessageTextActionCreator(body);
        props.store.dispatch(action);
    };

    let onSendMessageClick = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    };

    return (
       <Dialogs
           updateNewMessageBody = {onNewMessageChange}
           sendMessage = {onSendMessageClick}
           dialogs = {state.dialogs}
           messagesData = {state.messagesData}
       />

    );
}

export default DialogsContainer;