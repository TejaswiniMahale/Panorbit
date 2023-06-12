import React, { useEffect, useState } from 'react'
import {Route, Routes, useParams} from 'react-router-dom';
import axios from "axios"
import Sidebar from '../Components/Sidebar';
import map from "../Assets/map.png"
import Chat from '../Components/Chat';

const Profile = () => {
  let {id} = useParams()
  const [singleProfileData, setSingleProfileData] = useState([])
  const [companyData, setComapanyData] = useState([])
  const [adressData, setAdressdata] = useState([])
  const [geoData,setGeoData] = useState([])

    useEffect(()=>{
        axios.get('https://panorbit.in/api/users.json') 
        .then((res)=>{
          setSingleProfileData(res.data.users[id-1])
          setComapanyData(res.data.users[id-1].company)
          setAdressdata(res.data.users[id-1].address)
          setGeoData(res.data.users[id-1].address.geo)
        })   
    },[])


  return (
    <div className='Main_profile'>
      <div>
        <Sidebar className="sidebar"/>
        <div className='profile_container'>
          <div className='navbar_profile'>
            <p className='medium_dark_t'>Profile</p>
            <div className='profile_h_container'>
              <img src={singleProfileData.profilepicture} alt='profile_image'/>
              <p>{singleProfileData.name}</p>
            </div>
          </div>
          <div className='profile_info'>
            <div className='detail_container1'>
              <div className='Profile_bigimage'>
                <img src={singleProfileData.profilepicture} alt='Profile_image'/>
              </div>
              <p className='medium_dark_t t_center'>{singleProfileData.name}</p>
              <div className='text_container'>
                <div>
                  <p className='medium_light_t'>Username : </p>
                  <p className='medium_dark_t'>{singleProfileData.username}</p>
                </div>
                <div>
                  <p className='medium_light_t'>e-mail : </p>
                  <p className='medium_dark_t'>{singleProfileData.email}</p>
                </div>
                <div>
                  <p className='medium_light_t'>Phone : </p>
                  <p className='medium_dark_t'>{singleProfileData.phone}</p>
                </div>
                <div>
                  <p className='medium_light_t'>Website : </p>
                  <p className='medium_dark_t'>{singleProfileData.website}</p>
                </div>
              </div>
              <div className='line_h'></div>
              <p className='medium_light_t t_center'>Company</p>
              <div className='text_container'>
                <div>
                  <p className='medium_light_t'>Name : </p>
                  <p className='medium_dark_t'>{companyData.name}</p>
                </div>
                <div>
                  <p className='medium_light_t'>Catchphrase : </p>
                  <p className='medium_dark_t'>{companyData.catchPhrase}</p>
                </div>
                <div>
                  <p className='medium_light_t'>bs : </p>
                  <p className='medium_dark_t'>{companyData.bs}</p>
                </div>
              </div>
            </div>
            <div className='detail_container2'>
              <p className='medium_light_t '>Address</p>
              <div className='text_container'>
                <div>
                  <p className='medium_light_t'>Street : </p>
                  <p className='medium_dark_t'>{adressData.street}</p>
                </div>
                <div>
                  <p className='medium_light_t'>Suite : </p>
                  <p className='medium_dark_t'>{adressData.suite}</p>
                </div>
                <div>
                  <p className='medium_light_t'>City : </p>
                  <p className='medium_dark_t'>{adressData.city}</p>
                </div>
                <div>
                  <p className='medium_light_t'>Zipcode :</p>
                  <p className='medium_dark_t'>{adressData.zipcode}</p>
                </div>
              </div>
              <div className='map_container'>
                <img src={map} alt='map'/>
                <div>
                  <p>Lat : <span>{geoData.lat}</span></p>
                  <p>Lang : <span>{geoData.lat}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat/>
    </div>
  )
}

export default Profile