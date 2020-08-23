import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (state, addPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

export default renderEntireTree;
