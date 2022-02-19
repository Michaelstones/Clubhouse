import React from 'react'
import style from '../style/welcome.module.css';
import {Link} from 'react-router-dom';

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}>
            <p>
                We're working hard to get Clubhouse ready for everyone!
                while we wrap up the finishes touches, we're adding people gradually to make sure nothing breaks
            </p>
            <p>
                do u know that live is like a pot of soup
                We're working hard to get Clubhouse ready for everyone!
                while we wrap up the finishes touches, we're adding people gradually to make sure nothing breaks
            </p>
            <p>Paul, Rohan & Clubhouse team</p>
        </div>
        <div className={style.actionBtn}>
            <Link to='/invites' className='primaryBtn D-flex align-items-center'>
                Get your Username {''}
                {/* <img src='' alt=''/> */}
            </Link>
            <Link to='#'>Have an invite text? Sign in </Link>
        </div>
    </div>
  )
}

export default Welcome