import React from 'react';
import style from '../style/dailycard.module.css';
import data from '../Data/dailydata.json'

function Dailycard() {
    // console.log(data); 
  return (
    <div className={style.diailycard}>
        {data.map((item, index)=>{
            return (
                <div key={index}>
                    <span className=''>{item.time}</span>
                    <div>
                        <span className=''> {item.title}</span>
                        <p>{item.Description}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Dailycard