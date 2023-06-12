import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Style.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {

    const [profileData, setProfileData] = useState([])


    useEffect(()=>{
        axios.get('https://panorbit.in/api/users.json') 
        .then((res)=>{
        setProfileData(res.data.users)
        })   
    },[])
    console.log(profileData)
  return (
    <div className='landing-container'>
        <div className='main_list_container'>
            <div className='profile_list_container'>
                <p className='h_text heading_profile_list'>Select an account</p>
                <div className='main_profile_list'>
                    <div className='profile_list'>
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

export default LandingPage