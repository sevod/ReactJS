import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 30},
    {id: 3, message: 'Yo!', likesCount: 1},
    {id: 4, message: 'Yo!', likesCount: 0}
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Da da!'},
    {id: 4, message: 'Yo!'}
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
