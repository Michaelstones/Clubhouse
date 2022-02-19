import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import {Link} from 'react-router-dom'
import style from '../style/phoneContainer.module.css';

function PhoneConfrim() {
    const [value, setValue] = useState()
  return (
    <div
    className={style.phoneContainer}
    >
        <h1>Enter your Phone</h1>
        <Link to='/' className={style.backBtn}>
          <img src='/img/arrow.png' alt='arrow'/>
        </Link>
        <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
        />
        <p>By entering your number, you are agreeing to our  
            <span> Terms of Service</span>
            Thanks!
        </p>
        <Link to='/code_confirm' className='primaryBtn'>
          Next <img src='./img/download.png' className='ml-1' width='10px' alt='logo'/>
        </Link>
    </div>
  )
}

export default PhoneConfrim