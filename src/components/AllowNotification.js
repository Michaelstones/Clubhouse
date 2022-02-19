import React from 'react'
import style from '../style/phoneContainer.module.css'
import {Link} from 'react-router-dom'

function AllowNotification() {
  return (
    <div className={style.phoneContainer}>AllowNotification
        <div className='text-center'>
            <h1 className='mb-4'>Last, Important Step!</h1>
            <h1 className='mb-3'>Enable Notification to know when people are talking</h1>
            <div className={style.notificationContainer}>
                <div className='p-3'>
                    <h3>"Clubhouse" Would Like To send You Notification</h3>
                    <p>Notification may include alert, sound and Icon</p>
                </div>
                <div className={style.action_btn}>
                    <Link to = '/home'>Don't Allow</Link>
                    <Link to = '/home'>Allow</Link>
                </div>
                    <Link to='#'>
                        <img src='./img/handIcon.png' alt='logo' className={style.handIcon}/>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification