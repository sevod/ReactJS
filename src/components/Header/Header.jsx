import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className = {s.header}>
        <img src = 'https://upload.wikimedia.org/wikipedia/ru/b/b7/Discord_logo_svg.svg'/>
      </header>
    );
}

export default Header;