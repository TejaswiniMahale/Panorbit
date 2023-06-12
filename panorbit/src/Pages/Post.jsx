import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from "axios"
import Sidebar from '../Components/Sidebar';

const Post = () => {
  let {id} = useParams()
  const [singleProfileData, setSingleProfileData] = useState([])

    useEffect(()=>{
        axios.get('https://panorbit.in/api/users.json') 
        .then((res)=>{
          setSingleProfileData(res.data.users[id-1])
        })   
    },[])


  return (
    <div className='Main_profile'>
      <div>
        <Sidebar className="sidebar"/>
        <div className='profile_container'>
          <div className='navbar_profile'>
            <p className='medium_dark_t'>Post</p>
            <div className='profile_h_container'>
              <img src={singleProfileData.profilepicture} alt='profile_image'/>
              <p>{singleProfileData.name}</p>
            </div>
          </div>
          <div className='profile_info'>
            <p className='coming_soon_t'>Coming Soon</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Post