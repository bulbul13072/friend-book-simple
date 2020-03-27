import React from 'react';
import logo from '../../images/banner.png' ;
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/friends"> See All Friends..</a>
                <a href="/added_friends">Added Friends..</a>
            </nav>
        </div>
    );
};

export default Header;