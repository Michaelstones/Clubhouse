import React from 'react'
import style from '../style/explore.module.css'
import {DownOutlined, FireOutlined} from '@ant-design/icons'
import data from '../Data/Explore.json'
import {Input} from 'antd'
import SubHeader from '../component2/SubHeader'

function Explore() {
    const {people, conversation} = data
  return (
    <div className={style.explorecontainer}>
        <div className={style.header}>
            <SubHeader Title='Explore'/>
            <Input 
            style={{Color:'#f4f4f4',
            boxShadow:'none',
            border:'none',
            borderRadius:'0.8em',
            padding: '0.3em 1em',
             }}
             placeholder='Find People and Club'
             size='large'
             prefix={<img src='./img/searchIcon.png' width='15px' alt='log'/>}
            ></Input>
        </div>
        <h6>People to follow</h6>
        <div className={style.peoplecontent}>
            {people.map((item)=>(
                <div>
                    <div className='d-flex align-items-center'>
                        <img src='./img/profile.jpeg' alt='log'/>
                        <div className='ml-2'>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    <button>follow</button>
                </div>
            ))}
            <button className={style.showmore}>
                Show more people <DownOutlined/>
            </button>
        </div>
        <h6>FIND CONVERSATION ABOUT...</h6>
        <div className='row mx-0'>
            {conversation.map((item)=>(
                <div className='col-6 px-2 mb-3'>
                    <div className={style.conversationCard}>
                        <h6 >
                            <FireOutlined/>
                            {item.title}
                        </h6>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Explore