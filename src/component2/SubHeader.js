import React from 'react';
import style from '../style/explore.module.css'
import {Link} from 'react-router-dom'

function SubHeader(props) {
  return (
    <div className={style.head}>
        <Link to='/home'>
            <img src='img/arrow.png' alt='log' className={style.arrow}/>
        </Link>
        <h3>{props.Title}</h3>
    </div>
  )
}

export default SubHeader