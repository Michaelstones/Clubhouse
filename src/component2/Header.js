import React from 'react';
import {Link} from 'react-router-dom';
import style from '../style/header.module.css';

function Header() {
  return (
    <div className={style.header}>
        <Link exact to='/explore'>
            <img src='./img/searchIcon.png' alt='logo'/>
        </Link>

        <div className={style.nav_items}>
            <Link exact to='/invite_friend'>
                <img src='./img/invite.png' alt='log'/>
            </Link>
       
            <Link exact to='/upcoming'>
                <img src='./img/calender.png' alt='log'/>
            </Link>
        
            <Link exact to='/activity'>
                <img src='./img/notifi.png' alt='log'/>
            </Link>
        
            <Link exact to='/profile' >
                <img alt='log' style={{borderRadius:'50%'}} src='./img/profile.jpeg'/>
            </Link>
        </div>
    </div>
  )
}

export default Header