import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserThunk} from "./redux/auth-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "./hoc/withAuthRedirect";

class App extends React.Component {

    componentDidMount() {
        this.props.getAuthUserThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        } else
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.auth.initialized
})

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {getAuthUserThunk})(App)
// );

export default connect(mapStateToProps, {getAuthUserThunk})(App);
