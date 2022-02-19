import React,{useState} from 'react'
import style from '../../style/bottomsheet.module.css'
import {FcGlobe} from 'react-icons/fc'

function StartRoom(props) {
    const [room, setRoom] = useState('open')
  return (
    <>
        <div className={style.switchLine}></div>
        <div className='text-right'>
            <button className={style.addAtopic}>+ Add a Topic</button>
        </div>
        <div className={style.selectRoom}>
            <button className={room === 'open'? style.active:''}
            onClick={()=>setRoom('open')}
            >
                <div>
                    <FcGlobe/>
                </div>
                    open
            </button>

            <button className={room === 'social'? style.active:''}
            onClick={()=>setRoom('social')}
            >
                <div>
                    <FcGlobe/>
                </div>
                Social
            </button>

            <button className={room === 'closed'? style.active:''}
            onClick={()=>setRoom('closed')}
            >
                <div>
                    <FcGlobe/>
                </div>
                Closed
            </button>
        </div>

        <div className={style.BottomContainer}>
        <p>
                Start a room {' '} <span>
                    {room==='clsed'?'for people I choose':
                    room==='social'? 'with people I follow':
                    'open to everyone'}

                </span>
            </p>
            <div className='text-center'>
                <button className={style.letgoBtn}
                onClick={()=>{
                    props.setSheetCreateRoom(true)
                    props.setSheetVisible(true)
                }}
                >
                    🎉  Let's go
                </button>
            </div>
        </div>
    </>
  )
}

export default StartRoom