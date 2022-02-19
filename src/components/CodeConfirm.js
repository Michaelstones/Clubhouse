import React from 'react'
import style from '../style/phoneContainer.module.css';
import {Link} from 'react-router-dom'

function CodeConfirm() {
  return (
    <div className={style.phoneContainer}>
        <Link to='/'>
            <img src='./img/arrow.png' alt='logo' className={style.backBtn} width='20px'/>
        </Link>
        <div className="text-center">
            
            <h1 style={{width:'100%' , maxWidth:'200px', marginBottom:'1em'}} >
                Enter the code we just texted you
            </h1>
            <input 
            style={{
                width:'100%',
                border:'none',
                textAlign:'center',
                outline:'none'
        }}
            />
            <p className='mt-2'>
                Didn't receive it? 
                <span>tap to resend.</span>
            </p>
        </div>
            <Link to='/notifications'
             className='primaryBtn d-flex align-items-center'>
                 Next <img src='./img/download.png' className='ml-1' width='10px'/>
            </Link>
    </div>
  )
}

export default CodeConfirm