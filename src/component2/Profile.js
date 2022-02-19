import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import {Link} from 'react-router-dom'
import {BsAt, BsPlus, BsUpload} from 'react-icons/bs'
import {AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter} from 'react-icons/ai'
function Profile() {
  return (
    <>
      <div className={style.profilecontainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} texte-right mb-0`}>
            <Link to='/home'>
            <img src='img/arrow.png' alt='log' />
            </Link>
            <div className={style.actionBtn}>
              <BsAt/>
              <BsUpload/>
              <AiOutlineSetting/>
            </div>
          </div>
        </div>
        <img 
        className={style.profileImg}
        src='./img/profile.jpeg'
        alt='log'
        />
        <h4>Sule</h4>
        <p>@Sule_Dev</p>
        <div className={style.follow}>
          <p>
            <span>0 </span> followers
          </p>
          <p>
            <span>29 </span> following
          </p>
        </div>
        <button>Add a Bio</button>
        <div className='mb-4'>
          <button className='mb-0'>
            <AiOutlineTwitter/>
          </button>
          <button className='mb-0'>
            <AiOutlineInstagram/>
          </button>
        </div>
        <div className={style.nominated}>
          <img src='./img/profile.jpeg' alt='log'/>
          <div>
            <p>Joined 14-july-2020</p>
            <p>Nominated by <span>Michael Oluwasegun</span></p>
          </div>
        </div>
          <p>Member of</p>
          <button className={style.addmember}>
            <BsPlus/>
          </button>
      </div>
    
    
    </>
  )
}

export default Profile