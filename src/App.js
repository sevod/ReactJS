import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path = '/dialogs' component={FunDialogs}/>*/}
                {/*<Route path = '/dialogs' render={FunDialogs}/>*/}
                {/*<Route path = '/dialogs' component={() => <Dialogs />}/>*/}
                <Route path = '/dialogs' render={() => <Dialogs state = {props.state.dialogsPage}/>}/>
                <Route path = '/profile' render={() => <Profile profilePage = {props.state.profilePage} addPost ={props.store.addPost.bind(props.store)} updateNewPostText = {props.store.updateNewPostText.bind(props.store)} />}/>
                <Route path = '/news' render={() => <News />}/>
                <Route path = '/music' render={() => <Music />}/>
                <Route path = '/settings' render={() => <Settings />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
