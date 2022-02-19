import React, {useState} from 'react';
import style from '../../style/newroomd.module.css'
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai';
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs'

function NewRoomDetail(props) {
    const [micMute, setMicMute] = useState(false)
    const [itemsVisible, setItemsVisible] = useState(true)
    const card = props.cardDetail;
  return (
    <>
        <div className={style.roomcontainer}>
            <div className={style.head}>
                <div className={'d-flex align-items-center'}>
                    <a href='#'
                    onClick={()=>props.setSheetVisible(false)}>
                        <img src='./img/arrow.png' alt='log'
                        className={style.arrowIcon}/>
                    </a>
                    <span>HallWay</span>
                </div>
                <div>
                    <AiOutlineFile/>
                    <img src='./img/profile.jpeg' alt='log' 
                    className={style.profileImg}/>
                </div>
            </div>
            <div className={style.roomdetailcard}>
                <div className={'d-flex align-items-center justify-content-between'}
                style={{padding:'.5em 1em'}}>
                {card.member.map((item)=>(
                    <div className={style.membercontent}>
                        {micMute?(
                        <div className={style.audioIcon}>
                            <BsMicMuteFill/>
                        </div>
                        ):''}
                        <img src='./img/profile.jpeg' alt='log'/>
                        <p>
                            <span>*</span>
                            {item.firstName}
                        </p>
                    </div>
                ))}
                </div>
            </div>
            <div className={style.footer}>
                    <button onClick={()=>props.setSheetVisible(false)}>
                    <img src='./img/handpeace.jpg' alt='log'/>
                    Leave Quietly
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus/>
                        </button>
                        <button>
                            <img src='./img/handwave.png' alt='log'/>
                        </button>
                        <button onClick={()=>setMicMute(item=>!item)}>
                            {micMute?<BsMicMuteFill/>:<BsMicFill/>}
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default NewRoomDetail