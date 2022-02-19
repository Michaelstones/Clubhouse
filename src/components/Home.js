import React, {useState} from 'react';
import Dailycard from '../component2/Dailycard';
import Header from '../component2/Header';
import style from '../style/home.module.css'
import RoomCard from '../component2/RoomCard';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3Gap} from 'react-icons/bs'
import data from '../Data/roomdata.json'
import BottomSheet from '../component2/BottomSheet';
import newRoom from '../Data/newRoom.json'
function Home() {
  const [ itemsVisible, setItemsVisible] = useState(true)
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [ loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardId] = useState(1)
  return(
   <>
   {loaderVisibility?(
     <div style={{
       postion:'fixed',
       left:'0',
       bottom: 0,
       right: 0,
       top: 0,
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
     }}>
       <img src='./img/loader.gif'/>
     </div>
   ):('')}
      <Header/>
      <div className={style.home_container}>
        <Dailycard/>
        <RoomCard/>
      </div>
      <div className={style.actionBtn}>
        <button onClick={()=> setSheetVisible(true)}>
          <AiOutlinePlus className='mr-2'/> start a room
        </button>

        <button>
          <BsGrid3X3Gap className='mr-2'/> 
        </button>
      </div>
      <BottomSheet
        sheetTitle='start room'
        setSheetVisible={item => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item)=> item.id == cardId)}
        setItemsVisible = {(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item)=>{
          setLoaderVisibility(true)
          setTimeout(()=>{
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          },1000)
        }}
      />
      <BottomSheet
      sheetTitle='new room'
      setSheetVisible={(item)=>setSheetCreateRoom(item)}
      sheetVisible={sheetCreateRoom}
      cardDetail={newRoom}
      setItemsVisible={item=>setItemsVisible(item)}
      />
  </>
  )
}

export default Home