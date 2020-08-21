import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            {/*<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>*/}
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        < div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dilogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'}
    ];

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dilogsData[0].name} id={dilogsData[0].id}/>
                    <DialogItem name={dilogsData[1].name} id={dilogsData[1].id}/>
                    <DialogItem name={dilogsData[2].name} id={dilogsData[2].id}/>
                    <DialogItem name={dilogsData[3].name} id={dilogsData[3].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                    <Message message={messagesData[3].message} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;