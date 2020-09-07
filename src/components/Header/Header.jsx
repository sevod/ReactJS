import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/b/b7/Discord_logo_svg.svg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <a onClick={props.logoutThunk} href='#'>logout</a></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;