import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state ={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

let state = store.getState();

renderEntireTree(state);


store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
