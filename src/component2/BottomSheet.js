import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/bottomsheet.module.css'
import StartRoom from './BottomSheet/StartRoom';
import NewRoomDetail from './BottomSheet/NewRoomDetail';
// SwipeableBottomSheet
const BottomSheet = (props)=> {
  return (
    <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)
        }}
        fullScreen = {props.sheetTitle === 'room detail'? true : false}
    >
       <div className={style.BottomSheetContainer}
        style={{background:props.sheetTitle === 'profile' ? 'transparent': ''}}>
        {props.sheetTitle === 'new room'?(<NewRoomDetail
        cardDetail={props.cardDetail}
          setSheetVisible={(item)=>{
            props.setSheetVisible(item)
            props.setItemsVisible(true)
          }}
        />):props.sheetTitle === 'start room'?(
          <StartRoom
          setSheetCreateRoom={props.setSheetCreateRoom}
          setSheetVisible={(item)=>{
            props.setSheetVisible(item)
            props.setItemsVisible(true)
          }}
        />
        ):''}
        </div>  
    </SwipeableBottomSheet>
  )
}

export default BottomSheet