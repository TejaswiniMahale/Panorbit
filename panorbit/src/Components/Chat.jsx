
import React, { useEffect, useState } from 'react'
import {BiMessage} from "react-icons/bi";
import { BsChevronUp } from "react-icons/bs";
import "./chat.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [profileData, setProfileData] = useState([])


    useEffect(()=>{
        axios.get('https://panorbit.in/api/users.json') 
        .then((res)=>{
        setProfileData(res.data.users)
        })   
    },[])

  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const closeChatBox = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
    <div className="chat-content" onClick={toggleChatBox}>
          <div className='profile_list_container' style={{width:"350px",height:"500px",marginRight:"550px"}}>
                <div className='main_profile_list' style={{width:"350px",height:"500px"}}>
                    <div className='profile_list' style={{width:"350px"}}>
                        {
                            profileData?.map((e,i)=>{
                                return <Link to={`/profile/${e.id}`} >
                                    <div key={e.id} className='single_profile_list'>
                                        <img className='profile_pic_list' src={e.profilepicture} alt='Profile_picture'/>
                                        <p className='p_text profile_list_name'>{e.name}</p>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
  </div>
  )
}

export default Chat