import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthUserThunk} from "./redux/auth-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
//import UsersContainer from "./components/Users/UsersContainer";
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));


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

                        {/*<Route path='/profile/:userId?' render={() => <Suspense fallback={<Preloader/>}>*/}
                        {/*    <ProfileContainer/>*/}
                        {/*</Suspense>}/>*/}

                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>

                        <Suspense fallback={<Preloader/>}>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        </Suspense>
                        <Suspense fallback={<Preloader/>}>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                        </Suspense>
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

// export default compose( //от compose крашится
//     withRouter,
//     connect(mapStateToProps, {getAuthUserThunk})(App)
// );

let AppContainer = withRouter(connect(mapStateToProps, {getAuthUserThunk})(App));

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;