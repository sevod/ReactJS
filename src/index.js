import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";

//for test/lesson
// setInterval(() => {
//      store.dispatch({type: "FAKE"});
// }, 1000);

ReactDOM.render(
    //<React.StrictMode>
        <SamuraiJSApp/>,
    //</React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
