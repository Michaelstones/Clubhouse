import React, {useState, useEffect} from 'react';
import style from '../style/room.module.css'
import data from '../Data/roomdata.json'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs'

function RoomCard(props) {
  return (
    <>
    {data.map((item, index)=>{
        return (
            <div key={index}>
                <div>
                    <div className={style.roomContainer}>
                        <h6>{item.title}</h6>
                        <h2>{item.Sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                            <img src='./img/userimg.jpg'/>
                            <img src='./img/userimg.jpg'/>
                            </div>
                            <div>
                            {item.member.map((person, index)=>{
                                return (
                                    <p key={index}>
                                        {person.firstName}{person.lastName}<BsChatDots/>
                                    </p>
                                )
                            })}
                            <p className='d-flex align-items-center'>
                                <span className='mr-2'>1.8</span>
                                <BsFillPersonFill/>
                                <span className='mx-2'></span>{' '}
                                <span className='mr-2'>5</span><BsChatDotsFill/>
                            </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default RoomCard